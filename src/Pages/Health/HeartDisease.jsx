export default function HeartDisease() {
  const articles = [
    {
      title: "Understanding Coronary Artery Disease",
      excerpt:
        "Coronary artery disease (CAD) is the most common type of heart disease, caused by plaque buildup in the arteries that supply blood to the heart. Learn how it develops and the steps to prevent it.",
      img: "https://images.unsplash.com/photo-1581091870633-3b5d7c6f238d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Recognizing Early Signs of Heart Problems",
      excerpt:
        "Chest discomfort, shortness of breath, dizziness, and fatigue can be early warning signs. Early recognition and medical care make a life-saving difference.",
      img: "https://images.unsplash.com/photo-1510626176961-4b37d0afcfef?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Women and Heart Disease: What You Should Know",
      excerpt:
        "Hormonal changes and unique risk factors mean women may experience heart disease differently. Awareness and screening are crucial.",
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="relative min-h-screen w-full font-montserrat bg-gradient-to-b from-rose-100 to-white text-gray-800">
      {/* Hero */}
      <section className="relative py-24 text-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1600&q=80"
          alt="Heart Health"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
            Heart Disease
          </h1>
          <p className="text-lg text-rose-50">
            Learn about heart disease, its causes, and prevention strategies to
            keep your heart strong.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-rose-600 mb-4">
          What You Should Know
        </h2>
        <p className="text-gray-600">
          Heart disease is a group of conditions that affect how your heart and
          blood vessels function. It remains the leading cause of death
          worldwide, yet many cases are preventable with early detection and
          healthy lifestyle choices.
        </p>
      </section>

      {/* Articles */}
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

      {/* Takeaway */}
      <section className="max-w-4xl mx-auto px-6 py-12 bg-rose-50 border border-rose-200 rounded-2xl shadow-sm mb-20">
        <h3 className="text-2xl font-semibold text-rose-600 mb-4">
          Prevention Is Key
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Eat a balanced diet rich in fruits, vegetables, and whole grains.
          </li>
          <li>
            Exercise regularly — even 30 minutes a day makes a difference.
          </li>
          <li>Avoid smoking and limit alcohol consumption.</li>
          <li>Manage stress and prioritize mental well-being.</li>
          <li>Get routine screenings for blood pressure and cholesterol.</li>
        </ul>
      </section>
    </div>
  );
}
