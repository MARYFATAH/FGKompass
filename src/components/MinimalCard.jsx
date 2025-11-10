import React from "react";
import { Link } from "react-router-dom";

const MinimalCard = ({ title, description, icon: Icon, link }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-200 hover:shadow-md hover:bg-gray-50 transition duration-300 max-w-sm mx-auto">
      <div className="flex items-center space-x-4 mb-4">
        {Icon && (
          <div className="text-rose-400 p-2 border border-rose-400/50 rounded-lg flex-shrink-0 text-center">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      <p className="text-base text-gray-500">{description}</p>

      {link ? (
        // If link starts with http -> external anchor, else a React Router Link
        link.startsWith("http") ? (
          <div className="mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-rose-500 hover:text-rose-600 transition duration-150"
            >
              Learn More →
            </a>
          </div>
        ) : (
          <div className="mt-4">
            <Link
              to={link}
              className="text-sm font-medium text-rose-500 hover:text-rose-600 transition duration-150"
            >
              Learn More →
            </Link>
          </div>
        )
      ) : null}
    </div>
  );
};

export default MinimalCard;
