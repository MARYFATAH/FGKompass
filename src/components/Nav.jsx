import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const baseLinkClasses =
    "inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-150 ease-in-out";

  return (
    <nav className="bg-white shadow-md relative z-[9999] border border-gray-200">
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
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 relative z-[9999]">
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

              {/* Wellness Dropdown */}
              <div className="relative group z-[9999]">
                <button
                  className={`${baseLinkClasses} text-gray-600 hover:text-black flex items-center`}
                >
                  Wellness
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180 group-hover:text-rose-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <ul
                  role="menu"
                  className="absolute left-0 mt-2 min-w-[180px] rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg 
                             opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                             transition-all duration-200 ease-in-out 
                             z-[9999]"
                >
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 hover:bg-slate-100">
                    <Link to="/wellness/fitness">Fitness</Link>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 hover:bg-slate-100">
                    <Link to="/wellness/nutrition">Nutrition</Link>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 hover:bg-slate-100">
                    <Link to="/wellness/sleep">Sleep</Link>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 hover:bg-slate-100">
                    <Link to="/wellness/recipe">Recipe</Link>
                  </li>
                </ul>
              </div>

              {/* Health Condition Dropdown */}
              <div className="relative group z-[9999]">
                <button
                  className={`${baseLinkClasses} text-gray-600 hover:text-black flex items-center `}
                >
                  Health Condition
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180 group-hover:text-rose-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <ul
                  role="menu"
                  className="absolute left-0 mt-2 min-w-[400px] grid grid-cols-2 rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg 
                             opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                             transition-all duration-200 ease-in-out 
                             z-[9999]"
                >
                  <li className="cursor-pointer text-slate-800 flex  w-full text-sm items-center rounded-md p-3 hover:bg-slate-100">
                    <Link to="/health/heart-disease">Heart Disease</Link>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 hover:bg-slate-100">
                    <Link to="/health/breast-cancer">Breast Cancer</Link>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 hover:bg-slate-100">
                    <Link to="/health/diabetes">Diabetes</Link>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 hover:bg-slate-100">
                    <Link to="/health/osteoporosis">Osteoporosis</Link>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 hover:bg-slate-100">
                    <Link to="/health/endometriosis">Endometriosis</Link>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 hover:bg-slate-100">
                    <Link to="/health/maternal-health"> Maternal Health</Link>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 hover:bg-slate-100">
                    <Link to="/health/mental-health">Mental Health</Link>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 hover:bg-slate-100">
                    <Link to="/health/menopause">Menopause</Link>
                  </li>
                  <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 hover:bg-slate-100">
                    <Link to="/health/autoimmune-diseases">
                      {" "}
                      Autoimmune Diseases
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Search + Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block relative">
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

            <button
              type="button"
              className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition duration-150 ease-in-out"
            >
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
