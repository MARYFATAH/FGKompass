import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../sanity/client";
import { buildImageUrl } from "../sanity/imageUrl";
import { useTranslation } from "react-i18next";

export default function HealthTopicPage({
  title,
  slug,
  heroImage,
  introTitle,
  introText,
  tips = [],
}) {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const POSTS_QUERY = `*[
    _type == "post" &&
    defined(slug.current) &&
    "${slug}" in topics[]->slug.current
  ] | order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    image
  }`;

  useEffect(() => {
    client
      .fetch(POSTS_QUERY)
      .then(setPosts)
      .catch((err) => setError(err.message));
  }, [slug]);

  if (error) {
    return <p className="text-red-500 text-center mt-8">Error: {error}</p>;
  }

  return (
    <div className="relative min-h-screen w-full font-montserrat bg-white text-gray-800">
      {/* 🌸 Hero */}
      <section className="relative h-[280px] md:h-[360px] text-center text-white overflow-hidden">
        <img
          src={heroImage}
          alt={`${title} Awareness`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white/85" />

        <div className="relative z-10 h-full max-w-3xl mx-auto px-6 flex flex-col justify-end pb-8">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-5">{title}</h1>
          <p className="text-lg sm:text-xl text-rose-50/95">{introText}</p>
        </div>
      </section>

      {/* 🌿 Intro */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <h2 className="text-3xl font-semibold text-[#9F1239]">
          {introTitle || t("healthTopic.introTitle")}
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">{introText}</p>
      </section>

      {/* 📰 Articles */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center text-[#9F1239] mb-12">
          {t("healthTopic.featuredArticles")}
        </h2>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            {t("healthTopic.noArticles")}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-2xl border border-[#FCE7F3] shadow-sm hover:shadow-lg transition flex flex-col"
              >
                <div className="w-full h-56 bg-[#FDE8EF] overflow-hidden">
                  {post.image ? (
                    <img
                      src={buildImageUrl(post.image).width(900).height(560).fit("crop").auto("format").url()}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-[#881337]">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-3">
                      {new Date(post.publishedAt).toLocaleDateString(
                        i18n.language === "de" ? "de-DE" : "en-US"
                      )}
                    </p>

                    <p className="text-gray-700 text-sm line-clamp-3">
                      {post.excerpt || t("healthTopic.defaultExcerpt")}
                    </p>
                  </div>

                  <Link
                    to={`/${post.slug.current}`}
                    className="self-start mt-4 bg-[#E11D48] text-white px-4 py-2 rounded-md text-sm hover:bg-[#BE123C] transition"
                  >
                    {t("healthTopic.readMore")}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 💡 Tips */}
      {tips.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 py-16 bg-[#FFF1F6] border border-[#FCE7F3] shadow-sm rounded-2xl mb-24">
          <h3 className="text-2xl font-semibold text-[#9F1239] mb-6">
            {t("healthTopic.helpfulTips")}
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            {tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
