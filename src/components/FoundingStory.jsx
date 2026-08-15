import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaHeart, FaUsers } from "react-icons/fa";

const storyHighlights = [
  {
    icon: FaHeart,
    title: "Compassion first",
    text: "We believe every person deserves dignity, care, and a chance to thrive.",
  },
  {
    icon: FaUsers,
    title: "Community-led support",
    text: "Local relationships help us respond with empathy and long-term practical action.",
  },
  {
    icon: FaHandsHelping,
    title: "Hope in action",
    text: "From outreach to care, we turn generosity into real support for families and communities.",
  },
];

const FoundingStory = () => {
  const highlightVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 lg:px-12">
      <motion.div
        className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#123928] via-[#1c4d43] to-[#0e2d2b] text-white shadow-[0_28px_60px_rgba(18,57,40,0.18)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-10 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#d7f5e6]">
              Our story
            </span>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white md:text-4xl">
              Transforming Lives Through Accessible Healthcare{" "}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#dfeee3]">
              WINCARE is a compassionate health ministry committed to
              transforming lives by providing free and accessible healthcare to
              underprivileged communities. As the health arm of Word Impact
              Nation, a youth focused non-denominational ministry, we aim to
              make quality healthcare a universal right irrespective of
              socio-economic status.
            </p>

            <div className="mt-8 space-y-4">
              {storyHighlights.map(({ icon: Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  custom={i}
                  variants={highlightVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#dff5ea] text-[#123928] shadow-inner">
                    <Icon className="text-lg" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#dfeee3]">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute inset-x-10 top-10 h-40 rounded-full bg-[#7ec9a6]/25 blur-3xl" />

            <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-[#edf7ee] p-5 text-[#123928] shadow-[0_28px_60px_rgba(0,0,0,0.18)]">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-[#d8f1e4] to-[#f4faf6] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
                  Why we started
                </p>

                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#dfeadf]">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#4a655a]">
                      2020
                    </p>
                    <p className="mt-2 text-xl font-semibold text-[#123928]">
                      A small team, one clear mission.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-[#123928] p-4 text-white">
                      <p className="text-3xl font-bold">15k+</p>
                      <p className="mt-1 text-sm text-[#cfe6d9]">
                        People reached
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#dfeadf]">
                      <p className="text-3xl font-bold text-[#123928]">42</p>
                      <p className="mt-1 text-sm text-[#4a655a]">
                        Community programs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-[#dfeadf] bg-white p-4">
                  <p className="text-sm leading-6 text-[#4a655a]">
                    We hold fast to the encouragement of “Let us not become
                    weary in doing good… as we have opportunity, let us do good
                    to all people” (Galatians 6:9–10).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FoundingStory;
