import HealthTopicPage from "./../../components/HealthTopicPage";

export default function MaternalHealth() {
  return (
    <HealthTopicPage
      title="Maternal Health"
      slug="maternalhealth"
      heroImage="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1600&q=80"
      introText="Empowering women through pregnancy, childbirth, and beyond — for stronger, healthier families worldwide."
      tips={[
        "Attend all prenatal and postnatal appointments.",
        "Eat a balanced diet rich in vitamins and minerals.",
        "Seek emotional support to manage stress and anxiety.",
        "Stay active with gentle, doctor-approved exercises.",
        "Remember: maternal care is self-care — your health matters too.",
      ]}
    />
  );
}
