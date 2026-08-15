import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaHeart, FaShieldAlt, FaUsers } from "react-icons/fa";

const reasons = [
  {
    icon: FaHeart,
    title: "Compassion-driven",
    text: "Every action rooted in genuine care for people and communities.",
    color: "from-[#5baa8a] to-[#4a9577]",
    lightBg: "from-[#f0fdf6] to-[#eef9f5]",
  },
  {
    icon: FaUsers,
    title: "Community-focused",
    text: "Built on relationships and trust with the people we serve.",
    color: "from-[#2e7d5a] to-[#1f5240]",
    lightBg: "from-[#ecf7f1] to-[#e8f4ed]",
  },
  {
    icon: FaHandsHelping,
    title: "Action-oriented",
    text: "Turning commitment into real, measurable impact and support.",
    color: "from-[#4a9577] to-[#3a7a64]",
    lightBg: "from-[#f1faf7] to-[#edf8f5]",
  },
  {
    icon: FaShieldAlt,
    title: "Trustworthy",
    text: "Transparent, accountable, and dedicated to serving with integrity.",
    color: "from-[#5baa8a] to-[#4a9577]",
    lightBg: "from-[#f0fdf6] to-[#eef9f5]",
  },
];

const WhyWinCare = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6 },
    }),
  };

  return (
    <section
      id="why-wincare"
      className="relative overflow-hidden bg-gradient-to-b from-[#f7faf7] via-white to-[#f9fcfb] py-20 md:py-24 lg:py-28"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 h-96 w-96 bg-[#a9d1b6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 bg-[#5baa8a]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <motion.div
          className="mb-16 text-center md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-flex items-center rounded-full border border-[#2e7d5a]/20 bg-[#edf7ee] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
            ✨ Why WINCare
          </span>

          <h2 className="mt-6 text-4xl font-medium text-[#123928] md:text-5xl lg:text-5xl">
            We believe every community deserves <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#2e7d5a] to-[#5baa8a] bg-clip-text text-transparent">
              dignity and opportunity.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#4a655a] md:text-lg">
            WINCare brings together volunteers, donors, and local partners to
            respond to real needs with practical action and heartfelt support.
            Our work is guided by compassion, accountability, and a deep
            commitment to sustainable change.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                custom={index}
                variants={cardVariants}
                className="group relative"
              >

                <div className="absolute -inset-0.5 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl blur" />

                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${reason.lightBg} p-6 shadow-[0_10px_30px_rgba(18,57,40,0.08)] ring-1 ring-white/50 transition-all duration-300 group-hover:shadow-[0_20px_60px_rgba(18,57,40,0.15)]`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${reason.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="mb-5 inline-block">
                    <div
                      className={`relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${reason.color} shadow-[0_12px_32px_rgba(18,57,40,0.2)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                    >
                      <Icon className="text-2xl text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#123928] transition-colors duration-300">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#4a655a] transition-colors duration-300">
                    {reason.text}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2e7d5a] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>Learn more</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWinCare;
