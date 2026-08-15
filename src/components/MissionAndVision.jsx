import React from "react";
import { FaHandsHelping, FaHeart } from "react-icons/fa";

const MissionAndVision = () => {
  return (
    <section
      id="mission"
      className="mx-auto max-w-6xl px-4 py-16 md:px-8 lg:px-12"
    >
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
          Mission & Vision
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[#123928] md:text-4xl">
          Building stronger communities through healthier lives.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[24px] border border-[#dfeadf] bg-gradient-to-r from-[#5baa8a] to-[#4a9577] p-8 text-white shadow-[0_16px_40px_rgba(91,170,138,0.18)]">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl text-[#f0fdf6]">
            <FaHeart />
          </div>
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="mt-4 text-base leading-7 text-[#f0fdf6]">
            To improve access to quality healthcare, health information, and
            community support so that individuals and families can live
            healthier, safer, and more empowered lives.
          </p>
        </div>

        <div className="rounded-[24px] border border-[#dfeadf] bg-white p-8 shadow-[0_16px_40px_rgba(18,57,40,0.06)]">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#edf7ee] text-2xl text-[#2e7d5a]">
            <FaHandsHelping />
          </div>
          <h3 className="text-2xl font-semibold text-[#123928]">Our Vision</h3>
          <p className="mt-4 text-base leading-7 text-[#4a655a]">
            To build healthier, more resilient communities where every person
            has access to essential care, informed choices, and the support
            needed to thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
