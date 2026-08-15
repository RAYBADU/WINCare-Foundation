import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaStethoscope,
  FaAmbulance,
  FaArrowRight,
} from "react-icons/fa";

import outreach1 from "../assets/outreach-images/photo_2026-08-15_00-36-10.jpg";
import outreach2 from "../assets/outreach-images/photo_2026-08-15_00-18-14.jpg";
import outreach3 from "../assets/outreach-images/photo_2026-08-15_00-52-50.jpg";

const outreachPrograms = [
  {
    icon: FaGraduationCap,
    title: "Her Cycle Care",
    description:
      "Providing school supplies, mentoring, and practical assistance to students in underserved communities.",
    color: "from-[#5baa8a] to-[#4a9577]",
    image: outreach1,
  },
  {
    icon: FaStethoscope,
    title: "Health Outreach",
    description:
      "Running health campaigns and wellness checks to support families with accessible healthcare resources.",
    color: "from-[#2e7d5a] to-[#1f5240]",
    image: outreach2,
  },
  {
    icon: FaAmbulance,
    title: "Emergency Relief",
    description:
      "Responding quickly with food, basic supplies, and compassionate aid during times of urgent need.",
    color: "from-[#4a9577] to-[#3a7a64]",
    image: outreach3,
  },
];

const OutreachSection = () => {
  return (
    <section
      id="outreaches"
      className="mx-auto max-w-6xl px-4 py-16 md:px-8 lg:px-12"
    >
      {/* Heading */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="inline-flex w-fit items-center rounded-full border border-[#2e7d5a]/20 bg-[#edf7ee] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
          Our outreach
        </span>

        <h2 className="mt-4 text-3xl font-medium text-[#123928] md:text-4xl">
          Programs in action around the community.
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.15 }}
      >
        {outreachPrograms.map((program) => {
          const Icon = program.icon;

          return (
            <div
              key={program.title}
              className="group relative overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(18,57,40,0.08)] ring-1 ring-white/20 transition-transform duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_18px_45px_rgba(18,57,40,0.15)]"
            >
              {/* Image */}
              <img
                src={program.image}
                alt={program.title}
                loading="lazy"
                decoding="async"
                className="h-80 w-full object-cover transition-transform duration-500 md:group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#123928]/95 via-[#123928]/45 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">

                {/* Icon */}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${program.color} shadow-[0_6px_18px_rgba(18,57,40,0.15)]`}
                >
                  <Icon className="text-lg text-white" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-medium text-white">
                    {program.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#dfeee3]">
                    {program.description}
                  </p>

                  {/* Learn More */}
                  <div className="mt-4 inline-flex items-center text-sm font-semibold text-[#a9d1b6] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                    Learn more

                    <FaArrowRight className="ml-2 h-3 w-3 transition-transform duration-300 md:group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default OutreachSection;