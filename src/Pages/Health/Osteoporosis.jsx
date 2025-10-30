export default function Osteoporosis() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col border border-gray-300 rounded-lg overflow-hidden">
      {/* 🌸 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-200 to-rose-300"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🌸 Hero Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Osteoporosis
        </h1>
        <p className="text-lg mb-8 text-rose-50 max-w-2xl drop-shadow-md">
          Osteoporosis is a condition where bones become weak and brittle,
          increasing the risk of fractures — particularly in the hips, spine,
          and wrists. It affects millions worldwide, especially postmenopausal
          women.
        </p>

        {/* 🌸 Content Section */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          {/* Left: Text Content */}
          <div className="text-left space-y-4 text-gray-800">
            <h2 className="text-2xl font-bold text-rose-600">
              Understanding Osteoporosis
            </h2>
            <p>
              Osteoporosis occurs when bone loss outpaces bone formation,
              resulting in porous and fragile bones. It often progresses
              silently until a fracture occurs.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              Risk Factors & Prevention
            </h2>
            <p>
              Several factors increase the risk, including age, hormonal
              changes, sedentary lifestyle, smoking, and calcium deficiency.
              Prevention focuses on nutrition, exercise, and lifestyle
              management.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              Key Facts About Osteoporosis
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Affects bone density and structure, making bones fragile.</li>
              <li>More common in women, especially after menopause.</li>
              <li>
                Early detection and treatment are key to preventing fractures.
              </li>
              <li>
                Adequate calcium, vitamin D, and physical activity help maintain
                bone health.
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1576765607924-b178a1e1d87a?auto=format&fit=crop&w=800&q=80"
              alt="Healthy bones and lifestyle"
              className="rounded-2xl shadow-md object-cover w-full h-80"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
