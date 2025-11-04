import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export default function HeartDiseasePage() {
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

  if (error) {
    return <p className="text-red-500 text-center mt-8">Error: {error}</p>;
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Heart Disease Articles</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul className="flex flex-col gap-y-4">
          {posts.map((post) => (
            <li className="hover:underline" key={post._id}>
              <Link to={`/${post.slug.current}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
