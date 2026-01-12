import React from "react";
import bgImage from "./assets/landingpage_bg.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen w-full font-montserrat overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-300/80 via-rose-200/50 to-white/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white drop-shadow-lg leading-tight">
          {t("landing.title")}
        </h1>

        <p className="text-base sm:text-xl text-gray-700 mb-10 max-w-md">
          {t("landing.subtitle")}
        </p>

        {/* Transparent White Button */}
        <Link
          to="/home"
          className="
            inline-flex items-center justify-center
            bg-white/30 backdrop-blur-md
            border border-white/60
            text-white font-semibold
            px-8 py-3
            rounded-md
            shadow-md
            hover:bg-white/40
            hover:border-white
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-white/70
          "
        >
          {t("landing.start")}
        </Link>
      </div>
    </div>
  );
}
