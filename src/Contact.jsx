import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col overflow-hidden bg-gradient-to-b from-rose-100 via-rose-200/70 to-rose-300/50">
      {/* 🌿 Elegant Side Borders */}
      <div className="absolute inset-y-0 left-[4%] right-[4%] border-x border-rose-300/50 pointer-events-none" />

      {/* 🌸 Overlay tint */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      {/* 🌸 Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center text-center px-6 py-16 space-y-16">
        {/* 🌷 Hero Section */}
        <section>
          <h1 className="text-5xl font-bold mt-15 mb-4 text-slate-800 drop-shadow-sm">
            {t("contact.contactUs")}
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            {t("contact.description")}
          </p>
        </section>

        {/* 🌸 Contact Form Section */}
        <section className="max-w-3xl w-full mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200 p-10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="text-left">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t("contact.name")}
              </label>
              <input
                type="text"
                placeholder={t("contact.namePlaceholder")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:outline-none"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t("contact.email")}
              </label>
              <input
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:outline-none"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t("contact.message")}
              </label>
              <textarea
                placeholder={t("contact.messagePlaceholder")}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:outline-none resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-800 text-white font-medium py-3 px-4 rounded-lg text-lg shadow-sm hover:bg-slate-900 transition-all duration-200"
            >
              {t("contact.send")}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
