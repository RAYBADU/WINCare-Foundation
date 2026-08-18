import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaCheck } from "react-icons/fa";

import teamInfo from "../data/teamInfo";

const TeamIntroduction = () => {
  const featuredMember = teamInfo[0];

  return (
    <section className="px-6 pb-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="overflow-hidden rounded-[2rem] bg-[#173b2d]"
        >
          <div className="grid md:grid-cols-[1.05fr_0.95fr]">
            {/* Text */}
            <div className="flex flex-col justify-center p-8 md:p-14 lg:p-16">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#9ed8bd]">
                <FaShieldAlt />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#9ed8bd]">
                Governance & Leadership
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                Guided by experience.
                <span className="block text-[#9ed8bd]">Driven by impact.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-white/70">
                The Board of Directors provides strategic oversight and guidance
                to help WINCARE make responsible decisions, strengthen its
                programmes, and pursue sustainable impact.
              </p>

              {/* Highlights */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[#9ed8bd]">
                    <FaCheck className="text-[10px]" />
                  </span>
                  Strategic oversight
                </div>

                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[#9ed8bd]">
                    <FaCheck className="text-[10px]" />
                  </span>
                  Responsible governance
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative min-h-[360px] overflow-hidden md:min-h-[500px]">
              {featuredMember && (
                <img
                  src={featuredMember.image}
                  alt="WINCARE leadership"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-[#173b2d] via-[#173b2d]/20 to-transparent md:from-[#173b2d]/80 md:via-transparent" />

              <div className="absolute bottom-8 left-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b5e0ca]">
                  Strategic leadership
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamIntroduction;
