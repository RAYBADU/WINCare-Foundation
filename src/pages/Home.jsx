import React from "react";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";
import GlobalGoals from "../components/GlobalGoals";
const Home = () => {
  return (
    <main className="pt-28">
      <Hero />
      <GlobalGoals />
      <CallToAction />
    </main>
  );
};

export default Home;
