// MinimalPictureCard.jsx
import React, { useState } from "react";

/**
 * A minimal picture card component with an image, white/gray palette, and Rose 400 accent.
 * Uses the useState hook for interactive hover effects on the card.
 *
 * @param {object} props
 * @param {string} props.imageUrl - The URL of the image to display.
 * @param {string} props.imageAlt - Alt text for the image.
 * @param {string} props.title - The main title of the card.
 * @param {string} props.description - The supporting descriptive text.
 */
const PictureCard = ({ imageUrl, imageAlt, title, description }) => {
  // State to track if the card is hovered, for dynamic styling
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic classes for the card's border and shadow
  const cardClasses = `
    bg-white 
    rounded-xl 
    w-full
    overflow-hidden 
    border-gray-200 
    border
    transition-all duration-300 
    mt-8
    mx-auto
    ${
      isHovered
        ? "border-gray-400 shadow-lg"
        : "border-gray-200 shadow-sm hover:shadow-md"
    }
  `;

  // Dynamic class for a subtle overlay effect on the image when hovered
  const imageOverlayClass = `
    absolute inset-0 
    bg-gradient-to-t from-black/20 to-transparent 
    transition-opacity duration-300
    ${isHovered ? "opacity-100" : "opacity-0"}
  `;

  return (
    <div
      className={cardClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative w-full h-48 md:h-90 bg-gray-100 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full   object-cover object-center translate-y-2 md:translate-y-7 transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
};

export default PictureCard;
