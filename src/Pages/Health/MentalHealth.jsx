export default function MentalHealth() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col border border-gray-300 rounded-lg overflow-hidden">
      {/* 🌸 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-200 to-rose-300"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🌸 Hero Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Mental Health
        </h1>
        <p className="text-lg mb-8 text-rose-50 max-w-2xl drop-shadow-md">
          Your mental well-being is just as important as your physical health.
          Discover how emotional balance, mindfulness, and self-care can
          strengthen your overall wellness.
        </p>

        {/* 🌸 Content Section */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          {/* Left: Text Content */}
          <div className="text-left space-y-4 text-gray-800">
            <h2 className="text-2xl font-bold text-rose-600">
              Understanding Mental Health
            </h2>
            <p>
              Mental health includes our emotional, psychological, and social
              well-being. It affects how we think, feel, and act — and plays a
              crucial role in how we handle stress, relate to others, and make
              decisions.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              Common Challenges
            </h2>
            <p>
              Conditions like anxiety, depression, burnout, and stress-related
              disorders are increasingly common. Recognizing these early and
              seeking support can make a huge difference in recovery and
              long-term resilience.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              How to Support Mental Health
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Practice mindfulness and relaxation techniques daily.</li>
              <li>
                Maintain a balanced routine with rest, nutrition, and exercise.
              </li>
              <li>
                Talk to someone — therapy or support groups can help
                tremendously.
              </li>
              <li>Set healthy boundaries and prioritize self-care.</li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
              alt="Mental wellness and mindfulness"
              className="rounded-2xl shadow-md object-cover w-full h-80"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
