export default function Endometriosis() {
  const articles = [
    {
      title: "Understanding Endometriosis",
      excerpt:
        "Endometriosis occurs when tissue similar to the uterine lining grows outside the uterus, leading to pain and sometimes fertility issues. Learn how it develops and what treatments exist.",
      img: "https://images.unsplash.com/photo-1588776814546-885e2d87c5c5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Recognizing Early Symptoms of Endometriosis",
      excerpt:
        "Pelvic pain, painful periods, and discomfort during intercourse are common signs. Early recognition can improve treatment outcomes and quality of life.",
      img: "https://images.unsplash.com/photo-1621786030484-9f43e1e9d067?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Living With Endometriosis: Coping & Self-Care",
      excerpt:
        "Learn how lifestyle changes, nutrition, and stress management can help reduce symptoms and improve everyday well-being.",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="relative min-h-screen w-full font-montserrat bg-gradient-to-b from-rose-100 to-white text-gray-800">
      {/* 🌸 Hero Section */}
      <section className="relative py-24 text-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1606229365123-7c59afc92c7a?auto=format&fit=crop&w=1600&q=80"
          alt="Endometriosis Awareness"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
            Endometriosis
          </h1>
          <p className="text-lg text-rose-50">
            Learn about endometriosis, its causes, symptoms, and the latest ways
            to manage this chronic condition for a better quality of life.
          </p>
        </div>
      </section>

      {/* 🌸 Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-rose-600 mb-4">
          What You Should Know
        </h2>
        <p className="text-gray-600">
          Endometriosis is a chronic inflammatory condition where
          endometrial-like tissue grows outside the uterus, often causing severe
          pain and fertility challenges. Early detection, awareness, and
          holistic management can make a life-changing difference.
        </p>
      </section>

      {/* 🌸 Articles Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((a, i) => (
          <article
            key={i}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition"
          >
            <img
              src={a.img}
              alt={a.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col h-[260px] justify-between">
              <div>
                <h3 className="text-xl font-semibold text-rose-600 mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-gray-700">{a.excerpt}</p>
              </div>
              <button className="self-start mt-4 bg-rose-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-rose-600 transition">
                Read More
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* 🌸 Takeaway Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 bg-rose-50 border border-rose-200 rounded-2xl shadow-sm mb-20">
        <h3 className="text-2xl font-semibold text-rose-600 mb-4">
          Hope Through Awareness
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Seek medical advice early if symptoms interfere with your daily
            life.
          </li>
          <li>Track your cycles and symptoms to support diagnosis.</li>
          <li>
            Maintain a balanced diet and practice stress-reducing activities.
          </li>
          <li>
            Join endometriosis support groups for guidance and encouragement.
          </li>
          <li>Remember — you are not alone, and effective treatments exist.</li>
        </ul>
      </section>
    </div>
  );
}
