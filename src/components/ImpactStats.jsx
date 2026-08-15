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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 lg:px-12">
      <motion.div
        className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#edf7ee] to-[#dff5ea] p-6 md:p-10 lg:p-12 shadow-[0_12px_40px_rgba(18,57,40,0.08)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-10">
          <span className="inline-flex w-fit items-center rounded-full border border-[#2e7d5a]/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
            Our impact
          </span>
          <h2 className="mt-4 text-3xl font-medium text-[#123928] md:text-4xl">
            A stronger community starts with care.
          </h2>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {impactStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(18,57,40,0.06)] ring-1 ring-white/50 transition hover:shadow-[0_12px_40px_rgba(18,57,40,0.12)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition group-hover:opacity-5" />

                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} shadow-[0_6px_16px_rgba(18,57,40,0.12)]`}
                >
                  <Icon className="text-xl text-white" />
                </div>

                <div className="text-4xl font-bold text-[#123928]">
                  {stat.value}
                </div>
                <p className="mt-3 text-sm font-medium text-[#4a655a]">
                  {stat.label}
                </p>

                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ImpactStats;
