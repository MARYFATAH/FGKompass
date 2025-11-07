import HealthTopicPage from "../../components/HealthTopicPage";

export default function Osteoporosis() {
  return (
    <HealthTopicPage
      title="Osteoporosis"
      slug="osteoporosis"
      heroImage="https://images.unsplash.com/photo-1576765607924-b178a1e1d87a?auto=format&fit=crop&w=1600&q=80"
      introText="Osteoporosis causes bones to become weak and brittle, increasing the risk of fractures — particularly in the hips, spine, and wrists."
      tips={[
        "Get enough calcium and vitamin D daily.",
        "Engage in regular weight-bearing exercises.",
        "Avoid smoking and limit alcohol intake.",
        "Have bone density screenings as recommended.",
        "Maintain a healthy diet rich in nutrients for bone health.",
      ]}
    />
  );
}
