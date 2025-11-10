import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "./sanity/client";
import PictureCard from "./components/PictureCard";
import MinimalCard from "./components/MinimalCard";
import MoreOnTopic from "./components/MoreOnTopic";
import womenImg from "./assets/4women.jpg";

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [error, setError] = useState(null);

  // ✅ Fetch featured posts from Sanity
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
      .catch((err) => {
        console.error("Error fetching featured posts:", err);
        setError(err.message);
      });
  }, []);

  return (
    <div className="relative min-h-screen font-montserrat flex flex-col overflow-hidden">
      {/* 🌸 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-500" />
      <div className="absolute inset-0 bg-black/10" />

      {/* 🩵 Main Content */}
      <main className="relative flex-grow flex flex-col items-center text-center px-6 py-16 space-y-16">
        {/* 🌿 Hero Section */}
        <div className="w-full max-w-6xl mx-auto">
          <PictureCard
            title="Holistic Health at Your Fingertips"
            description="Discover a world of wellness with our curated resources and expert guidance."
            imageUrl={womenImg}
            imageAlt="4 women"
          />
          <p className="mt-8 text-lg text-rose-50 max-w-xl mx-auto drop-shadow-md">
            Your guide to holistic health and wellness.
          </p>
        </div>

        {/* 🌟 Featured Articles */}
        <section className="w-full max-w-6xl text-left space-y-8">
          <h2 className="text-2xl font-semibold text-white border-b border-rose-100 pb-3">
            Featured Articles
          </h2>

          {error ? (
            <p className="text-red-500">{error}</p>
          ) : featured.length === 0 ? (
            <p className="text-rose-50">No featured articles yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((post) => (
                <article
                  key={post._id}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-200"
                >
                  <img
                    src={
                      post.imageUrl ||
                      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
                    }
                    alt={post.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between h-[250px]">
                    <div>
                      <h3 className="text-xl font-semibold text-rose-600 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {post.excerpt ||
                          "Explore the latest insights and research on holistic wellness."}
                      </p>
                    </div>
                    <Link
                      to={`/${post.slug.current}`}
                      className="self-start mt-4 bg-rose-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-rose-600 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 💡 Explore by Section */}
        <section className="w-full max-w-6xl text-left space-y-8">
          <h2 className="text-2xl font-semibold text-white border-b border-rose-100 pb-3">
            Explore by:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <MinimalCard
              title="Nutrition"
              description="Tips and guides for a balanced diet."
              link={"/wellness/nutrition"}
            />
            <MinimalCard
              title="Fitness"
              description="Workouts and routines for all levels."
              link={"/wellness/fitness"}
            />
            <MinimalCard
              title="Mental Health"
              description="Mental and physical wellness advice."
              link={"/health/mental-health"}
            />
            <MinimalCard
              title="Recipe"
              description="Delicious and healthy meal ideas."
              link={"/wellness/recipe"}
            />
            <MinimalCard
              title="Pregnancy"
              description="Guidance for a healthy pregnancy."
              link={"/health/maternal-health"}
            />
          </div>
        </section>

        {/* 📚 More on Topic */}
        <section className="w-full max-w-6xl text-left space-y-8">
          <h2 className="text-2xl font-semibold text-white border-b border-rose-100 pb-3">
            More on Topic
          </h2>
          <MoreOnTopic />
        </section>

        {/* 🔗 CTA */}
        <div className="flex items-center justify-center">
          <a
            href="/about"
            className="transition-colors shadow-sm text-white font-semibold py-3 px-8 rounded-md border border-white hover:bg-white hover:text-rose-500"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
