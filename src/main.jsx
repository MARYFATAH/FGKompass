import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./LandingPage.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
// import Login from "./Login.jsx"; --- IGNORE ---
// import Register from "./Register.jsx"; --- IGNORE ---
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/wellness" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
