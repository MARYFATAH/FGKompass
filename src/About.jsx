import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen w-full font-montserrat overflow-hidden bg-white">

      <main className="relative z-10 flex flex-col items-center px-6 py-20 space-y-20">
        {/* Hero */}
        <section className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#9F1239] mb-6">
            {t("about.title")}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {t("about.description")}
          </p>
        </section>

        {/* Content */}
        <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-sm border border-[#FCE7F3] p-12">
          {/* Text */}
          <div className="space-y-10 text-left">
            <div>
              <h2 className="text-2xl font-semibold text-[#9F1239] mb-3">
                {t("about.mission")}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t("about.missionText")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#9F1239] mb-3">
                {t("about.history")}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t("about.storyText")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#9F1239] mb-3">
                {t("about.values")}
              </h2>
              <ul className="space-y-2 text-slate-600 list-disc list-inside">
                <li>{t("about.value1")}</li>
                <li>{t("about.value2")}</li>
                <li>{t("about.value3")}</li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
              alt="Women practicing mindfulness and balance"
              className="rounded-3xl object-cover w-full h-[420px] shadow-sm"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-[#FCE7F3] pointer-events-none" />
          </div>
        </section>

        {/* CTA */}
        <section>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E11D48] text-white px-10 py-3 rounded-full text-lg font-medium shadow-sm hover:bg-[#BE123C] transition"
          >
            {t("about.contactUs")}
          </a>
        </section>
      </main>
    </div>
  );
}
