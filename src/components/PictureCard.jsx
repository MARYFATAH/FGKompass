import React from "react";

const PictureCard = ({ imageUrl, imageAlt, title, description }) => {
  return (
    <section className="relative w-full h-[240px] md:h-[280px] rounded-3xl overflow-hidden shadow-sm">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />

      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-6 md:pb-8 text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-[#9F1239] leading-tight">
          {title}
        </h1>
        <p className="mt-2 text-sm md:text-[15px] text-slate-600 max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PictureCard;
