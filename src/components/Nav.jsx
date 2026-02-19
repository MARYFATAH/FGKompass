import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileHealth, setMobileHealth] = useState(false);
  const [open, setOpen] = useState(false);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const baseLinkClasses =
    "inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-150 ease-in-out";

  const healthItems = [
    { name: t("nav.heartDisease"), to: "/health/heart-disease" },
    { name: t("nav.breastCancer"), to: "/health/breast-cancer" },
    { name: t("nav.diabetes"), to: "/health/diabetes" },
    { name: t("nav.osteoporosis"), to: "/health/osteoporosis" },
    { name: t("nav.endrometriosis"), to: "/health/endometriosis" },
    { name: t("nav.maternity"), to: "/health/maternal-health" },
    { name: t("nav.mentalHealth"), to: "/health/mental-health" },
    { name: t("nav.menopause"), to: "/health/menopause" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
                {healthItems.map((item) => (
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

          <div className="hidden sm:flex items-center space-x-4">
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

            <div className="relative text-sm md:text-base sm:ml-4">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 bg-white/70 backdrop-blur-md border border-gray-200 rounded-md px-4 py-2 text-rose-700 font-medium shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
              >
                {i18n.language.toUpperCase()}
                <span className="text-xs">▾</span>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-rose-100 overflow-hidden z-50">
                  <button
                    onClick={() => changeLang("de")}
                    className="w-full px-4 py-2 text-left hover:bg-rose-50 transition"
                  >
                    Deutsch
                  </button>

                  <button
                    onClick={() => changeLang("en")}
                    className="w-full px-4 py-2 text-left hover:bg-rose-50 transition"
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden text-2xl text-gray-700"
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            <Link
              to="/home"
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-medium"
            >
              {t("nav.home")}
            </Link>

            <button
              onClick={() => setMobileHealth(!mobileHealth)}
              className="w-full text-left py-2 font-medium"
            >
              {t("nav.health")} ▾
            </button>

            {mobileHealth && (
              <div className="pl-4 space-y-1">
                {healthItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-medium"
            >
              {t("nav.about")}
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-medium"
            >
              {t("nav.contact")}
            </Link>
          </div>

          <div className="px-4 py-3 border-t border-gray-200">
            <span className="block mb-2 font-medium">{t("nav.language")}:</span>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  changeLang("de");
                  setMobileOpen(false);
                }}
                className="px-3 py-1 rounded-md border border-gray-300 hover:bg-rose-50 transition"
              >
                Deutsch
              </button>
              <button
                onClick={() => {
                  changeLang("en");
                  setMobileOpen(false);
                }}
                className="px-3 py-1 rounded-md border border-gray-300 hover:bg-rose-50 transition"
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
