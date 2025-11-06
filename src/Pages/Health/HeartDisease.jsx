import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../sanity/client";

export default function HeartDiseasePage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // ✅ GROQ query: fetch only posts tagged with the "heart-disease" topic
  const POSTS_QUERY = `*[
    _type == "post" &&
    defined(slug.current) &&
    "heart-disease" in topics[]->slug.current
  ] | order(publishedAt desc)[0...12] {
    _id,
    title,
    slug,
    publishedAt,
    image {
      asset->{
        url
      }
    },
    excerpt
  }`;

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
    <div className="relative min-h-screen w-full font-montserrat bg-gradient-to-b from-rose-100 to-white text-gray-800">
      {/* 🌸 Hero Section */}
      <section className="relative py-24 text-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1606813902917-5827c014a7b9?auto=format&fit=crop&w=1600&q=80"
          alt="Heart Disease Awareness"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
            Heart Disease
          </h1>
          <p className="text-lg text-rose-50">
            Learn how to care for your heart and reduce the risk of
            cardiovascular diseases.
          </p>
        </div>
      </section>

      {/* 🌸 Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-rose-600 mb-4">
          What You Should Know
        </h2>
        <p className="text-gray-600">
          Heart disease is one of the leading health concerns worldwide. Through
          awareness, preventive care, and lifestyle changes, you can
          significantly lower your risk and live a stronger, healthier life.
        </p>
      </section>

      {/* 🌸 Articles Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">
            No articles available.
          </p>
        ) : (
          posts.map((post) => (
            <article
              key={post._id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition"
            >
              <img
                src={
                  post.image?.asset?.url ||
                  "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?auto=format&fit=crop&w=800&q=80"
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
          ))
        )}
      </section>

      {/* 🌸 Takeaway Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 bg-rose-50 border border-rose-200 rounded-2xl shadow-sm mb-20">
        <h3 className="text-2xl font-semibold text-rose-600 mb-4">
          Protect Your Heart
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
          <li>Eat plenty of fruits, vegetables, and whole grains.</li>
          <li>Exercise regularly to strengthen your heart and body.</li>
          <li>Quit smoking and reduce alcohol consumption.</li>
          <li>Manage stress with rest, hobbies, and mindfulness.</li>
          <li>Check your blood pressure and cholesterol regularly.</li>
        </ul>
      </section>
    </div>
  );
}
