// src/Pages/Health/BreastCancer.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../sanity/client";

const POSTS_QUERY = `*[
  _type == "post" &&
  defined(slug.current) &&
  "breastcancer" in topics[]->slug.current
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  "imageUrl": image.asset->url,
  excerpt
}`;

export default function BreastCancerPage() {
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
    <div className="relative min-h-screen w-full font-montserrat bg-gradient-to-b from-pink-100 to-white text-gray-800">
      {/* 🌸 Hero Section */}
      <section className="relative py-24 text-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1604515971042-00fef06b4d89?auto=format&fit=crop&w=1600&q=80"
          alt="Breast Cancer Awareness"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 drop-shadow-md">
            Breast Cancer Awareness
          </h1>
          <p className="text-lg sm:text-xl text-pink-50 leading-relaxed">
            Learn about prevention, early detection, and treatment options.
          </p>
        </div>
      </section>

      {/* 🌸 Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center space-y-4">
        <h2 className="text-3xl font-bold text-pink-600">
          Understanding Breast Cancer
        </h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Breast cancer is one of the most common cancers affecting women
          worldwide. Early detection, awareness, and lifestyle choices play a
          crucial role in prevention and successful treatment.
        </p>
      </section>

      {/* 🌸 Articles Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-pink-600 mb-10 text-center">
          Latest Articles
        </h2>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600">No articles available.</p>
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
                    <h3 className="text-xl font-semibold text-pink-600 mb-1">
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
                    className="self-start mt-4 bg-pink-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-600 transition"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 🌸 Tips Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-pink-50 border border-pink-200 rounded-2xl shadow-sm mb-24 text-center sm:text-left">
        <h3 className="text-2xl font-semibold text-pink-600 mb-6">
          Early Detection Saves Lives
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>Perform regular self-breast exams.</li>
          <li>Schedule mammograms as recommended by your doctor.</li>
          <li>Maintain a healthy diet and active lifestyle.</li>
          <li>Limit alcohol and avoid smoking.</li>
          <li>Seek emotional and community support when needed.</li>
        </ul>
      </section>
    </div>
  );
}
