import React from "react";

const articles = [
  {
    title: "What to Know About Healthy Sleep",
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "What Is a Sleep Study, Anyway?",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "What Is the Best Temperature for Sleep?",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "How Many Hours of Sleep Do You Really Need?",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
];

export default function MoreOnTopic() {
  return (
    <section className="w-full max-w-6xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {articles.map((article) => (
          <a
            key={article.title}
            href="#"
            className="flex items-center space-x-5 p-3 rounded-lg hover:bg-rose-50 transition-all duration-300 group"
          >
            {/* 🖼️ Image */}
            <div className="flex-shrink-0">
              <img
                src={article.img}
                alt={article.title}
                className="h-20 w-20 rounded-lg object-cover shadow-sm group-hover:shadow-md transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>

            {/* 🩵 Title */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-rose-600 transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">Read more →</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
