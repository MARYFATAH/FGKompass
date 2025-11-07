import HealthTopicPage from "../../Components/HealthTopicPage";

export default function Endometriosis() {
  return (
    <HealthTopicPage
      title="Endometriosis Awareness"
      slug="endometriosis"
      heroImage="https://images.unsplash.com/photo-1604515971042-00fef06b4d89?auto=format&fit=crop&w=1600&q=80"
      introText="Endometriosis is a chronic condition where tissue similar to the lining inside the uterus grows outside the uterus, causing pain and potentially affecting fertility. Awareness and early diagnosis are crucial for managing symptoms and improving quality of life."
      accent="pink"
      tips={[
        "Perform regular self-examinations to detect any changes in the breasts.",
        "Maintain a balanced diet with plenty of fruits, vegetables, and whole grains.",
        "Get regular mammograms to detect early signs of breast cancer.",
        "Seek professional help for any concerns or questions.",
        "Stay hydrated and manage stress effectively.",
      ]}
    />
  );
}
