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
import MissionAndVision from "../components/MissionAndVision";
import CoreValues from "../components/CoreValues";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";
import ImpactStats from "../components/ImpactStats";
import WhereWeWork from "../components/WhereWeWork";
import AboutWinCare from "../components/AboutWinCare";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-[#f7faf7] text-[#123928]">
      <main className="pt-20">
        <AboutHeroSection />
        <AboutWinCare />
        <WhereWeWork />
        <ImpactStats />
        <MissionAndVision />
        <CoreValues />
        <FAQ />
        <Newsletter />
      </main>
    </div>
  );
};

export default WhoWeAre;
