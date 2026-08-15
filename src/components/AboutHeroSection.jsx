import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/about-page-images/photo_2026-08-15_00-41-11.jpg";

const AboutHeroSection = () => {
  return (
    <section
      className="
        relative min-h-[90vh] w-full overflow-hidden bg-[#081d15]
        pt-24 md:min-h-screen md:pt-28
      "
    >
      {/* =========================================================
          BACKGROUND IMAGE
          ---------------------------------------------------------
          Using an absolutely positioned image instead of
          background-attachment: fixed improves mobile scrolling
          performance.
      ========================================================== */}
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="
          absolute inset-0 h-full w-full
          object-cover object-center
        "
      />

      {/* =========================================================
          GRADIENT OVERLAY
          ---------------------------------------------------------
          Keeps the text readable while allowing the image to
          remain visible.
      ========================================================== */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#0a2319]/90
          via-[#0d3a23]/70
          to-[#0d3a23]/20
        "
      />

      {/* =========================================================
          CONTENT
          ---------------------------------------------------------
          One main entrance animation keeps the section smooth
          without creating too many simultaneous animations.
      ========================================================== */}
      <div className="relative z-10 flex min-h-[90vh] items-center md:min-h-screen">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8 lg:px-12">

          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* =====================================================
                BADGE
            ====================================================== */}
            <div
              className="
                mb-6 inline-flex items-center gap-2
                rounded-full
                border border-white/20
                bg-white/10
                px-4 py-2
                text-sm font-semibold
                text-[#d4ebe3]
                backdrop-blur-sm
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#5baa8a]" />

              Our Story
            </div>

            {/* =====================================================
                HEADING
            ====================================================== */}
            <h1
              className="
                text-5xl font-bold leading-tight text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Transforming <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[#5baa8a]
                  to-[#7dc9a3]
                  bg-clip-text
                  text-transparent
                "
              >
                Community Health
              </span>
            </h1>

            {/* =====================================================
                DESCRIPTION
            ====================================================== */}
            <p
              className="
                mt-6
                max-w-xl
                text-base leading-7
                text-[#e8f5f2]
                sm:text-lg
              "
            >
              We're committed to improving community health through
              accessible healthcare, trustworthy education, and
              compassionate outreach that empowers lives.
            </p>

            {/* =====================================================
                CALL TO ACTIONS
            ====================================================== */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* Primary CTA */}
              <a
                href="#"
                className="
                  group inline-flex items-center gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#5baa8a]
                  to-[#4a9577]
                  px-7 py-3.5
                  font-semibold text-white
                  shadow-[0_8px_24px_rgba(91,170,138,0.2)]
                  transition-transform duration-300
                  active:scale-95
                  md:hover:scale-105
                  md:hover:shadow-[0_12px_32px_rgba(91,170,138,0.3)]
                "
              >
                Learn Our Mission

                <svg
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    md:group-hover:translate-x-1
                  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* Secondary CTA */}
              <a
                href="#"
                className="
                  inline-flex items-center
                  rounded-full
                  border border-white/40
                  bg-white/5
                  px-7 py-3.5
                  font-semibold text-white
                  transition-colors duration-300
                  active:scale-95
                  md:hover:border-white/70
                  md:hover:bg-white/10
                "
              >
                Explore Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
          ---------------------------------------------------------
          A CSS animation is used instead of Framer Motion's
          infinite animation. This keeps the effect lightweight.
          
          It is hidden on small screens to reduce visual clutter.
      ========================================================== */}
      <div
        className="
          absolute bottom-7 left-1/2 z-20
          hidden -translate-x-1/2
          flex-col items-center gap-2
          md:flex
        "
      >
        <span className="text-xs font-medium text-white/60">
          Scroll to explore
        </span>

        <div className="animate-bounce">
          <svg
            className="h-5 w-5 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;