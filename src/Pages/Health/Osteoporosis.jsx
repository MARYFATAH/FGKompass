// src/Pages/Health/Osteoporosis.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../sanity/client";

const POSTS_QUERY = `*[
  _type == "post" &&
  defined(slug.current) &&
  "osteoporosis" in topics[]->slug.current
] | order(publishedAt desc)[0...12] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "imageUrl": image.asset->url
}`;

export default function Osteoporosis() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(POSTS_QUERY)
      .then((data) => setPosts(data))
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setError(err.message);
      });
  }, []);

  if (error)
    return <p className="text-red-500 text-center mt-8">Error: {error}</p>;

  return (
    <div className="relative min-h-screen w-full font-montserrat overflow-hidden">
      {/* 🌸 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-200 to-rose-300"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🌸 Hero Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center px-6 py-16 text-center">
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Osteoporosis
          </h1>
          <p className="text-lg sm:text-xl text-rose-50 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Osteoporosis is a condition where bones become weak and brittle,
            increasing the risk of fractures — particularly in the hips, spine,
            and wrists. It affects millions worldwide, especially postmenopausal
            women.
          </p>
        </section>

        {/* 🌸 Content Section */}
        <section className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          {/* Left: Text */}
          <div className="text-left space-y-6 text-gray-800">
            <h2 className="text-2xl font-bold text-rose-600">
              Understanding Osteoporosis
            </h2>
            <p>
              Osteoporosis occurs when bone loss outpaces bone formation,
              resulting in porous and fragile bones. It often progresses
              silently until a fracture occurs.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              Risk Factors & Prevention
            </h2>
            <p>
              Several factors increase the risk, including age, hormonal
              changes, sedentary lifestyle, smoking, and calcium deficiency.
              Prevention focuses on nutrition, exercise, and lifestyle
              management.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              Key Facts About Osteoporosis
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Affects bone density and structure, making bones fragile.</li>
              <li>More common in women, especially after menopause.</li>
              <li>
                Early detection and treatment are key to preventing fractures.
              </li>
              <li>
                Adequate calcium, vitamin D, and physical activity help maintain
                bone health.
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1576765607924-b178a1e1d87a?auto=format&fit=crop&w=800&q=80"
              alt="Healthy bones and lifestyle"
              className="rounded-2xl shadow-md object-cover w-full h-80"
            />
          </div>
        </section>

        {/* 🌸 Articles Section */}
        <section className="max-w-6xl mx-auto w-full mb-24">
          <h2 className="text-2xl font-semibold text-white border-b border-rose-100 pb-3 mb-10 text-left">
            Articles on Osteoporosis
          </h2>

          {posts.length === 0 ? (
            <p className="text-center text-rose-50">
              No articles available yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-transform duration-200 hover:-translate-y-1"
                >
                  <img
                    src={
                      post.imageUrl ||
                      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
                    }
                    alt={post.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between h-[260px]">
                    <div>
                      <h3 className="text-xl font-semibold text-rose-600 mb-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Published:{" "}
                        {new Date(post.publishedAt).toLocaleDateString("en-US")}
                      </p>
                      {post.excerpt && (
                        <p className="text-gray-700 text-sm line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
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
      </main>
    </div>
  );
}
