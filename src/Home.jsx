import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "./sanity/client";
import PictureCard from "./components/PictureCard";
import MinimalCard from "./components/MinimalCard";
import MoreOnTopic from "./components/MoreOnTopic";

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
      {/* 🌸 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-500"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🩵 Main Content */}
      <main className="relative flex-grow flex flex-col items-center text-center px-4 py-12 space-y-12">
        {/* 🌿 Hero Section */}
        <PictureCard
          className="w-4/5 max-w-6xl mx-auto"
          title="Holistic Health at Your Fingertips"
          description="Discover a world of wellness with our curated resources and expert guidance."
          imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
          imageAlt="Holistic health and wellness"
        />

        <p className="text-lg text-rose-50 max-w-md drop-shadow-md">
          Your guide to holistic health and wellness.
        </p>

        {/* 🌟 Featured Articles Section */}
        <section className="relative w-full text-left">
          <h2 className="text-lg font-semibold text-white mb-6 border-b border-rose-100 pb-2">
            Featured Articles
          </h2>

          {error ? (
            <p className="text-red-500">{error}</p>
          ) : featured.length === 0 ? (
            <p className="text-rose-50">No featured articles yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {featured.map((post) => (
                <article
                  key={post._id}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition"
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
                      className="self-start mt-4 bg-rose-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-rose-600 transition"
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
        <section className="relative w-full text-left">
          <h2 className="text-lg font-semibold text-white mb-6 border-b border-rose-100 pb-2">
            Explore by:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <MinimalCard
              title="Nutrition"
              description="Tips and guides for a balanced diet."
            />
            <MinimalCard
              title="Fitness"
              description="Workouts and routines for all levels."
            />
            <MinimalCard
              title="Health"
              description="Mental and physical wellness advice."
            />
            <MinimalCard
              title="Mindfulness"
              description="Practices to cultivate inner peace."
            />
            <MinimalCard
              title="Meditation"
              description="Guided meditation sessions for relaxation."
            />
          </div>
        </section>

        {/* 📚 More on Topic Section */}
        <section className="relative w-full text-left">
          <h2 className="text-lg font-semibold text-white mb-6 border-b border-rose-100 pb-2">
            More on Topic
          </h2>
          <MoreOnTopic />
        </section>

        {/* 🔗 CTA Button */}
        <div className="flex items-center justify-center mt-8">
          <a
            href="/about"
            className="transition-colors shadow-sm text-white font-semibold py-2 px-6 rounded-sm border border-white hover:bg-white hover:text-rose-500"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
