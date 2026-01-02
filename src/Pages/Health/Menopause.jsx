import HealthTopicPage from "../../components/HealthTopicPage";

export default function Menopause() {
  return (
    <HealthTopicPage
      title="Menopause Awareness"
      slug="menopause"
      heroImage="https://images.unsplash.com/photo-1604515971042-00fef06b4d89?auto=format&fit=crop&w=1600&q=80"
      introText="Menopause is a natural biological process that marks the end of a
      woman's reproductive years. It is a time of physical and emotional
      changes that can impact overall health and well-being. Awareness and
      understanding of menopause can help women navigate this transition with
      confidence and grace."
      accent="purple"
      tips={[
        "Maintain a healthy diet rich in calcium and vitamin D to support bone health.",
        "Get regular mammograms to detect early signs of breast cancer.",
        "Seek professional help for any concerns or questions.",
        "Manage stress with meditation, deep breathing, and adequate sleep.",
        "Engage in regular physical activity to boost mood and overall health.",
        "Join a support group or community to share experiences and learn from others.",
      ]}
    />
  );
}
