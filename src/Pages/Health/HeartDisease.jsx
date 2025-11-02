export default function HeartDisease() {
  const articles = [
    {
      title: "Understanding Coronary Artery Disease",
      excerpt:
        "Coronary artery disease (CAD) is the most common type of heart disease, caused by plaque buildup in the arteries that supply blood to your heart.",
      img: "https://images.unsplash.com/photo-1581091870633-3b5d7c6f238d?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "How Lifestyle Changes Can Prevent Heart Disease",
      excerpt:
        "A heart-healthy lifestyle involves balanced nutrition, regular physical activity, and stress management. Small habits can have a big impact on heart health.",
      img: "https://images.unsplash.com/photo-1576765607924-3dd312679f9b?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Recognizing Early Signs of Heart Problems",
      excerpt:
        "Chest discomfort, shortness of breath, and fatigue may be early warning signs. Recognizing them early can save lives.",
      img: "https://images.unsplash.com/photo-1510626176961-4b37d0afcfef?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Women and Heart Disease: What You Should Know",
      excerpt:
        "Heart disease affects women differently than men. Hormonal changes and unique risk factors make awareness especially important.",
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
  ];

  return (
    <div className="relative min-h-screen w-full font-montserrat bg-gradient-to-b from-rose-100 to-white text-gray-800">
      {/* 🌸 Hero Section */}
      <section className="relative bg-rose-500 text-white py-20 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1600&q=80"
          alt="Heart Health"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Heart Disease</h1>
          <p className="text-lg text-rose-50">
            Learn about heart disease, its causes, prevention strategies, and
            latest research to keep your heart healthy and strong.
          </p>
        </div>
      </section>

      {/* 🌸 Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-rose-600 mb-4">
            What You Should Know
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Heart disease refers to a variety of conditions that affect the
            heart’s structure and function. It remains the leading cause of
            death worldwide, but most cases are preventable with awareness,
            regular check-ups, and healthy lifestyle choices.
          </p>
        </section>

        {/* Articles Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-[240px]">
                <div>
                  <h3 className="text-xl font-semibold text-rose-600 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {article.excerpt}
                  </p>
                </div>
                <a
                  href={article.link}
                  className="inline-block bg-rose-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-rose-600 transition"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* Summary Section */}
        <section className="mt-16 bg-rose-50 border border-rose-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-rose-600 mb-4">
            Prevention Is Key
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Eat a balanced diet rich in fruits, vegetables, and whole grains.
            </li>
            <li>
              Exercise regularly — even 30 minutes a day can make a difference.
            </li>
            <li>Avoid smoking and limit alcohol consumption.</li>
            <li>Manage stress and prioritize mental well-being.</li>
            <li>
              Have routine health screenings for blood pressure and cholesterol.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
