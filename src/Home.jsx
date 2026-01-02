import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "./sanity/client";
import PictureCard from "./components/PictureCard";
import MinimalCard from "./components/MinimalCard";
import MoreOnTopic from "./components/MoreOnTopic";
import womenImg from "./assets/strongwomen.jpg";

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [error, setError] = useState(null);

  // ✅ Fetch featured posts
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
      .then((data) => setFeatured(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="relative min-h-screen font-montserrat flex flex-col overflow-hidden text-slate-800">
      {/* 🌸 Elegant Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-rose-200/70 to-rose-300/60" />
      <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />

      {/* 🌸 Decorative Side Borders */}
      <div className="absolute inset-y-0 left-[3%] right-[3%] border-x border-rose-300/50 pointer-events-none z-0" />

      {/* 🌿 Main Content */}
      <main className="relative flex-grow flex flex-col items-center text-center px-6 py-20 space-y-24 z-10">
        {/* 🌷 Hero Section */}
        <div className="w-full max-w-6xl mx-auto">
          <PictureCard
            title="Holistic Health at Your Fingertips"
            description="Explore mindful living, nourishment, and strength through every stage of life."
            imageUrl={womenImg}
            imageAlt="Group of women smiling outdoors"
          />

          {/* ✨ Tagline */}
          <p className="mt-10 text-xl md:text-2xl text-slate-700 font-semibold italic max-w-3xl mx-auto leading-relaxed">
            “Balance isn’t something you find — it’s something you create.”
          </p>

          {/* 🌿 Brand Statement */}
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed tracking-wide">
            FG Kompass guides you through every aspect of women’s wellness —
            helping you connect, restore, and thrive through holistic insights
            and practical knowledge.
          </p>
        </div>

        {/* 🌟 Featured Articles */}
        <section className="w-full max-w-6xl text-left space-y-10">
          <h2 className="text-3xl font-bold text-slate-800 border-b-2 border-rose-200 pb-3">
            Featured Articles
          </h2>

          {error ? (
            <p className="text-red-500">{error}</p>
          ) : featured.length === 0 ? (
            <p className="text-slate-600 text-lg">No featured articles yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {featured.map((post) => (
                <article
                  key={post._id}
                  className="
                    bg-white/95 
                    backdrop-blur-sm 
                    rounded-2xl 
                    shadow-sm 
                    hover:shadow-xl 
                    overflow-hidden 
                    border border-gray-200
                    transition-all duration-300 
                    transform hover:-translate-y-1
                  "
                >
                  <img
                    src={
                      post.imageUrl ||
                      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
                    }
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6 flex flex-col justify-between h-[250px]">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {post.excerpt ||
                          "Explore the latest insights and research on holistic wellness."}
                      </p>
                    </div>

                    <Link
                      to={`/${post.slug.current}`}
                      className="
                        self-start mt-5 
                        bg-slate-700 
                        text-white 
                        px-5 py-2 
                        rounded-md 
                        text-sm font-medium 
                        hover:bg-slate-900 
                        transition-colors
                      "
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 💫 Explore by Section */}
        <section className="w-full max-w-6xl text-left space-y-10">
          <h2 className="text-3xl font-bold text-slate-800 border-b-2 border-rose-200 pb-3">
            Explore by
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
            <MinimalCard
              title="Nutrition"
              description="Nourish your body with mindful eating."
              link="/wellness/nutrition"
            />
            <MinimalCard
              title="Fitness"
              description="Move with strength and grace."
              link="/wellness/fitness"
            />
            <MinimalCard
              title="Mental Health"
              description="Cultivate calm and emotional balance."
              link="/health/mental-health"
            />
            <MinimalCard
              title="Recipes"
              description="Wholesome, beautiful, and easy to make."
              link="/wellness/recipe"
            />
            <MinimalCard
              title="Pregnancy"
              description="Guidance for every stage of motherhood."
              link="/health/maternal-health"
            />
          </div>
        </section>

        {/* 📚 More on Topic */}
        <section className="w-full max-w-6xl text-left space-y-10">
          <h2 className="text-3xl font-bold text-slate-800 border-b-2 border-rose-200 pb-3">
            More on Topic
          </h2>
          <MoreOnTopic />
        </section>

        {/* 🌸 Call to Action */}
        <div className="flex items-center justify-center">
          <a
            href="/about"
            className="transition-colors shadow-md text-white font-semibold py-3 px-10 rounded-lg bg-slate-600 hover:bg-slate-700 text-lg tracking-wide"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
