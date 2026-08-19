import React from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaGraduationCap,
  FaVenus,
  FaHandsHelping,
  FaGlobeAfrica,
  FaArrowRight,
} from "react-icons/fa";

const globalGoals = [
  {
    number: "03",
    title: "Good Health & Well-being",
    description:
      "Promoting access to healthcare, preventive services, health education, and healthier communities.",
    icon: FaHeartbeat,
  },
  {
    number: "04",
    title: "Quality Education",
    description:
      "Equipping young people and communities with knowledge that helps them make informed health decisions.",
    icon: FaGraduationCap,
  },
  {
    number: "05",
    title: "Gender Equality",
    description:
      "Supporting girls and women through menstrual health education, dignity, empowerment, and access to essential resources.",
    icon: FaVenus,
  },
  {
    number: "10",
    title: "Reduced Inequalities",
    description:
      "Working to reduce barriers to healthcare and ensuring vulnerable communities are not left behind.",
    icon: FaHandsHelping,
  },
  {
    number: "17",
    title: "Partnerships for the Goals",
    description:
      "Building meaningful partnerships that strengthen community health initiatives and expand our impact.",
    icon: FaGlobeAfrica,
  },
];

const GlobalGoals = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2e7d5a]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
                Global Goals
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-[#123928] sm:text-5xl lg:text-6xl">
              Local action,{" "}
              <span className="text-[#4a9577] block">global impact.</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="max-w-xl lg:ml-auto"
          >
            <p className="text-lg leading-8 text-gray-600">
              Our work contributes to the United Nations Sustainable
              Development Goals by addressing health, education, equality,
              and access within the communities we serve.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-500">
              Through practical community initiatives, WINCARE contributes to
              broader efforts to create healthier, more inclusive, and
              sustainable communities.
            </p>
          </motion.div>
        </div>

        {/* ================= INTRODUCTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className="mt-16 border-y border-gray-200 py-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            {/* Left */}
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#edf6f1] text-xl text-[#2e7d5a]">
                <FaGlobeAfrica />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Supporting the Sustainable Development Goals
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Turning community-focused action into lasting change.
                </p>
              </div>
            </div>

            {/* Right */}
            <span className="text-sm font-medium text-[#2e7d5a]">
              United Nations SDGs
            </span>
          </div>
        </motion.div>

        {/* ================= GOALS LIST ================= */}
        <div className="mt-12">

          {globalGoals.map((goal, index) => {
            const Icon = goal.icon;

            return (
              <motion.div
                key={goal.number}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="group grid gap-6 border-b border-gray-200 py-8 md:grid-cols-[80px_60px_1fr_auto] md:items-center"
              >

                {/* Goal Number */}
                <span className="text-3xl font-bold text-[#2e7d5a]/30 transition-colors duration-300 group-hover:text-[#2e7d5a]">
                  {goal.number}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf6f1] text-lg text-[#2e7d5a]">
                  <Icon />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {goal.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                    {goal.description}
                  </p>
                </div>

                {/* Arrow */}
                <FaArrowRight className="hidden text-sm text-[#2e7d5a] transition-transform duration-300 group-hover:translate-x-1 md:block" />
              </motion.div>
            );
          })}
        </div>

        {/* ================= CLOSING STATEMENT ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-[#1f5f43] px-7 py-12 sm:px-12 lg:px-16 lg:py-14"
        >
          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              Our Commitment
            </p>

            <h3 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Building healthier communities is part of building a better
              world.
            </h3>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">
              By connecting our local programs to global goals, WINCARE remains
              committed to creating meaningful and sustainable impact that
              reaches beyond individual projects.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GlobalGoals;