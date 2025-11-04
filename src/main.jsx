import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import HeartDisease from "./Pages/Health/HeartDisease.jsx";
import BreastCancer from "./Pages/Health/BreastCancer.jsx";
import Diabetes from "./Pages/Health/Diabetes.jsx";
import Osteoporosis from "./Pages/Health/Osteoporosis.jsx";
import Endometriosis from "./Pages/Health/Endometriosis.jsx";
import MaternalHealth from "./Pages/Health/MaternalHealth.jsx";
import MentalHealth from "./Pages/Health/MentalHealth.jsx";
import Menopause from "./Pages/Health/Menopause.jsx";
import AutoimmuneDiseases from "./Pages/Health/AutoimmuneDiseases.jsx";
import Fitness from "./Pages/Wellness/Fitness.jsx";
import Nutrition from "./Pages/Wellness/Nutrition.jsx";
import Recipe from "./Pages/Wellness/Recipe.jsx";
import Sleep from "./Pages/Wellness/Sleep.jsx";
import Post from "./Pages/Post.jsx";

// import Login from "./Login.jsx"; --- IGNORE ---
// import Register from "./Register.jsx"; --- IGNORE ---
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Main pages */}
          <Route index element={<LandingPage />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* 🩺 Health topic routes */}
          <Route path="health/heart-disease" element={<HeartDisease />} />
          <Route path="health/breast-cancer" element={<BreastCancer />} />
          <Route path="health/diabetes" element={<Diabetes />} />
          <Route path="health/osteoporosis" element={<Osteoporosis />} />
          <Route path="health/endometriosis" element={<Endometriosis />} />
          <Route path="health/maternal-health" element={<MaternalHealth />} />
          <Route path="health/mental-health" element={<MentalHealth />} />
          <Route path="health/menopause" element={<Menopause />} />
          <Route
            path="health/autoimmune-diseases"
            element={<AutoimmuneDiseases />}
          />

          {/* 🌿 Wellness topic routes */}
          <Route path="wellness/fitness" element={<Fitness />} />
          <Route path="wellness/nutrition" element={<Nutrition />} />
          <Route path="wellness/recipe" element={<Recipe />} />
          <Route path="wellness/sleep" element={<Sleep />} />
          <Route path="/:slug" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
