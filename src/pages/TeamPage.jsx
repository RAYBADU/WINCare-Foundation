import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaUsers,
  FaHandsHelping,
  FaStethoscope,
  FaArrowRight,
} from "react-icons/fa";

import teamInfo from "../data/teamInfo";

const TeamPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbf9]">

      {/* =========================
          HERO
      ========================== */}
      <section className="relative px-6 pb-20 pt-32 md:px-12 md:pb-28 md:pt-40 lg:px-20">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#5baa8a]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#2e7d5a]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#4a9577]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5baa8a]/10">
                <FaUsers />
              </span>

              Our Team
            </div>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-[#173b2d] sm:text-6xl md:text-6xl lg:text-7xl">
              The people
              <span className="block text-[#5baa8a]">
                behind the care.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              Meet the people who bring compassion, expertise, and purpose
              together to make the WINCARE mission possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 90 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 h-1 rounded-full bg-[#5baa8a]"
          />
        </div>
      </section>

      {/* =========================
          INTRODUCTION
      ========================== */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="grid overflow-hidden rounded-[2.5rem] bg-[#173b2d] md:grid-cols-2"
          >
            <div className="p-8 md:p-14 lg:p-16">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#9ed8bd]">
                <FaHeart />
              </div>

              <h2 className="mt-8 max-w-xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                Different gifts.
                <span className="block text-[#9ed8bd]">
                  One purpose.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-white/70">
                WINCARE brings together healthcare professionals, coordinators,
                volunteers, and community-minded individuals who share a
                commitment to healthier communities.
              </p>
            </div>

            <div className="relative min-h-[320px] overflow-hidden">
              {teamInfo.length > 0 && (
                <img
                  src={teamInfo[0].image}
                  alt={teamInfo[0].name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-[#173b2d] via-[#173b2d]/30 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9ed8bd]">
                  United by purpose
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          TEAM MEMBERS
      ========================== */}
      <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5baa8a]">
              The people
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#173b2d] md:text-5xl">
              Meet our team.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
              Every role matters. Every contribution helps us reach more
              people with quality care.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamInfo.map((member, index) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.06, 0.2),
                }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#edf6ef]">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#173b2d]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-3 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <FaHeart className="text-xs" />
                  </div>
                </div>

                <div className="mt-4 px-1">
                  <h3 className="text-lg font-semibold text-[#173b2d]">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#5baa8a]">
                    {member.role}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          HOW WE WORK
      ========================== */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5baa8a]">
                How we work
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#173b2d] md:text-5xl">
                Many hands make
                <span className="block text-[#5baa8a]">
                  meaningful impact.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-gray-600">
                Our work depends on people with different skills working
                together. From clinical care to community engagement, every
                part of the team helps move the mission forward.
              </p>
            </motion.div>

            <div className="space-y-4">

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-[#5baa8a]">
                  <FaStethoscope />
                </div>

                <div>
                  <h3 className="font-semibold text-[#173b2d]">
                    Healthcare professionals
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Bringing quality and compassionate care to communities.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-[#5baa8a]">
                  <FaUsers />
                </div>

                <div>
                  <h3 className="font-semibold text-[#173b2d]">
                    Program & community teams
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Connecting our work with the people we serve.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-[#5baa8a]">
                  <FaHandsHelping />
                </div>

                <div>
                  <h3 className="font-semibold text-[#173b2d]">
                    Volunteers & partners
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Extending our reach through service and collaboration.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          VALUES
      ========================== */}
      <section className="bg-[#edf6ef] px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a9577]">
              What guides us
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#173b2d] md:text-5xl">
              We serve with intention.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FaHeart,
                title: "Compassion",
                text: "We meet people with empathy, dignity, and genuine care.",
              },
              {
                icon: FaHandsHelping,
                title: "Service",
                text: "We use our skills and resources to make a meaningful difference.",
              },
              {
                icon: FaUsers,
                title: "Community",
                text: "We listen, collaborate, and build solutions alongside the people we serve.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="rounded-[2rem] bg-white p-8 md:p-10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf6ef] text-[#5baa8a]">
                    <Icon />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-[#173b2d]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#173b2d] px-8 py-14 text-center md:px-16 md:py-20"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#9ed8bd]">
            <FaHandsHelping />
          </div>

          <h2 className="mx-auto mt-7 max-w-2xl text-3xl font-semibold text-white md:text-5xl">
            There is a place for you in the work.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/70">
            Whether you have time, skills, resources, or simply a heart to
            serve, you can help us build healthier communities.
          </p>

          <button
            type="button"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#5baa8a] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#4a9679]"
          >
            Get Involved
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </section>

    </main>
  );
};

export default TeamPage;