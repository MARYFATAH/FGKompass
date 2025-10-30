export default function Endometriosis() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col border border-gray-300 rounded-lg overflow-hidden">
      {/* 🌸 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-200 to-rose-300"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🌸 Hero Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Endometriosis
        </h1>
        <p className="text-lg mb-8 text-rose-50 max-w-2xl drop-shadow-md">
          Understanding endometriosis — its symptoms, causes, and how early
          diagnosis and treatment can improve quality of life.
        </p>

        {/* 🌸 Content Section */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          {/* Left: Text Content */}
          <div className="text-left space-y-4 text-gray-800">
            <h2 className="text-2xl font-bold text-rose-600">
              What Is Endometriosis?
            </h2>
            <p>
              Endometriosis is a chronic condition in which tissue similar to
              the lining of the uterus (the endometrium) grows outside the
              uterine cavity. This can cause pain, inflammation, and sometimes
              infertility.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              Common Symptoms
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Pelvic pain and cramping, especially during menstruation</li>
              <li>Pain during intercourse or bowel movements</li>
              <li>Heavy or irregular menstrual bleeding</li>
              <li>Fertility challenges in severe cases</li>
            </ul>

            <h2 className="text-2xl font-bold text-rose-600">
              Possible Causes
            </h2>
            <p>
              While the exact cause is still unknown, researchers believe
              genetics, hormonal imbalances, and immune system dysfunction all
              play a role in the development of endometriosis.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">Key Insights</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Endometriosis affects approximately 10% of women of reproductive
                age worldwide.
              </li>
              <li>
                Symptom severity does not always reflect the extent of the
                disease.
              </li>
              <li>
                Early diagnosis and treatment — medical, surgical, or lifestyle
                based — can greatly improve outcomes.
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1588776814546-885e2d87c5c5?auto=format&fit=crop&w=800&q=80"
              alt="Endometriosis awareness"
              className="rounded-2xl shadow-md object-cover w-full h-80"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
