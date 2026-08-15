import React from "react";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import ImpactStats from "../components/ImpactStats";
import OutreachSection from "../components/OutreachSection";
import FoundingStory from "../components/FoundingStory";
import WhyWinCare from "../components/WhyWinCare";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <main className="pt-28">
      <Hero />
      <FoundingStory />
      <ImpactStats />
      <OutreachSection />
      <WhyWinCare />
      <CallToAction />
    </main>
  );
};

export default Home;
