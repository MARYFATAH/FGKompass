import HealthTopicPage from "../../components/HealthTopicPage";
export default function AutoimmuneDiseases() {
  return (
    <HealthTopicPage
      title="Autoimmune Diseases"
      slug="autoimmunediseases"
      heroImage="https://images.unsplash.com/photo-1588776814546-382c7c8e1d1b?auto=format&fit=crop&w=1600&q=80"
      introText="Autoimmune diseases occur when the immune system mistakenly attacks the body’s own healthy cells and tissues."
      tips={[
        "Recognize early symptoms and consult a healthcare provider.",
        "Maintain a nutrient-rich, anti-inflammatory diet.",
        "Get adequate rest and manage stress effectively.",
        "Follow prescribed treatments consistently.",
        "Join a support community for shared experience and learning.",
      ]}
    />
  );
}
