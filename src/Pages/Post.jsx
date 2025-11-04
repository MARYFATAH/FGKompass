import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanity/client";
import { PortableText } from "@portabletext/react";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const query = `*[ _type == "post" && slug.current == $slug ][0]{
          title,
          body,
          publishedAt
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

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!post) return <p>Loading...</p>;

  return (
    <main className="container mx-auto max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <div className="prose">
        {/* ✅ Proper Portable Text rendering */}
        {post.body ? (
          <PortableText value={post.body} />
        ) : (
          <p>No content found for this post.</p>
        )}
      </div>
    </main>
  );
}
