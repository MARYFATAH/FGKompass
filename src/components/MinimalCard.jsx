import React from "react";

const MinimalCard = ({ title, description, icon: Icon }) => {
  return (
    // Card Container: Subtle shadow, rounded corners, and a light background.
    // Transition for a smooth hover effect.
    <div
      className="
      bg-white 
      p-6 md:p-8 
      rounded-xl 
      shadow-sm 
      border border-gray-200 
      hover:shadow-md 
      hover:bg-gray-50 
      transition duration-300 
      max-w-sm 
      mx-auto
    "
    >
      {/* Accent/Icon Section */}
      <div className="flex items-center space-x-4 mb-4">
        {/* Rose 400 as the accent color for the icon and a border for subtle depth */}
        {Icon && (
          <div
            className="
            text-rose-400 
            p-2 
            border 
            border-rose-400/50 
            rounded-lg 
            flex-shrink-0
          "
          >
            {/* The icon size is set using Tailwind classes for consistency */}
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
        )}

        {/* Title: Primary dark gray for readability */}
        <h3
          className="
          text-lg 
          font-semibold 
          text-gray-800
        "
        >
          {title}
        </h3>
      </div>

      {/* Description: Secondary light gray for minimal look */}
      <p
        className="
        text-base 
        text-gray-500
      "
      >
        {description}
      </p>

      {/* Optional: Rose 400 link/button for action */}
      <div className="mt-4">
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
  );
};

export default MinimalCard;

// Example Usage (requires an icon library like Heroicons)
// import { Zap } from 'lucide-react'; // If using Lucide
// import { BoltIcon } from '@heroicons/react/24/outline'; // If using Heroicons

/* <MinimalCard 
  title="Minimal Design" 
  description="This card uses white, light gray, and rose 400 for a clean, elegant, and non-distracting user interface." 
  icon={BoltIcon} 
/>
*/
