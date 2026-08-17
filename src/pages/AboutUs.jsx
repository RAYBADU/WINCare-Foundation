import React from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardCheck,
  FaHandsHelping,
  FaHeart,
  FaMedkit,
  FaShieldAlt,
  FaStethoscope,
  FaUsers,
} from "react-icons/fa";

import AboutHeroSection from "../components/AboutHeroSection";
import WhoWeAre from "../components/WhoWeAre";
import MissionAndVision from "../components/MissionAndVision";
import CoreValues from "../components/CoreValues";
import Team from "../components/Team";
import Newsletter from "../components/Newsletter";


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#f7faf7] text-[#123928]">
      <main className="pt-20">
        <AboutHeroSection />
        <WhoWeAre />
        <MissionAndVision />
        <CoreValues />
        <Team/>
        <Newsletter/>

       

      </main>
    </div>
  );
};

export default AboutUs;
