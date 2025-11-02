export default function MaternalHealth() {
  const articles = [
    {
      title: "The Importance of Prenatal Care",
      excerpt:
        "Prenatal care helps identify and manage potential health risks during pregnancy. Learn about essential screenings and the benefits of regular checkups.",
      img: "https://images.unsplash.com/photo-1590935217281-8b16ad3d5a70?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Postpartum Recovery and Mental Health",
      excerpt:
        "The postpartum period is critical for both physical and emotional healing. Understand common challenges and how to seek support after childbirth.",
      img: "https://images.unsplash.com/photo-1600118072690-8a3a0d6e77ef?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Nutrition for a Healthy Pregnancy",
      excerpt:
        "Proper nutrition supports both mother and baby during pregnancy. Discover key nutrients, safe foods, and tips for maintaining a balanced diet.",
      img: "https://images.unsplash.com/photo-1510626176961-4b37d0afcfef?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="relative min-h-screen w-full font-montserrat bg-gradient-to-b from-rose-100 to-white text-gray-800">
      {/* 🌸 Hero Section */}
      <section className="relative py-24 text-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1600&q=80"
          alt="Maternal Health Awareness"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
            Maternal Health
          </h1>
          <p className="text-lg text-rose-50">
            Empowering women through pregnancy, childbirth, and beyond — for
            stronger, healthier families worldwide.
          </p>
        </div>
      </section>

      {/* 🌸 Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-rose-600 mb-4">
          What You Should Know
        </h2>
        <p className="text-gray-600">
          Maternal health focuses on ensuring the well-being of women during
          pregnancy, childbirth, and postpartum recovery. With access to
          high-quality care, education, and emotional support, mothers and
          babies can thrive.
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
          Supporting Mothers Everywhere
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Attend all prenatal and postnatal appointments.</li>
          <li>Eat a balanced diet rich in vitamins and minerals.</li>
          <li>Seek emotional support to manage stress and anxiety.</li>
          <li>Stay active with gentle, doctor-approved exercises.</li>
          <li>
            Remember: maternal care is self-care — your health matters too.
          </li>
        </ul>
      </section>
    </div>
  );
}
