import HealthTopicPage from "../../Components/HealthTopicPage";

export default function Fitness() {
  return (
    <HealthTopicPage
      title="Fitness & Physical Wellness"
      slug="fitness"
      heroImage="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1600&q=80"
      introText="Staying active is one of the best ways to support your heart, strengthen your body, and boost your mood. Fitness is not just about exercise — it’s about creating a sustainable, healthy lifestyle."
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
