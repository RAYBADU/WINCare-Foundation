import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Donation from "./pages/Donation";
import Gallery from "./pages/Gallery";
import TeamPage from "./pages/TeamPage";

const App = () => {
  return (
    <div className="min-h-screen bg-[#f7faf7] text-[#123928]">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
