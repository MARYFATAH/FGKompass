import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../sanity/client";

export default function HealthTopicPage({
  title,
  slug, // e.g. "diabetes" or "maternalhealth"
  heroImage,
  introTitle = "What You Should Know",
  introText,
  tips = [],
}) {
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
    "imageUrl": image.asset->url
  }`;

  useEffect(() => {
    client
      .fetch(POSTS_QUERY)
      .then((data) => setPosts(data))
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setError(err.message);
      });
  }, [slug]);

  return (
    <div className="relative min-h-screen w-full font-montserrat bg-gradient-to-b from-rose-100 to-white text-gray-800 overflow-hidden">
      {/* 🌸 Hero Section */}
      <section className="relative py-24 text-center text-white overflow-hidden">
        <img
          src={heroImage}
          alt={`${title} Awareness`}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-md">{title}</h1>
          <p className="text-lg text-rose-50">{introText}</p>
        </div>
      </section>

      {/* 🌸 Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-rose-600 mb-4">{introTitle}</h2>
        <p className="text-gray-600">{introText}</p>
      </section>

      {/* 🌸 Articles Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-rose-600 mb-8 text-center">
          Featured Articles
        </h2>

        {error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-600">
            No articles available for this topic yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article
                key={post._id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition"
              >
                <img
                  src={
                    post.imageUrl ||
                    "https://images.unsplash.com/photo-1590935217281-8b16ad3d5a70?auto=format&fit=crop&w=800&q=80"
                  }
                  alt={post.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 flex flex-col h-[260px] justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-rose-600 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Published:{" "}
                      {new Date(post.publishedAt).toLocaleDateString("en-US")}
                    </p>
                    {post.excerpt && (
                      <p className="text-gray-700 text-sm mt-2 line-clamp-3">
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

      {/* 🌸 Tips Section */}
      {tips.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 py-12 bg-rose-50 border border-rose-200 rounded-2xl shadow-sm mb-20">
          <h3 className="text-2xl font-semibold text-rose-600 mb-4">
            Helpful Tips
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
