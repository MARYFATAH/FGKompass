import HealthTopicPage from "./../../components/HealthTopicPage";

export default function Diabetes() {
  return (
    <HealthTopicPage
      title="Diabetes"
      slug="diabetes"
      heroImage="https://images.unsplash.com/photo-1582719478148-50e5d7f6b11b?auto=format&fit=crop&w=1600&q=80"
      introText="Learn about diabetes, its causes, symptoms, and management — empowering people to lead healthy, active lives."
      tips={[
        "Monitor your blood sugar levels regularly.",
        "Maintain a balanced diet low in refined sugar.",
        "Exercise at least 30 minutes daily.",
        "Follow your medication plan consistently.",
        "Stay hydrated and manage stress effectively.",
      ]}
    />
  );
}
