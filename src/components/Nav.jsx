import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

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
          {/* ================= LOGO (LIGHTNING) ================= */}
          <div className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 text-rose-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-xl font-bold text-rose-600">FG Kompass</span>
          </div>
          {/* ================= LANGUAGE SWITCHER ================= */}
          <div className="flex gap-2 text-sm">
            <button
              onClick={() => {
                i18n.changeLanguage("de");
                localStorage.setItem("lang", "de");
              }}
            >
              DE
            </button>

            <button
              onClick={() => {
                i18n.changeLanguage("en");
                localStorage.setItem("lang", "en");
              }}
            >
              EN
            </button>
          </div>
          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden sm:flex sm:space-x-8 items-center relative z-[9999]">
            <Link
              to="/home"
              className={`${baseLinkClasses} ${
                isActive("/home")
                  ? "text-black border-b-2 border-rose-400"
                  : "text-gray-600 hover:border-b-2 hover:border-rose-400"
              }`}
              aria-current={isActive("/home") ? "page" : undefined}
            >
              {t("nav.home")}
            </Link>

            {/* Wellness */}
            <div className="relative group">
              <button
                className={`${baseLinkClasses} text-gray-600 flex items-center`}
              >
                {t("nav.wellness")}
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

              <ul className="absolute left-0 top-full min-w-[180px] rounded-md border border-slate-200 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                {[
                  { name: "Fitness", to: "/wellness/fitness" },
                  { name: "Nutrition", to: "/wellness/nutrition" },
                  { name: "Sleep", to: "/wellness/sleep" },
                  { name: "Recipe", to: "/wellness/recipe" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block p-3 text-sm text-slate-800 hover:bg-rose-50 rounded-md"
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
                {t("nav.health")}
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

              <ul className="absolute left-0 top-full min-w-[400px] grid grid-cols-2 rounded-md border border-slate-200 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                {[
                  { name: t("nav.heartDisease"), to: "/health/heart-disease" },
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
                      className="block p-3 text-sm text-slate-800 hover:bg-rose-50 rounded-md"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/tracker"
              className={`${baseLinkClasses} text-gray-600 hover:border-b-2 hover:border-rose-400`}
            >
              {t("nav.tracker")}
            </Link>
            <Link
              to="/about"
              className={`${baseLinkClasses} text-gray-600 hover:border-b-2 hover:border-rose-400`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className={`${baseLinkClasses} text-gray-600 hover:border-b-2 hover:border-rose-400`}
            >
              {t("nav.contact")}
            </Link>
          </div>
          {/* ================= SEARCH + NOTIFICATION ================= */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-3 py-1.5 text-sm rounded-md border border-gray-300 hover:border-rose-400 focus:ring-2 focus:ring-rose-300 focus:border-rose-400 outline-none"
              />
            </div>

            {/* Notification */}
            <button className="p-2 rounded-full text-gray-500 hover:text-rose-600 hover:bg-rose-50 transition">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5" />
                <path d="M9 17v1a3 3 0 006 0v-1" />
              </svg>
            </button>
          </div>
          {/* ================= MOBILE BUTTON ================= */}
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
            {/* Home */}
            <Link
              to="/home"
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-medium"
            >
              Home
            </Link>

            {/* Wellness */}
            <button
              onClick={() => setMobileWellness(!mobileWellness)}
              className="w-full text-left py-2 font-medium"
            >
              Wellness ▾
            </button>

            {mobileWellness && (
              <div className="pl-4 space-y-1">
                <Link
                  to="/wellness/fitness"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1"
                >
                  Fitness
                </Link>
                <Link
                  to="/wellness/nutrition"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1"
                >
                  Nutrition
                </Link>
                <Link
                  to="/wellness/sleep"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1"
                >
                  Sleep
                </Link>
                <Link
                  to="/wellness/recipe"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1"
                >
                  Recipe
                </Link>
              </div>
            )}

            {/* Health */}
            <button
              onClick={() => setMobileHealth(!mobileHealth)}
              className="w-full text-left py-2 font-medium"
            >
              Health Condition ▾
            </button>

            {mobileHealth && (
              <div className="pl-4 space-y-1">
                <Link
                  to="/health/heart-disease"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1"
                >
                  Heart Disease
                </Link>
                <Link
                  to="/health/breast-cancer"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1"
                >
                  Breast Cancer
                </Link>
                <Link
                  to="/health/diabetes"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1"
                >
                  Diabetes
                </Link>
                <Link
                  to="/health/osteoporosis"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1"
                >
                  Osteoporosis
                </Link>
                <Link
                  to="/health/endometriosis"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1"
                >
                  Endometriosis
                </Link>
                <Link
                  to="/health/maternal-health"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1"
                >
                  Maternal Health
                </Link>
                <Link
                  to="/health/mental-health"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1"
                >
                  Mental Health
                </Link>
                <Link
                  to="/health/menopause"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1"
                >
                  Menopause
                </Link>
              </div>
            )}

            {/* Other links */}
            <Link
              to="/tracker"
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-medium"
            >
              Cycle Tracker
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-medium"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
