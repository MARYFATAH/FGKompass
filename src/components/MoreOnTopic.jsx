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
    img: "https://images.unsplash.com/photo-1617331721429-85e509a65590?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "How Many Hours of Sleep Do You Really Need?",
    img: "https://images.unsplash.com/photo-1601972599720-bebd9c20c7ae?auto=format&fit=crop&w=800&q=80",
  },
];

export default function MoreOnTopic() {
  return (
    <section className="bg-white/100 rounded-xl shadow-sm p-6 mt-10 w-5/6 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((article) => (
          <a
            key={article.title}
            href="#"
            className="flex items-center space-x-4 group"
          >
            <img
              src={article.img}
              alt={article.title}
              className="h-20 w-20 rounded-md object-cover group-hover:opacity-90 transition"
            />
            <h3 className="text-gray-800 font-medium group-hover:text-rose-600 transition">
              {article.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
