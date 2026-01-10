import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

/**
 * 🌿 MinimalCard — elegant uniform-height category card (neutral theme)
 */
const MinimalCard = ({ title, description, icon: Icon, link }) => {
  const { t } = useTranslation();
  const content = (
    <div
      className="
        bg-white/95 backdrop-blur-sm
        rounded-2xl p-6 md:p-8
        shadow-sm border border-gray-200
        hover:border-gray-300 hover:shadow-md hover:scale-[1.02]
        transition-all duration-300
        flex flex-col justify-between
        h-full min-h-[230px]
        cursor-pointer
      "
    >
      <div>
        <div className="flex items-center space-x-4 mb-4">
          {Icon && (
            <div className="p-2 border border-gray-300/60 rounded-xl bg-gray-50 text-gray-700 flex-shrink-0">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
          )}
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
            {title}
          </h3>
        </div>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5">
        <span className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-150">
          {t("minimalcard.exploreCard")}
        </span>
      </div>
    </div>
  );

  if (!link) return content;

  return link.startsWith("http") ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="h-full">
      {content}
    </a>
  ) : (
    <Link to={link} className="h-full">
      {content}
    </Link>
  );
};

export default MinimalCard;
