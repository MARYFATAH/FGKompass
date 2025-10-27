import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 shadow w-full shadow-inner ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section - Logo + Name */}
          <div className="flex items-center space-x-2">
            <svg
              className="h-6 w-6 text-rose-600"
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
            <span className="text-gray-800 font-semibold text-lg">
              Woman Cycle Tracker
            </span>
          </div>

          {/* Center Section - Links */}
          <div className="flex space-x-6 text-sm">
            <Link
              to="/home"
              className="text-gray-600 hover:text-rose-500 transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-rose-500 transition duration-150 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-rose-500 transition duration-150 ease-in-out"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-rose-500 transition duration-150 ease-in-out"
            >
              Privacy
            </Link>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-rose-500 transition duration-150 ease-in-out"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12v-9.294H9.293v-3.622H12V8.413c0-2.68 1.636-4.144 4.025-4.144 1.144 0 2.125.084 2.41.123v2.8h-1.654c-1.298 0-1.55.617-1.55 1.52v1.993h3.1l-.404 3.622H15.23V24h7.445A1.33 1.33 0 0024 22.674V1.326A1.33 1.33 0 0022.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-rose-500 transition duration-150 ease-in-out"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775A4.958 4.958 0 0023.337 3.1a9.993 9.993 0 01-3.127 1.195 4.927 4.927 0 00-8.4 4.49A13.978 13.978 0 011.671 3.15a4.822 4.822 0 00-.664 2.475 4.92 4.92 0 002.188 4.1 4.903 4.903 0 01-2.229-.616v.06a4.937 4.937 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.937 4.937 0 004.604 3.417A9.867 9.867 0 010 19.54 13.94 13.94 0 007.548 21c9.142 0 14.307-7.72 13.995-14.646a10.025 10.025 0 002.41-2.784z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-rose-500 transition duration-150 ease-in-out"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.5-4-1.5a3.1 3.1 0 00-1.3-1.7c-1-.7.1-.7.1-.7a2.4 2.4 0 011.7 1.1 2.5 2.5 0 003.4 1 2.5 2.5 0 01.7-1.6c-2.7-.3-5.6-1.3-5.6-5.8a4.6 4.6 0 011.2-3.2 4.2 4.2 0 01.1-3.1s1-.3 3.3 1.2a11.4 11.4 0 016 0C16 5 17 5.3 17 5.3a4.2 4.2 0 01.1 3.1 4.6 4.6 0 011.2 3.2c0 4.5-2.9 5.5-5.6 5.8a2.8 2.8 0 01.8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0012 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Woman Cycle Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
