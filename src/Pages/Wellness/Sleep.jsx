import HealthTopicPage from "../../components/HealthTopicPage";

export default function Sleep() {
  return (
    <HealthTopicPage
      title="Sleep & Restful Living"
      slug="sleep"
      heroImage="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1600&q=80"
      introText="Quality sleep is essential for overall health and well-being. It supports cognitive function, emotional regulation, and physical health. Prioritizing restful sleep can lead to improved mood, energy levels, and a stronger immune system."
      tips={[
        "Establish a consistent sleep schedule by going to bed and waking up at the same time every day.",
        "Create a relaxing bedtime routine to signal your body that it's time to wind down.",
        "Limit exposure to screens and bright lights before bedtime.",
        "Keep your sleep environment cool, dark, and quiet for optimal rest.",
        "Avoid caffeine and heavy meals close to bedtime.",
        "Engage in regular physical activity to promote better sleep quality.",
      ]}
    />
  );
}
