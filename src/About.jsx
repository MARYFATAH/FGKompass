export default function About() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col overflow-hidden bg-gradient-to-b from-rose-100 via-rose-200/70 to-rose-300/50">
      {/* 🌿 Elegant Side Borders */}
      <div className="absolute inset-y-0 left-[4%] right-[4%] border-x border-rose-300/50 pointer-events-none" />

      {/* 🌸 Overlay tint */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      {/* 🌸 Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center text-center px-6 py-16 space-y-16">
        {/* 🌷 Hero Section */}
        <section>
          <h1 className="text-5xl font-bold mt-15 mb-4 text-slate-800 drop-shadow-sm">
            About Us
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Learn more about our mission, our story, and our passion for
            holistic wellness — guiding women to balance mind, body, and life.
          </p>
        </section>

        {/* 🌿 Content Section */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200 p-10">
          {/* Left: Text */}
          <div className="text-left space-y-6 text-gray-800">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At <strong>FG Kompass</strong>, our mission is to empower women
                to take charge of their health through holistic, evidence-based
                practices. We believe wellness is a lifelong journey — one that
                flourishes when body, mind, and spirit are in harmony.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2021 by a passionate team of health enthusiasts, we
                began as a small initiative to make wellness education
                accessible to all. Today, FG Kompass is a trusted digital guide
                for thousands seeking balance, strength, and knowledge.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                Why Choose Us
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Science-backed, easy-to-understand insights</li>
                <li>Authentic guidance from experienced health experts</li>
                <li>A compassionate community built on empowerment</li>
              </ul>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
              alt="Women practicing mindfulness and balance"
              className="rounded-2xl shadow-md object-cover w-full h-96"
            />
          </div>
        </section>

        {/* 🌸 Call to Action */}
        <section className="flex justify-center">
          <a
            href="/contact"
            className="bg-slate-800 text-white px-8 py-3 rounded-md text-lg font-medium shadow-sm hover:bg-slate-900 transition-all duration-200"
          >
            Get in Touch
          </a>
        </section>
      </main>
    </div>
  );
}
