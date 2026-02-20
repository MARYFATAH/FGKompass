import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client } from "../sanity/client";
import { PortableText } from "@portabletext/react";
import { useTranslation } from "react-i18next";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

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
        setError(err.message);
      }
    }
    fetchPost();
  }, [slug]);

  if (error) {
    return <p className="text-red-500 text-center mt-8">{t("post.error")}</p>;
  }

  if (!post) {
    return <p className="text-gray-600 text-center mt-8">{t("post.loading")}</p>;
  }

  return (
    <div className="relative min-h-screen w-full font-montserrat bg-white text-gray-800 overflow-hidden">
      <section className="relative h-[280px] md:h-[360px] text-center text-white overflow-hidden">
        <img
          src={
            post.imageUrl ||
            "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80"
          }
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-white/88" />

        <div className="relative z-10 h-full max-w-3xl mx-auto px-6 flex flex-col justify-end pb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow-sm">
            {post.title}
          </h1>
          <p className="text-base md:text-lg text-rose-50/95">
            {new Date(post.publishedAt).toLocaleDateString(
              i18n.language === "de" ? "de-DE" : "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <article className="bg-white rounded-2xl border border-[#FCE7F3] shadow-sm p-7 md:p-10 max-w-none text-gray-800 leading-relaxed">
          {post.body ? (
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-[16px] md:text-[17px] leading-8 text-[#334155] mb-5">
                      {children}
                    </p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#9F1239] mt-10 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl md:text-2xl font-semibold text-[#BE123C] mt-8 mb-3">
                      {children}
                    </h3>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="list-disc ml-6 text-[#334155] leading-8">
                      {children}
                    </li>
                  ),
                },
              }}
            />
          ) : (
            <p className="text-[#475569]">{t("post.noContent")}</p>
          )}
        </article>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-block bg-[#E11D48] text-white px-7 py-2.5 rounded-full text-sm font-medium hover:bg-[#BE123C] transition"
          >
            {t("post.back")}
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 text-center text-gray-700 mb-20">
        <blockquote className="italic text-lg text-[#9F1239]">
          "{t("post.quote")}"
        </blockquote>
      </section>
    </div>
  );
}
