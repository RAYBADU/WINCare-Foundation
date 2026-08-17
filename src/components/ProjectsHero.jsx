import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImage from "../assets/project-page-images/photo_2026-08-17_10-23-08.jpg";

const ProjectsHero = () => {
  return (
    <section className="overflow-hidden bg-[#edf7ee]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:grid-cols-2 lg:px-12">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#d8eee3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2e7d5a]">
            <FaHeart className="text-[10px]" />
            Our projects
          </span>

          <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#123928] sm:text-5xl md:text-6xl">
            Turning care into{" "}
            <span className="text-[#4a9577]">real impact.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#4a655a] md:text-lg">
            From healthcare outreaches to community initiatives, discover the
            work we're doing to create healthier and stronger communities.
          </p>

          <div className="mt-8">
            <Link
              to="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[#2e7d5a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2e7d5a]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#236548]"
            >
              Explore our work
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Small supporting text */}
          <div className="mt-8 flex items-center gap-3 text-sm text-[#5c756a]">
            <span className="h-px w-8 bg-[#5baa8a]" />
            Making a difference, one community at a time.
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          {/* Decorative shape */}
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#a9e8d4] md:h-32 md:w-32" />

          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(18,57,40,0.12)]">
            <img
              src={heroImage}
              alt="Healthcare professionals providing community care"
              className="h-[380px] w-full object-cover sm:h-[450px]"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#123928]/40 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <motion.div
            className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_35px_rgba(18,57,40,0.12)]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
            }}
          >
            <p className="text-2xl font-bold text-[#123928]">8k+</p>
            <p className="text-xs text-[#5c756a]">People supported</p>
          </motion.div>

          {/* Decorative green circle */}
          <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#5baa8a]/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHero;
