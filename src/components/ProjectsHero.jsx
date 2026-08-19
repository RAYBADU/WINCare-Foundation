
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImage from "../assets/project-page-images/photo_2026-08-17_10-23-08.jpg";

// Animated number counter
const AnimatedCounter = ({ target = 8000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    const animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [target]);

  return <>{count >= target ? "8400+" : `${count.toLocaleString()}+`}</>;
};

const ProjectsHero = () => {
  return (
    <section className="overflow-hidden bg-[#edf7ee]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:grid-cols-2 lg:px-12">

        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {/* Label */}
          <span className="inline-flex items-center gap-2 rounded-full bg-[#d8eee3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2e7d5a]">
            <FaHeart className="text-[10px]" />
            Our Projects
          </span>

          {/* Heading */}
          <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#123928] sm:text-5xl md:text-6xl">
            Turning care into{" "}
            <span className="text-[#4a9577]">
              real impact.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-7 text-[#4a655a] md:text-lg">
            From healthcare outreaches to community initiatives, discover the
            work we're doing to create healthier and stronger communities.
          </p>

          

          {/* Supporting text */}
          <div className="mt-8 flex items-center gap-3 text-sm text-[#5c756a]">
            <span className="h-px w-8 bg-[#5baa8a]" />

            <span>
              Making a difference, one community at a time.
            </span>
          </div>
        </motion.div>

        {/* ================= IMAGE ================= */}
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

          {/* Image */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(18,57,40,0.12)]">
            <img
              src={heroImage}
              alt="Healthcare professionals providing community care"
              className="h-[380px] w-full object-cover sm:h-[450px]"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#123928]/40 via-transparent to-transparent" />
          </div>

          {/* ================= FLOATING COUNTER ================= */}
          <motion.div
            className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_35px_rgba(18,57,40,0.12)]"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.7,
            }}
          >
            <p className="text-2xl font-bold text-[#123928]">
              <AnimatedCounter target={8000} />
            </p>

            <p className="text-xs text-[#5c756a]">
              People supported
            </p>
          </motion.div>

          {/* Decorative green circle */}
          <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#5baa8a]/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHero;

