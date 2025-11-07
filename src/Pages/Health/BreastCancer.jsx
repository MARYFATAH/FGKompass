import HealthTopicPage from "./../../components/HealthTopicPage";

export default function BreastCancer() {
  return (
    <HealthTopicPage
      title="Breastcancer"
      slug="breastcancer"
      heroImage="https://images.unsplash.com/photo-1582719478148-50e5d7f6b11b?auto=format&fit=crop&w=1600&q=80"
      introText="Learn about breast cancer, its causes, symptoms, and management — empowering people to lead healthy, active lives."
      tips={[
        "Perform regular self-examinations to detect any changes.",
        "Maintain a balanced diet with plenty of fruits, vegetables, and whole grains.",
        "Get regular mammograms to detect early signs of breast cancer.",
        "Seek professional help for any concerns or questions.",
        "Stay hydrated and manage stress effectively.",
      ]}
    />
  );
}
