export default function MaternalHealth() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col border border-gray-300 rounded-lg overflow-hidden">
      {/* 🌸 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-200 to-rose-300"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🌸 Hero Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Maternal Health
        </h1>
        <p className="text-lg mb-8 text-rose-50 max-w-2xl drop-shadow-md">
          Supporting women through pregnancy, childbirth, and postpartum care to
          ensure the best possible outcomes for both mother and child.
        </p>

        {/* 🌸 Content Section */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          {/* Left: Text Content */}
          <div className="text-left space-y-4 text-gray-800">
            <h2 className="text-2xl font-bold text-rose-600">
              What Is Maternal Health?
            </h2>
            <p>
              Maternal health refers to the well-being of women during
              pregnancy, childbirth, and the postpartum period. It includes
              physical, mental, and emotional aspects, ensuring both mother and
              baby are healthy.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">
              Why It’s Important
            </h2>
            <p>
              Access to quality maternal healthcare can prevent complications
              and save lives. Good prenatal and postnatal care supports the
              health of both mother and child, reducing risks during delivery.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">Key Insights</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Regular prenatal checkups and nutrition are vital for maternal
                and fetal health.
              </li>
              <li>
                Mental health support during pregnancy and postpartum is crucial
                for emotional well-being.
              </li>
              <li>
                Early detection and treatment of complications can save lives.
              </li>
              <li>
                Global maternal mortality has decreased significantly, but
                continued awareness and access to care remain essential.
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1600118072690-8a3a0d6e77ef?auto=format&fit=crop&w=800&q=80"
              alt="Maternal health care"
              className="rounded-2xl shadow-md object-cover w-full h-80"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
