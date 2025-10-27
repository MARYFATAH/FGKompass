import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function About() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col">
      {/* ✅ Background gradient with rose tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-200 to-rose-300"></div>

      {/* Optional subtle overlay for better contrast */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* ✅ Navbar */}
      <div className="relative z-10">
        <Nav />
      </div>

      {/* ✅ Hero section */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-4">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          About Page
        </h1>
        <p className="text-lg mb-8 text-rose-50 max-w-md drop-shadow-md">
          Your guide to holistic health and wellness.
        </p>
      </div>
      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
}
