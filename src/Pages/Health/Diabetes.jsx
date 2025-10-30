export default function Diabetes() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col border border-gray-300 rounded-lg overflow-hidden">
      {/* 🌸 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-200 to-rose-300"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🌸 Hero Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Diabetes
        </h1>
        <p className="text-lg mb-8 text-rose-50 max-w-2xl drop-shadow-md">
          Learn about diabetes, its causes, symptoms, and ways to manage it
          through lifestyle and treatment options.
        </p>

        {/* 🌸 Content Section */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          {/* Left: Text Content */}
          <div className="text-left space-y-4 text-gray-800">
            <h2 className="text-2xl font-bold text-rose-600">
              What Is Diabetes?
            </h2>
            <p>
              Diabetes is a chronic medical condition that occurs when your body
              cannot properly regulate blood sugar (glucose). Glucose is your
              main source of energy, and insulin — a hormone made by the
              pancreas — helps it enter your cells.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              Types of Diabetes
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Type 1 Diabetes:</strong> The immune system destroys the
                cells that make insulin.
              </li>
              <li>
                <strong>Type 2 Diabetes:</strong> The body becomes resistant to
                insulin or doesn’t produce enough of it.
              </li>
              <li>
                <strong>Gestational Diabetes:</strong> Occurs during pregnancy
                and usually resolves after childbirth.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-rose-600">Symptoms</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Frequent urination and excessive thirst</li>
              <li>Fatigue and blurred vision</li>
              <li>Unexplained weight changes</li>
              <li>Slow healing of wounds</li>
            </ul>

            <h2 className="text-2xl font-bold text-rose-600">Management</h2>
            <p>
              While diabetes has no cure, it can be effectively managed with
              proper diet, exercise, medication, and blood sugar monitoring.
              Early detection and consistent care are key to preventing
              complications.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1582719478148-50e5d7f6b11b?auto=format&fit=crop&w=800&q=80"
              alt="Diabetes awareness concept"
              className="rounded-2xl shadow-md object-cover w-full h-80"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
