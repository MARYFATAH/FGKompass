import { Outlet } from "react-router-dom";
import Nav from "./components/Nav.jsx"; // your navbar
import Footer from "./components/Footer.jsx"; // optional

export default function App() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Outlet /> {/* 👈 This is where the nested pages render */}
      </main>
      <Footer />
    </>
  );
}
