import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-rose-200/70 to-rose-300/50" />
      <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
      <div className="absolute inset-y-0 left-[4%] right-[4%] border-x border-rose-300/50 pointer-events-none" />

      <main className="relative z-10 flex-grow flex flex-col items-center text-center px-6 py-20 space-y-16">
        {/* title */}
        <section className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-rose-600">
            {t("contact.contactUs")}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </section>

        {/* form */}
        <section className="w-full max-w-3xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-rose-200 p-10">
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="text-left">
              <label className="block text-sm font-medium text-slate-600 mb-2">
                {t("contact.name")}
              </label>
              <input
                type="text"
                placeholder={t("contact.namePlaceholder")}
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-sm font-medium text-slate-600 mb-2">
                {t("contact.email")}
              </label>
              <input
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-sm font-medium text-slate-600 mb-2">
                {t("contact.message")}
              </label>
              <textarea
                rows="5"
                placeholder={t("contact.messagePlaceholder")}
                className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 rounded-xl transition"
            >
              {t("contact.send")}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
