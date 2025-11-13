import HealthTopicPage from "../../Components/HealthTopicPage.jsx";

export default function HeartDisease() {
  return (
    <HealthTopicPage
      title="Heart Disease"
      slug="heart-disease"
      heroImage="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=80"
      introTitle="Caring for Your Heart"
      introText="Heart disease remains one of the leading causes of death globally. Understanding the risks, maintaining a healthy lifestyle, and detecting issues early can significantly improve heart health and longevity."
      tips={[
        "Eat a balanced diet low in saturated fats and rich in fiber.",
        "Exercise regularly to strengthen the heart and improve circulation.",
        "Quit smoking and limit alcohol consumption.",
        "Monitor your blood pressure, cholesterol, and blood sugar levels.",
        "Manage stress with meditation, deep breathing, and adequate sleep.",
      ]}
      // Optional: add subtle styling or props in your HealthTopicPage to enhance visuals
    />
  );
}
