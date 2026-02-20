import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen w-full font-montserrat flex flex-col overflow-hidden bg-white">

      <main className="relative z-10 flex-grow flex flex-col items-center text-center px-6 py-20 space-y-16">
        {/* title */}
        <section className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#9F1239]">
            {t("contact.contactUs")}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </section>

        {/* form */}
        <section className="w-full max-w-3xl bg-white rounded-2xl shadow-sm border border-[#FCE7F3] p-10">
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
                className="w-full px-4 py-3 rounded-xl border border-[#FBCFE8] focus:outline-none focus:ring-2 focus:ring-[#FDA4AF]"
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
                className="w-full px-4 py-3 rounded-xl border border-[#FBCFE8] focus:outline-none focus:ring-2 focus:ring-[#FDA4AF]"
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
                className="w-full px-4 py-3 rounded-xl border border-[#FBCFE8] focus:outline-none focus:ring-2 focus:ring-[#FDA4AF] resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#E11D48] hover:bg-[#BE123C] text-white font-medium py-3 rounded-xl transition"
            >
              {t("contact.send")}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
