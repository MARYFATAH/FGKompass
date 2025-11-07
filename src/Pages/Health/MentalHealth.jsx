import HealthTopicPage from "../../components/HealthTopicPage";

export default function MentalHealth() {
  return (
    <HealthTopicPage
      title="Mental Health"
      slug="mentalhealth"
      heroImage="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80"
      introText="Mental health is an essential part of overall well-being, influencing how we think, feel, and interact with others."
      tips={[
        "Practice mindfulness or meditation daily.",
        "Maintain a balanced routine with rest and physical activity.",
        "Talk openly about your emotions with trusted people.",
        "Seek professional help when needed — therapy is strength.",
        "Limit screen time and nurture social connections.",
      ]}
    />
  );
}
