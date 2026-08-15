import React from "react";
import { FaArrowRight, FaHeart, FaUsers, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

import heroImage1 from "../assets/hero-images/photo_2026-08-15_00-09-34.jpg";
import heroImage2 from "../assets/hero-images/photo_2026-08-15_00-11-24.jpg";
import heroImage3 from "../assets/hero-images/photo_2026-08-15_00-17-26.jpg";



const outreachImages = [
  {
    src: heroImage1,
    alt: "A community outreach program in action with volunteers.",
  },
  {
    src: heroImage2,
    alt: "Volunteers supporting a local outreach program.",
  },
  {
    src: heroImage3,
    alt: "People volunteering together during a social outreach event.",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-8 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT CONTENT */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dfeadf] bg-[#edf7ee] px-3 py-1.5 text-sm font-medium text-[#1f5f43]"
            >
              <FaHeart className="text-[#2e7d5a]" />
              Helping Communities Thrive
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl font-semibold leading-tight text-[#123928] sm:text-5xl lg:text-6xl">
              Nurturing Health, Impacting Lives.
            </h1>

            {/* Description */}
            <p className="mt-5 text-base leading-7 text-[#4a655a] sm:text-lg">
              We support families, uplift vulnerable communities, and mobilize
              volunteers to create lasting impact through compassion, care,
              and action.
            </p>

            {/* Buttons */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5baa8a] to-[#4a9577] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(91,170,138,0.25)] transition-transform duration-300 active:scale-95 md:hover:scale-105 md:hover:shadow-[0_12px_32px_rgba(91,170,138,0.35)]"
              >
                Donate today

                <FaArrowRight className="text-xs transition-transform duration-300 md:group-hover:translate-x-1" />
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#5baa8a] bg-white px-6 py-3.5 text-sm font-semibold text-[#2e7d5a] shadow-[0_4px_12px_rgba(18,57,40,0.06)] transition-colors duration-300 active:scale-95 md:hover:border-[#4a9577] md:hover:bg-[#f0fdf6] md:hover:shadow-[0_8px_20px_rgba(91,170,138,0.12)]"
              >
                Explore outreach
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#325c4f]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4f3ea] text-[#1d4d3a]">
                  <FaUsers />
                </span>

                <span>
                  <strong className="block text-base text-[#123928]">
                    3.5k+
                  </strong>
                  volunteers
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4f3ea] text-[#1d4d3a]">
                  <FaHandshake />
                </span>

                <span>
                  <strong className="block text-base text-[#123928]">
                    120+
                  </strong>
                  outreach programs
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Decorative circles */}
            <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-[#d9efe0]/60 blur-none md:blur-2xl" />

            <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-[#dfeaf7]/60 blur-none md:blur-2xl" />

            <div className="relative grid gap-4 sm:grid-cols-2">

              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="overflow-hidden rounded-[2rem] border border-[#e5efea] bg-white p-3 shadow-[0_12px_30px_rgba(29,77,58,0.08)] md:shadow-[0_24px_60px_rgba(29,77,58,0.12)] sm:col-span-2"
              >
                <img
                  src={outreachImages[0].src}
                  alt={outreachImages[0].alt}
                  className="h-72 w-full rounded-[1.5rem] object-cover sm:h-80"
                  decoding="async"
                />
              </motion.div>

              {/* Image 2 */}
              <div className="overflow-hidden rounded-[1.75rem] border border-[#e5efea] bg-white p-2 shadow-[0_10px_25px_rgba(29,77,58,0.06)] md:shadow-[0_20px_40px_rgba(29,77,58,0.08)]">
                <img
                  src={outreachImages[1].src}
                  alt={outreachImages[1].alt}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full rounded-[1.25rem] object-cover"
                />
              </div>

              {/* Image 3 */}
              <div className="overflow-hidden rounded-[1.75rem] border border-[#e5efea] bg-white p-2 shadow-[0_10px_25px_rgba(29,77,58,0.06)] md:shadow-[0_20px_40px_rgba(29,77,58,0.08)]">
                <img
                  src={outreachImages[2].src}
                  alt={outreachImages[2].alt}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full rounded-[1.25rem] object-cover"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;