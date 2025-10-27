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
const MinimalPictureCard = ({ imageUrl, imageAlt, title, description }) => {
  // State to track if the card is hovered, for dynamic styling
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic classes for the card's border and shadow
  const cardClasses = `
    bg-white 
    rounded-xl 
    w-full
    overflow-hidden // Important for rounded corners on the image
    border 
    transition-all duration-300 
   
    mx-auto
    ${
      isHovered
        ? "border-rose-400 shadow-lg"
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
      <div className="relative w-full h-48 md:h-56 bg-gray-100 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay on hover (optional, for visual effect) */}
        <div className={imageOverlayClass}></div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8">
        {/* Title: Dark gray primary text */}
        <h3
          className="
          text-lg 
          font-semibold 
          text-gray-800 
          mb-2
        "
        >
          {title}
        </h3>

        {/* Description: Medium gray secondary text */}
        <p
          className="
          text-base 
          text-gray-500 
          mb-4
        "
        >
          {description}
        </p>

        {/* Action Link: Rose 500 for the action color */}
        <div className="mt-auto">
          {" "}
          {/* Use mt-auto if you want it pushed to bottom in a flex column */}
          <a
            href="#"
            className="
              text-sm 
              font-medium 
              text-rose-500 
              hover:text-rose-600 
              transition duration-150
            "
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MinimalPictureCard;
