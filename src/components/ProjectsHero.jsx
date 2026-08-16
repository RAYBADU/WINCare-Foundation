import React from "react";
import { motion } from "framer-motion";

const ProjectsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#123928]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#2e7d5a]/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#5baa8a]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8fd1b1]">
            Our projects
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] text-white md:text-6xl">
            Where compassion{" "}
            <span className="text-[#8fd1b1]">becomes action.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Explore the initiatives we've undertaken to bring healthcare,
            dignity, and practical support closer to the communities we serve.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHero;