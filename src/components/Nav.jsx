import { Link, useLocation } from "react-router";

export default function Nav() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const baseLinkClasses =
    "inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-150 ease-in-out";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
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
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
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
              <Link
                to="/contact"
                className={`${baseLinkClasses} ${
                  isActive("/contact")
                    ? "text-black border-b-2 border-rose-400"
                    : "text-gray-600 hover:border-b-2 hover:border-rose-400"
                }`}
              >
                Contact
              </Link>
              <Link
                to="/about"
                className={`${baseLinkClasses} ${
                  isActive("/about")
                    ? "text-black border-b-2 border-rose-400"
                    : "text-gray-600 hover:border-b-2 hover:border-rose-400"
                }`}
              >
                About
              </Link>
            </div>
          </div>

          {/* Search + Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-200 sm:text-sm"
                />
              </div>
            </div>

            <button
              type="button"
              className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition duration-150 ease-in-out"
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.411 5.488 6 7.64 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <div className="flex-shrink-0">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="../assets/react.svg"
                alt="User Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
