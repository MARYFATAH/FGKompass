import React from "react";
import bgImage from "./assets/landingpage_bg.jpg";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className=" relative h-screen w-full font-montserrat">
      {/* Background image with rose gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute h-150 inset-0 bg-gradient-to-b from-rose-300/70 to-rose-100/10"></div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg ">
          <div className="mb-4">Women's Wellness Hub</div>
        </h1>
        <p className=" text-gray-600 text-xl mb-8 max-w-md m-4 ">
          your holistic guide to women's health
        </p>
        <Link
          to="/home"
          className="transition-colors shadow-sm text-white font-semibold py-2 px-6 rounded-sm border border-white"
        >
          Enter Site
        </Link>
      </div>
    </div>
  );
}
