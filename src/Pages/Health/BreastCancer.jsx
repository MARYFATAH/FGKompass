export default function BreastCancer() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col border border-gray-300 rounded-lg overflow-hidden">
      {/* 🌸 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-200 to-rose-300"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🌸 Hero Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Breast Cancer Awareness
        </h1>
        <p className="text-lg mb-8 text-rose-50 max-w-2xl drop-shadow-md">
          Understanding the signs, prevention, and treatment of breast cancer
          empowers you to take charge of your health.
        </p>

        {/* 🌸 Content Section */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          {/* Left: Text Content */}
          <div className="text-left space-y-4 text-gray-800">
            <h2 className="text-2xl font-bold text-rose-600">
              What Is Breast Cancer?
            </h2>
            <p>
              Breast cancer develops when abnormal cells in the breast grow and
              divide uncontrollably, forming a tumor. It is the most common
              cancer among women globally, though men can be affected too.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              Key Facts and Awareness
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Breast cancer is the most common form of cancer in women.</li>
              <li>
                Early detection through screening can greatly improve outcomes.
              </li>
              <li>
                A healthy lifestyle — regular exercise and a balanced diet — may
                reduce risk.
              </li>
              <li>
                Modern treatments make breast cancer often curable when detected
                early.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-rose-600">
              Prevention and Support
            </h2>
            <p>
              Regular self-exams, mammograms, and awareness of changes in your
              body are key. Remember, support from loved ones and healthcare
              professionals plays a huge role in recovery.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1604515971042-00fef06b4d89?auto=format&fit=crop&w=800&q=80"
              alt="Breast cancer awareness ribbon"
              className="rounded-2xl shadow-md object-cover w-full h-80"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
