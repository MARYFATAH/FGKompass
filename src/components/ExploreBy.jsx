import { useTranslation } from "react-i18next";

const categories = [
  { key: "nutrition", icon: "🥑" },
  { key: "sleep", icon: "⏰" },
  { key: "mental", icon: "🧠" },
  { key: "fitness", icon: "🏋️‍♀️" },
  { key: "reviews", icon: "📦" },
];

export default function ExploreBy() {
  const { t } = useTranslation();

  return (
    <section className="bg-white/80 rounded-lg shadow-sm p-6 mt-10 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {t("explore.title")}
        </h2>

        <a
          href="/explore"
          className="text-rose-500 font-medium text-sm hover:underline"
        >
          {t("explore.viewAll")}
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
          >
            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-rose-100 text-4xl shadow-md mb-2">
              {cat.icon}
            </div>

            <span className="text-gray-700 font-medium">
              {t(`explore.categories.${cat.key}`)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
