import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { client } from "../sanity/client";
import { buildImageUrl } from "../sanity/imageUrl";

const ROTATE_EVERY_MS = 10000;
const SWIPE_THRESHOLD = 50;

export default function KeinGeheimtipp() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const [mouseStartX, setMouseStartX] = useState(null);

  useEffect(() => {
    async function fetchSecretTips() {
      try {
        const topicQuery = `*[
          _type == "topic" &&
          (
            lower(title) match "*geheimtipp*" ||
            lower(slug.current) match "*geheimtipp*"
          )
        ]{
          _id,
          title,
          "slug": slug.current
        }`;

        const matchedTopics = await client.fetch(topicQuery);
        const topicIds = (matchedTopics || []).map((topic) => topic._id);

        if (!topicIds.length) {
          setPosts([]);
          return;
        }

        const postQuery = `*[
          _type == "post" &&
          defined(slug.current) &&
          count(topics[@._ref in $topicIds]) > 0
        ] | order(publishedAt desc){
          _id,
          title,
          excerpt,
          slug,
          image,
          "imageAspectRatio": image.asset->metadata.dimensions.aspectRatio
        }`;

        const data = await client.fetch(postQuery, { topicIds });
        setPosts(data || []);
        setActiveIndex(0);
      } catch (err) {
        setError(err?.message || "Unknown error");
      }
    }

    fetchSecretTips();
  }, []);

  useEffect(() => {
    if (posts.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % posts.length);
    }, ROTATE_EVERY_MS);

    return () => clearInterval(timer);
  }, [posts]);

  const activePost = useMemo(() => {
    if (!posts.length) return null;
    return posts[activeIndex];
  }, [posts, activeIndex]);

  const onTouchStart = (event) => {
    setTouchStartX(event.touches?.[0]?.clientX ?? null);
  };

  const onTouchEnd = (event) => {
    if (posts.length <= 1 || touchStartX == null) return;

    const endX = event.changedTouches?.[0]?.clientX ?? touchStartX;
    const deltaX = endX - touchStartX;

    if (deltaX <= -SWIPE_THRESHOLD) {
      setActiveIndex((prev) => (prev + 1) % posts.length);
    } else if (deltaX >= SWIPE_THRESHOLD) {
      setActiveIndex((prev) => (prev - 1 + posts.length) % posts.length);
    }

    setTouchStartX(null);
  };

  const onMouseDown = (event) => {
    setMouseStartX(event.clientX);
  };

  const onMouseUp = (event) => {
    if (posts.length <= 1 || mouseStartX == null) return;

    const deltaX = event.clientX - mouseStartX;

    if (deltaX <= -SWIPE_THRESHOLD) {
      setActiveIndex((prev) => (prev + 1) % posts.length);
    } else if (deltaX >= SWIPE_THRESHOLD) {
      setActiveIndex((prev) => (prev - 1 + posts.length) % posts.length);
    }

    setMouseStartX(null);
  };

  const goNext = () => {
    if (posts.length <= 1) return;
    setActiveIndex((prev) => (prev + 1) % posts.length);
  };

  const goPrev = () => {
    if (posts.length <= 1) return;
    setActiveIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  if (error) {
    return (
      <section
        className="w-full max-w-4xl mx-auto px-7 py-12 bg-white rounded-2xl border text-left"
        style={{ borderColor: "#FCE7F3" }}
      >
        <p className="text-[#475569]">{error}</p>
      </section>
    );
  }

  if (!activePost) {
    return (
      <section
        className="w-full max-w-4xl mx-auto px-7 py-12 bg-white rounded-2xl border text-left"
        style={{ borderColor: "#FCE7F3" }}
      >
        <p className="text-[#475569]">{t("home.noSecretTips")}</p>
      </section>
    );
  }

  return (
    <section
      className="w-full max-w-4xl mx-auto bg-white rounded-2xl border shadow-sm p-5 md:p-6 text-left"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={{ borderColor: "#FCE7F3" }}
    >
      {activePost.image ? (
        <div className="relative w-full h-80 md:h-96 rounded-xl bg-[#FDE8EF] mb-4 overflow-hidden">
          <img
            src={buildImageUrl(activePost.image).width(1400).height(900).fit("crop").auto("format").url()}
            alt={activePost.title}
            className="w-full h-full object-cover"
          />

          {posts.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-[#BE123C] border border-[#F9A8D4] hover:bg-white transition"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 text-[#BE123C] border border-[#F9A8D4] hover:bg-white transition"
                aria-label="Next"
              >
                ›
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="w-full h-80 md:h-96 rounded-xl bg-[#FDE8EF] mb-4" />
      )}

      <h3 className="text-xl md:text-2xl font-bold text-[#881337] leading-snug">
        {activePost.title}
      </h3>

      <p className="text-base text-[#475569] mt-3 mb-3 leading-7 line-clamp-3">
        {activePost.excerpt || t("home.secretTipFallback")}
      </p>

      <div className="flex justify-center items-center gap-1.5 mt-2 mb-2">
        {posts.map((post, idx) => (
          <span
            key={post._id}
            className={`w-2.5 h-2.5 rounded-full ${
              idx === activeIndex ? "bg-[#E11D48]" : "bg-[#F9A8D4]/50"
            }`}
          />
        ))}
      </div>

      <Link
        to={`/${activePost.slug.current}`}
        className="text-[#E11D48] font-semibold hover:text-[#BE123C] transition"
      >
        {t("home.readMore")}
      </Link>
    </section>
  );
}
