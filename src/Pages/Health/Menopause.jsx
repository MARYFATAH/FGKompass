export default function Menopause() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col border border-gray-300 rounded-lg overflow-hidden">
      {/* 🌸 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-200 to-rose-300"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🌸 Hero Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Menopause
        </h1>
        <p className="text-lg mb-8 text-rose-50 max-w-2xl drop-shadow-md">
          Menopause marks the end of a woman’s reproductive years, bringing both
          physical and emotional changes. Understanding and managing this phase
          helps maintain balance, confidence, and overall wellness.
        </p>

        {/* 🌸 Content Section */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          {/* Left: Text Content */}
          <div className="text-left space-y-4 text-gray-800">
            <h2 className="text-2xl font-bold text-rose-600">
              Understanding Menopause
            </h2>
            <p>
              Menopause is a natural biological process that typically occurs
              between ages 45 and 55. It signifies the end of menstrual cycles
              due to a decline in estrogen and progesterone levels.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              Common Symptoms
            </h2>
            <p>
              Symptoms may include hot flashes, sleep disturbances, mood
              changes, and decreased bone density. While these changes can be
              uncomfortable, they are manageable with the right care and
              lifestyle adjustments.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              Managing Menopause Naturally
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Eat a balanced diet rich in calcium and vitamin D.</li>
              <li>Engage in regular exercise to maintain bone strength.</li>
              <li>Stay hydrated and get enough sleep.</li>
              <li>Consider mindfulness and stress-relief techniques.</li>
              <li>Talk to your healthcare provider for tailored support.</li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1606760227091-3dd870d97f2b?auto=format&fit=crop&w=800&q=80"
              alt="Healthy lifestyle during menopause"
              className="rounded-2xl shadow-md object-cover w-full h-80"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
