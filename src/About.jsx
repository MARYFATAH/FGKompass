import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function About() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col border border-gray-300 rounded-lg overflow-hidden">
      {/* 🌸 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-200 to-rose-300"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🌸 Navbar */}
      <div className="relative z-20">
        <Nav />
      </div>

      {/* 🌸 Hero Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          About Us
        </h1>
        <p className="text-lg mb-8 text-rose-50 max-w-2xl drop-shadow-md">
          Learn more about our mission, our story, and our passion for holistic
          wellness.
        </p>

        {/* 🌸 Content Section */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          {/* Left: Text Content */}
          <div className="text-left space-y-4 text-gray-800">
            <h2 className="text-2xl font-bold text-rose-600">Our Mission</h2>
            <p>
              At <strong>Wellness Haven</strong>, our mission is to empower
              people to take charge of their health through natural and holistic
              practices. We believe true wellness starts from within — balancing
              the body, mind, and spirit.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">Our Story</h2>
            <p>
              Founded in 2021 by a team of health enthusiasts, we began with one
              goal: to make wellness simple and accessible. What started as a
              small blog has grown into a trusted space for thousands of readers
              worldwide.
            </p>

            <h2 className="text-2xl font-bold text-rose-600">Why Choose Us</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Evidence-based wellness articles</li>
              <li>Expert insights and personalized tips</li>
              <li>Community-driven health support</li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=800&q=80"
              alt="Wellness concept"
              className="rounded-2xl shadow-md object-cover w-full h-80"
            />
          </div>
        </div>
      </main>

      {/* 🌸 Footer */}
      <footer className="relative z-20 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
