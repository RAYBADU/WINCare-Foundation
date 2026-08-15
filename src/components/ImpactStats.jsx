import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaClipboardList, FaStar } from "react-icons/fa";

const impactStats = [
  {
    icon: FaUsers,
    value: "15k+",
    label: "People supported",
    color: "from-[#5baa8a] to-[#4a9577]",
  },
  {
    icon: FaClipboardList,
    value: "42",
    label: "Volunteer-led projects",
    color: "from-[#2e7d5a] to-[#1f5240]",
  },
  {
    icon: FaStar,
    value: "98%",
    label: "Community satisfaction",
    color: "from-[#4a9577] to-[#3a7a64]",
  },
];

const ImpactStats = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 lg:px-12">
      <motion.div
        className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#edf7ee] to-[#dff5ea] p-6 shadow-[0_10px_30px_rgba(18,57,40,0.06)] md:p-10 md:shadow-[0_12px_40px_rgba(18,57,40,0.08)] lg:p-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <div className="mb-10">
          <span className="inline-flex w-fit items-center rounded-full border border-[#2e7d5a]/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
            Our impact
          </span>

          <h2 className="mt-4 text-3xl font-medium text-[#123928] md:text-4xl">
            A stronger community starts with care.
          </h2>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-3">
          {impactStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_6px_20px_rgba(18,57,40,0.05)] ring-1 ring-white/50 transition-transform duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_12px_32px_rgba(18,57,40,0.1)]"
              >
                {/* Icon */}
                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} shadow-[0_5px_14px_rgba(18,57,40,0.1)]`}
                >
                  <Icon className="text-xl text-white" />
                </div>

                {/* Number */}
                <div className="text-4xl font-bold text-[#123928]">
                  {stat.value}
                </div>

                {/* Label */}
                <p className="mt-3 text-sm font-medium text-[#4a655a]">
                  {stat.label}
                </p>

                {/* Bottom accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#5baa8a] to-[#4a9577] opacity-0 transition-opacity duration-300 md:group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ImpactStats;