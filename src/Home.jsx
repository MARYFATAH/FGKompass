import React from "react";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col">
      {/* ✅ Background gradient with rose tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-500"></div>

      {/* Optional subtle overlay for better contrast */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* ✅ Navbar */}
      <div className="relative z-10">
        <Nav />
      </div>

      {/* ✅ Hero section */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-4">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Welcome to fgkompass
        </h1>
        <p className="text-lg mb-8 text-rose-50 max-w-md drop-shadow-md">
          Your guide to holistic health and wellness.
        </p>
        <a
          href="/about"
          className="bg-white text-rose-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-rose-100 transition-colors"
        >
          Learn More About Us
        </a>
      </div>
    </div>
  );
}
