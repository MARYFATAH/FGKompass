import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { client } from "../sanity/client";
import { PortableText } from "@portabletext/react";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPost() {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          title,
          body,
          publishedAt,
          "imageUrl": image.asset->url
        }`;
        const data = await client.fetch(query, { slug });
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError(err.message);
      }
    }
    fetchPost();
  }, [slug]);

  if (error)
    return <p className="text-red-500 text-center mt-8">Error: {error}</p>;
  if (!post)
    return <p className="text-gray-600 text-center mt-8">Loading article...</p>;

  return (
    <div className="relative min-h-screen w-full font-montserrat bg-gradient-to-b from-rose-100 to-white text-gray-800 overflow-hidden">
      {/* 🌸 Hero Section */}
      <section className="relative py-24 text-center text-white overflow-hidden">
        <img
          src={
            post.imageUrl ||
            "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80"
          }
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 drop-shadow-md">
            {post.title}
          </h1>
          <p className="text-lg text-rose-50">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* 🌸 Article Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <article className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-8 prose prose-rose max-w-none text-gray-800 leading-relaxed">
          {post.body ? (
            <PortableText
              value={post.body}
              components={{
                block: {
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold text-rose-600 mt-8 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-rose-500 mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="list-disc ml-6 text-gray-700">{children}</li>
                  ),
                },
              }}
            />
          ) : (
            <p>No content found for this post.</p>
          )}
        </article>

        {/* 🌸 Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-block bg-rose-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-rose-600 transition"
          >
            ← Back to Articles
          </button>
        </div>
      </section>

      {/* 🌸 Inspirational Footer */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center text-gray-700 mb-20">
        <blockquote className="italic text-lg text-rose-700">
          “A healthy heart is a result of consistent care — body, mind, and
          soul.”
        </blockquote>
      </section>
    </div>
  );
}
