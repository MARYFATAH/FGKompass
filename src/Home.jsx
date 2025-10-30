import React from "react";
import Nav from "./components/Nav";
import MinimalCard from "./components/MinimalCard";
import PictureCard from "./components/PictureCard";
import Footer from "./components/Footer";
import ExploreBy from "./components/ExploreBy";
import MoreOnTopic from "./components/MoreOnTopic";

export default function Home() {
  return (
    <div className="relative min-h-screen font-montserrat flex flex-col border border-gray-300  overflow-hidden">
      {/* 🌸 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-500"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🧭 Navbar */}

      {/* 🩵 Main Content */}
      <main className="relative  flex-grow flex flex-col items-center text-center px-4 py-12 space-y-12">
        {/* 🌿 Hero Section */}
        <PictureCard
          className="w-4/5 max-w-6xl mx-auto"
          title="Holistic Health at Your Fingertips"
          description="Discover a world of wellness with our curated resources and expert guidance."
          imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          imageAlt="Holistic health and wellness"
        />

        <p className="text-lg text-rose-50 max-w-md drop-shadow-md">
          Your guide to holistic health and wellness.
        </p>

        {/* 💡 Featured Minimal Cards Section */}
        <section className="w-full max-w-5xl text-left">
          <h2 className="text-lg font-semibold  text-white drop-shadow-100 mb-6 drop-shadow-md border-b border-rose-100 pb-2">
            Explore by:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <MinimalCard
              title="Nutrition"
              description="Tips and guides for a balanced diet."
            />
            <MinimalCard
              title="Fitness"
              description="Workouts and routines for all levels."
            />
            <MinimalCard
              title="Health "
              description="Mental and physical wellness advice."
            />
            <MinimalCard
              title="Mindfulness"
              description="Practices to cultivate inner peace."
            />
            <MinimalCard
              title="Meditation"
              description="Guided meditation sessions for relaxation."
            />
          </div>
        </section>

        {/* 📚 More on Topic Section */}
        <section className="w-full max-w-5xl text-left">
          <h2 className="text-lg font-semibold  text-white drop-shadow-100 mb-6 drop-shadow-md border-b border-rose-100 pb-2">
            More on Topic
          </h2>
          <MoreOnTopic />
        </section>

        {/* 💡 Featured Minimal Cards Section */}
        <section className="w-full max-w-5xl text-left">
          <h2 className="text-lg font-semibold  text-white drop-shadow-100 mb-6 drop-shadow-md border-b border-rose-100 pb-2">
            Health Conditions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <MinimalCard
              title="Breast Cancer"
              description="Information and support for breast cancer patients."
            />
            <MinimalCard
              title="Diabetes"
              description="Managing diabetes through lifestyle and medication."
            />
            <MinimalCard
              title="Heart Disease"
              description="Prevention and treatment of heart-related conditions."
            />
            <MinimalCard
              title="Andrometiosis"
              description="Understanding and managing endometriosis."
            />
            <MinimalCard
              title="Pregnancy"
              description="Resources for a healthy pregnancy journey."
            />
          </div>
        </section>

        {/* 🔗 Call-to-Action Button */}
        <div className="flex items-center justify-center mt-8">
          <a
            href="/about"
            className="transition-colors shadow-sm text-white font-semibold py-2 px-6 rounded-sm border border-white hover:bg-white hover:text-rose-500"
          >
            Mehr erfahren
          </a>
        </div>
      </main>

      {/* 🦶 Footer */}
    </div>
  );
}
