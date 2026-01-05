import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWellness, setMobileWellness] = useState(false);
  const [mobileHealth, setMobileHealth] = useState(false);

  const isActive = (path) => location.pathname === path;

  const baseLinkClasses =
    "inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-150 ease-in-out";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-rose-600">FG Kompass</span>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden sm:flex sm:space-x-8 items-center relative z-[9999]">
            {/* Home */}
            <Link
              to="/home"
              className={`${baseLinkClasses} ${
                isActive("/home")
                  ? "text-black border-b-2 border-rose-400"
                  : "text-gray-600 hover:border-b-2 hover:border-rose-400"
              }`}
            >
              Home
            </Link>

            {/* Wellness */}
            <div className="relative group">
              <button
                className={`${baseLinkClasses} text-gray-600 flex items-center`}
              >
                Wellness
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <ul
                role="menu"
                className="
                  absolute left-0 top-full
                  min-w-[180px]
                  rounded-md
                  border border-slate-200
                  bg-white
                  shadow-lg
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-opacity duration-200
                "
              >
                {[
                  { name: "Fitness", to: "/wellness/fitness" },
                  { name: "Nutrition", to: "/wellness/nutrition" },
                  { name: "Sleep", to: "/wellness/sleep" },
                  { name: "Recipe", to: "/wellness/recipe" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block p-3 text-sm text-slate-800 hover:bg-slate-100 rounded-md"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Health */}
            <div className="relative group">
              <button
                className={`${baseLinkClasses} text-gray-600 flex items-center`}
              >
                Health Condition
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <ul
                role="menu"
                className="
                  absolute left-0 top-full
                  min-w-[400px] grid grid-cols-2
                  rounded-md
                  border border-slate-200
                  bg-white
                  shadow-lg
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-opacity duration-200
                "
              >
                {[
                  { name: "Heart Disease", to: "/health/heart-disease" },
                  { name: "Breast Cancer", to: "/health/breast-cancer" },
                  { name: "Diabetes", to: "/health/diabetes" },
                  { name: "Osteoporosis", to: "/health/osteoporosis" },
                  { name: "Endometriosis", to: "/health/endometriosis" },
                  { name: "Maternal Health", to: "/health/maternal-health" },
                  { name: "Mental Health", to: "/health/mental-health" },
                  { name: "Menopause", to: "/health/menopause" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block p-3 text-sm text-slate-800 hover:bg-slate-100 rounded-md"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other links */}
            <Link
              to="/tracker"
              className={`${baseLinkClasses} ${
                isActive("/tracker")
                  ? "text-black border-b-2 border-rose-400"
                  : "text-gray-600 hover:border-b-2 hover:border-rose-400"
              }`}
            >
              Cycle Tracker
            </Link>

            <Link
              to="/about"
              className={`${baseLinkClasses} ${
                isActive("/about")
                  ? "text-black border-b-2 border-rose-400"
                  : "text-gray-600 hover:border-b-2 hover:border-rose-400"
              }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`${baseLinkClasses} ${
                isActive("/contact")
                  ? "text-black border-b-2 border-rose-400"
                  : "text-gray-600 hover:border-b-2 hover:border-rose-400"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden text-2xl text-gray-700"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            <Link to="/home" className="block py-2">
              Home
            </Link>

            <button
              onClick={() => setMobileWellness(!mobileWellness)}
              className="w-full text-left py-2"
            >
              Wellness ▾
            </button>

            {mobileWellness && (
              <div className="pl-4 space-y-1">
                <Link to="/wellness/fitness" className="block py-1">
                  Fitness
                </Link>
                <Link to="/wellness/nutrition" className="block py-1">
                  Nutrition
                </Link>
                <Link to="/wellness/sleep" className="block py-1">
                  Sleep
                </Link>
                <Link to="/wellness/recipe" className="block py-1">
                  Recipe
                </Link>
              </div>
            )}

            <button
              onClick={() => setMobileHealth(!mobileHealth)}
              className="w-full text-left py-2"
            >
              Health Condition ▾
            </button>

            {mobileHealth && (
              <div className="pl-4 space-y-1">
                <Link to="/health/heart-disease" className="block py-1">
                  Heart Disease
                </Link>
                <Link to="/health/breast-cancer" className="block py-1">
                  Breast Cancer
                </Link>
                <Link to="/health/diabetes" className="block py-1">
                  Diabetes
                </Link>
                <Link to="/health/osteoporosis" className="block py-1">
                  Osteoporosis
                </Link>
                <Link to="/health/endometriosis" className="block py-1">
                  Endometriosis
                </Link>
                <Link to="/health/maternal-health" className="block py-1">
                  Maternal Health
                </Link>
                <Link to="/health/mental-health" className="block py-1">
                  Mental Health
                </Link>
                <Link to="/health/menopause" className="block py-1">
                  Menopause
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
