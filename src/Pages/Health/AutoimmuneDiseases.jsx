export default function AutoimmuneDiseases() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col border border-gray-300 rounded-lg overflow-hidden">
      {/* 🌸 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-200 to-rose-300"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🌸 Hero Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Autoimmune Diseases
        </h1>
        <p className="text-lg mb-8 text-rose-50 max-w-2xl drop-shadow-md">
          Understanding how your immune system works — and sometimes misfires —
          is key to managing autoimmune diseases effectively.
        </p>

        {/* 🌸 Content Section */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          {/* Left: Text Content */}
          <div className="text-left space-y-4 text-gray-800">
            <h2 className="text-2xl font-bold text-rose-600">
              What Are Autoimmune Diseases?
            </h2>
            <p>
              Autoimmune diseases occur when the body’s immune system mistakenly
              attacks its own healthy cells and tissues. There are over 80
              recognized types, each affecting different parts of the body.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              Common Autoimmune Conditions
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Rheumatoid arthritis</li>
              <li>Systemic lupus erythematosus (Lupus)</li>
              <li>Multiple sclerosis</li>
              <li>Type 1 diabetes</li>
              <li>Hashimoto’s thyroiditis</li>
            </ul>

            <h2 className="text-2xl font-bold text-rose-600">
              Symptoms & Management
            </h2>
            <p>
              Symptoms can vary but often include fatigue, joint pain, skin
              issues, and inflammation. Early diagnosis and treatment are
              crucial in preventing long-term complications.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Autoimmune diseases can affect any organ or tissue in the body.
              </li>
              <li>
                Early detection and lifestyle changes improve quality of life.
              </li>
              <li>
                Modern treatments can control symptoms and slow disease
                progression.
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1588776814546-382c7c8e1d1b?auto=format&fit=crop&w=800&q=80"
              alt="Immune system concept"
              className="rounded-2xl shadow-md object-cover w-full h-80"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
