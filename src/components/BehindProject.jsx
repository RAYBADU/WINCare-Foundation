import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Planning",
    text: "Understanding the needs of the community.",
  },
  {
    number: "02",
    title: "Preparing",
    text: "Mobilising people, resources and supplies.",
  },
  {
    number: "03",
    title: "Serving",
    text: "Taking healthcare and support into the community.",
  },
  {
    number: "04",
    title: "Connecting",
    text: "Creating pathways for continued care and support.",
  },
];

const BehindProject = () => {
  return (
    <section className="bg-[#123928] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 lg:px-12">
        {/* Section Intro */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8fd1b1]">
            Behind the project
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            It takes a community to serve a community.
          </h2>

          <p className="mt-5 leading-7 text-white/60">
            Every outreach involves people working together long before the
            first beneficiary arrives.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="rounded-[24px] border border-white/10 bg-white/5 p-7 transition-colors duration-300 hover:bg-white/10"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
                ease: "easeOut",
              }}
            >
              <span className="text-sm font-semibold text-[#8fd1b1]">
                {step.number}
              </span>

              <h3 className="mt-10 text-xl font-semibold">{step.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindProject;