import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { client } from "./sanity/client";
import PictureCard from "./components/PictureCard";
import MinimalCard from "./components/MinimalCard";
import MoreOnTopic from "./components/MoreOnTopic";
import womenImg from "./assets/strongwomen.jpg";

export default function Home() {
  const { t } = useTranslation();
  const [featured, setFeatured] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `*[_type == "post" && featured == true && defined(slug.current)] 
      | order(publishedAt desc)[0...6] {
        _id,
        title,
        slug,
        "imageUrl": image.asset->url,
        publishedAt,
        excerpt
      }`;

    client
      .fetch(query)
      .then(setFeatured)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="relative min-h-screen font-montserrat flex flex-col overflow-hidden text-slate-800">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-rose-200/70 to-rose-300/60" />
      <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
      <div className="absolute inset-y-0 left-[3%] right-[3%] border-x border-rose-300/50 pointer-events-none z-0" />

      <main className="relative flex-grow flex flex-col items-center text-center px-6 py-20 space-y-24 z-10">
        {/* Hero */}
        <div className="w-full max-w-6xl mx-auto">
          <PictureCard
            title={t("home.heroTitle")}
            description={t("home.heroDescription")}
            imageUrl={womenImg}
            imageAlt="Group of women smiling outdoors"
          />

          <p className="mt-10 text-xl md:text-2xl text-rose-900 font-medium italic max-w-3xl mx-auto">
            “{t("home.tagline")}”
          </p>

          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            {t("home.brand")}
          </p>
        </div>

        {/* Featured */}
        <section className="w-full max-w-6xl text-left space-y-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-rose-800 tracking-wide relative pb-4">
            {t("home.featuredTitle")}
            <span className="absolute left-0 bottom-0 w-24 h-[3px] bg-gradient-to-r from-rose-400 to-rose-200 rounded-full" />
          </h2>

          {error ? (
            <p className="text-red-500">{error}</p>
          ) : featured.length === 0 ? (
            <p className="text-slate-600">{t("home.noArticles")}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {featured.map((post) => (
                <article
                  key={post._id}
                  className="bg-white/90 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6 h-[250px] flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-rose-900 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <Link
                      to={`/${post.slug.current}`}
                      className="mt-5 inline-block w-fit bg-rose-500 text-white px-5 py-2 rounded-full text-sm hover:bg-rose-600 transition"
                    >
                      {t("home.readMore")}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Explore */}
        <section className="w-full max-w-6xl text-left space-y-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-rose-800 tracking-wide relative pb-4">
            {t("home.exploreTitle")}
            <span className="absolute left-0 bottom-0 w-24 h-[3px] bg-gradient-to-r from-rose-400 to-rose-200 rounded-full" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <MinimalCard
              title={t("home.cards.nutrition.title")}
              description={t("home.cards.nutrition.desc")}
              link="/wellness/nutrition"
            />

            <MinimalCard
              title={t("home.cards.fitness.title")}
              description={t("home.cards.fitness.desc")}
              link="/wellness/fitness"
            />

            <MinimalCard
              title={t("home.cards.mental.title")}
              description={t("home.cards.mental.desc")}
              link="/health/mental-health"
            />

            <MinimalCard
              title={t("home.cards.recipes.title")}
              description={t("home.cards.recipes.desc")}
              link="/wellness/recipe"
            />

            <MinimalCard
              title={t("home.cards.pregnancy.title")}
              description={t("home.cards.pregnancy.desc")}
              link="/health/maternal-health"
            />
          </div>
        </section>

        {/* More */}
        <section className="w-full max-w-6xl text-left space-y-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-rose-800 tracking-wide relative pb-4">
            {t("home.moreOnTopic")}
            <span className="absolute left-0 bottom-0 w-24 h-[3px] bg-gradient-to-r from-rose-400 to-rose-200 rounded-full" />
          </h2>
          <MoreOnTopic />
        </section>

        {/* CTA */}
        <a
          href="/about"
          className="bg-rose-500 text-white px-10 py-3 rounded-full hover:bg-rose-600 transition"
        >
          {t("home.cta")}
        </a>
      </main>
    </div>
  );
}
