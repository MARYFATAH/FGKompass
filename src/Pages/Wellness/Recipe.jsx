import HealthTopicPage from "../../Components/HealthTopicPage";

export default function Recipe() {
  return (
    <HealthTopicPage
      title="Recipes for Healthy Eating"
      slug="recipe"
      heroImage="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1600&q=80"
      introText="Discover delicious and nutritious recipes that support your wellness journey. Eating well is a key component of overall health, and these recipes are designed to be both tasty and beneficial for your body."
      tips={[
        "Incorporate a variety of colorful fruits and vegetables into your meals.",
        "Include whole grains, lean proteins, and healthy fats in your diet.",
        "Choose foods that are low in added sugars and high in fiber.",
        "Engage in regular physical activity to boost mood and overall health.",
        "Join a support group or community to share experiences and learn from others.",
      ]}
    />
  );
}
