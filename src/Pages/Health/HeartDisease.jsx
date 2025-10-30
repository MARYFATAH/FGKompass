export default function HeartDisease() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col border border-gray-300 rounded-lg overflow-hidden">
      {/* 🌸 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-200 to-rose-300"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🌸 Hero Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Heart Disease
        </h1>
        <p className="text-lg mb-8 text-rose-50 max-w-2xl drop-shadow-md">
          Understand heart disease, its causes, prevention, and how lifestyle
          choices can help maintain a healthy heart.
        </p>

        {/* 🌸 Content Section */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          {/* Left: Text Content */}
          <div className="text-left space-y-4 text-gray-800">
            <h2 className="text-2xl font-bold text-rose-600">
              What Is Heart Disease?
            </h2>
            <p>
              Heart disease refers to a group of conditions that affect the
              heart and blood vessels. It can be caused by genetic factors,
              lifestyle habits, or underlying medical conditions such as high
              blood pressure or diabetes.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              Common Types of Heart Disease
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Coronary Artery Disease:</strong> Blockages in the
                arteries that supply the heart.
              </li>
              <li>
                <strong>Heart Failure:</strong> The heart cannot pump blood
                efficiently.
              </li>
              <li>
                <strong>Arrhythmias:</strong> Irregular heartbeats.
              </li>
              <li>
                <strong>Valvular Disease:</strong> Damage to one or more heart
                valves.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-rose-600">
              Prevention Tips
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Maintain a healthy, balanced diet.</li>
              <li>Engage in regular physical activity.</li>
              <li>Avoid smoking and limit alcohol consumption.</li>
              <li>Monitor blood pressure, cholesterol, and blood sugar.</li>
            </ul>

            <h2 className="text-2xl font-bold text-rose-600">Key Takeaway</h2>
            <p>
              Heart disease remains one of the leading causes of death
              worldwide, but with early detection and healthy lifestyle choices,
              it can often be prevented or effectively managed.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1576765607924-3dd312679f9b?auto=format&fit=crop&w=800&q=80"
              alt="Heart health awareness"
              className="rounded-2xl shadow-md object-cover w-full h-80"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
