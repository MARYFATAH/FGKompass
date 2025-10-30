import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Contact() {
  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col border border-gray-300 rounded-lg overflow-hidden">
      {/* 🌸 Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-rose-200 to-rose-300"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 🌸 Navbar */}

      {/* 🌸 Hero / Contact Form Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Contact Us
        </h1>
        <p className="text-lg mb-8 text-rose-50 max-w-md drop-shadow-md text-center">
          We’d love to hear from you! Send us a message and we’ll get back soon.
        </p>

        {/* 🌸 Contact Form */}
        <form
          className="w-full max-w-lg bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              placeholder="Write your message here..."
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:outline-none resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </main>

      {/* 🌸 Footer */}
    </div>
  );
}
