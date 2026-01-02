import HealthTopicPage from "../../components/HealthTopicPage";

export default function Nutrition() {
  return (
    <HealthTopicPage
      title="Nutrition & Healthy Eating"
      slug="nutrition"
      heroImage="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1600&q=80"
      introText="Good nutrition is the foundation of overall health and wellness. Eating a balanced diet rich in whole foods, vitamins, and minerals supports your body's functions, boosts energy levels, and helps prevent chronic diseases."
      tips={[
        "Engage in at least 150 minutes of moderate activity per week.",
        "Include both cardio and strength training in your routine.",
        "Stay hydrated and fuel your body with nutritious foods.",
        "Rest and recover — sleep and downtime are essential.",
        "Choose activities you enjoy to make fitness a lifelong habit.",
      ]}
    />
  );
}
