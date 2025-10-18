import React from "react";
import Nav from "./components/Nav";
import MinimalCard from "./components/MinimalCard";
import PictureCard from "./components/PictureCard";

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
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg w-full max-w-4xl">
          Welcome to fgkompass
        </h1>
        <PictureCard
          className="mb-8 w-full max-w-4xl mx-auto"
          title="Holistic Health at Your Fingertips"
          description="Discover a world of wellness with our curated resources and expert guidance."
          imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          imageAlt="Holistic health and wellness"
        />
        <p className="text-lg mb-8 text-rose-50 max-w-md drop-shadow-md">
          Your guide to holistic health and wellness.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <MinimalCard
            title="Minimal Design"
            description="This card uses white, light gray, and rose 400 for a clean, elegant, and non-distracting user interface."
            // Icon can be any React component, e.g., from Heroicons or Lucide
            // icon={Zap} // Uncomment and import an icon if needed
          />
          <MinimalCard
            title="Customizable"
            description="You can easily customize the colors, fonts, and content to match your branding and preferences."
            // Icon can be any React component, e.g., from Heroicons or Lucide
            // icon={Zap} // Uncomment and import an icon if needed
          />
          <MinimalCard
            title="Accessible"
            description="We prioritize accessibility and ensure that our cards are easy to navigate for users with disabilities."
            // Icon can be any React component, e.g., from Heroicons or Lucide
            // icon={Zap} // Uncomment and import an icon if needed
          />

          <div className="col-span-1 md:col-span-3 flex items-center justify-center mt-4">
            <a
              href="/about"
              className="transition-colors shadow-sm text-white font-semibold py-2 px-6 rounded-sm border border-white hover:bg-white hover:text-rose-500 grid h-full place-items-center flex items-center justify-center"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
