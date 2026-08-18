import React from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

const TeamHero = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 md:px-12 md:pb-32 md:pt-40 lg:px-20">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#5baa8a]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#2e7d5a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-4xl"
        >

          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#4a9577]">

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5baa8a]/10">
              <FaUsers className="text-sm" />
            </span>

            our team

          </div>


          {/* Heading */}
          <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#173b2d] sm:text-6xl md:text-5xl lg:text-7xl">

            Leadership

            <span className="block text-[#5baa8a]">
              with purpose.
            </span>

          </h1>


          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            Our Board of Directors provides the leadership, oversight, and
            strategic direction that help WINCARE remain focused on its
            mission and committed to healthier communities.
          </p>


          {/* Accent */}
          <div className="mt-9 h-1 w-16 rounded-full bg-[#5baa8a]" />

        </motion.div>

      </div>
    </section>
  );
};

export default TeamHero;