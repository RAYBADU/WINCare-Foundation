import React, { useState } from "react";
import { FaArrowRight, FaHeart, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const amounts = [50, 100, 250, 500];

  const selectedAmount =
    amount === "custom" ? customAmount : amount;

  // Simple animation settings
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <main className="bg-[#f7fbf8] text-[#123928]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#123928]">

        {/* Decorative background */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#2e7d5a]/30 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#5baa8a]/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8fd1b1]"
            >
              Support WINCARE
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl"
            >
              Give care.
              <span className="text-[#8fd1b1]">
                {" "}Create impact.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg"
            >
              Your generosity helps us reach more communities, support
              vulnerable people, and create opportunities for better health.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* DONATION SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center"
          >

            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 3,
              }}
              transition={{
                duration: 0.2,
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f4ec] text-[#2e7d5a]"
            >
              <FaHeart />
            </motion.div>

            <h2 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">
              Every gift has a purpose.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#60776c]">
              Whether it's a small contribution or a larger gift, your support
              helps WINCARE continue serving communities with compassion and
              practical solutions.
            </p>

            {/* IMPACT LIST */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 space-y-5"
            >
              {[
                "Support community health initiatives",
                "Provide practical assistance to vulnerable groups",
                "Expand health education and awareness",
                "Help make outreach programs possible",
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dff0e5] text-xs text-[#2e7d5a]">
                    <FaCheck />
                  </span>

                  <p className="text-sm text-[#527064]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* DONATION CARD */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{
              y: -4,
            }}
            className="rounded-[30px] border border-[#dfeadf] bg-white p-7 shadow-[0_20px_60px_rgba(18,57,40,0.07)] transition-shadow duration-300 hover:shadow-[0_25px_65px_rgba(18,57,40,0.10)] md:p-10"
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15,
                duration: 0.4,
              }}
              className="mb-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2e7d5a]">
                Make a difference
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Choose your gift
              </h3>
            </motion.div>

            {/* AMOUNTS */}
            <div>
              <p className="mb-3 text-sm font-medium">
                Select an amount
              </p>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                {amounts.map((value) => (
                  <motion.button
                    key={value}
                    type="button"
                    whileTap={{ scale: 0.96 }}
                    whileHover={{ y: -2 }}
                    onClick={() => {
                      setAmount(value);
                      setCustomAmount("");
                    }}
                    className={`rounded-xl border py-3.5 text-sm font-semibold transition ${
                      amount === value
                        ? "border-[#2e7d5a] bg-[#2e7d5a] text-white"
                        : "border-[#dce9df] bg-white text-[#123928] hover:border-[#2e7d5a]"
                    }`}
                  >
                    GH₵ {value}
                  </motion.button>
                ))}

              </div>

              {/* CUSTOM AMOUNT */}
              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                onClick={() => setAmount("custom")}
                className={`mt-3 w-full rounded-xl border py-3.5 text-sm font-semibold transition ${
                  amount === "custom"
                    ? "border-[#2e7d5a] bg-[#e7f4ec] text-[#2e7d5a]"
                    : "border-[#dce9df] text-[#60776c] hover:border-[#2e7d5a]"
                }`}
              >
                Enter a custom amount
              </motion.button>

              {/* CUSTOM INPUT */}
              {amount === "custom" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -5,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="relative mt-3"
                >
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#789084]">
                    GH₵
                  </span>

                  <input
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full rounded-xl border border-[#dce9df] bg-[#f9fcfa] py-3.5 pl-14 pr-4 text-sm outline-none transition focus:border-[#2e7d5a] focus:ring-4 focus:ring-[#2e7d5a]/10"
                  />
                </motion.div>
              )}
            </div>

            {/* DONOR DETAILS */}
            <div className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[#dce9df] bg-[#f9fcfa] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0aea7] focus:border-[#2e7d5a] focus:ring-4 focus:ring-[#2e7d5a]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#dce9df] bg-[#f9fcfa] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0aea7] focus:border-[#2e7d5a] focus:ring-4 focus:ring-[#2e7d5a]/10"
                />
              </div>

            </div>

            {/* DONATE BUTTON */}
            <motion.button
              type="button"
              whileHover={{
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#2e7d5a] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#123928]"
            >
              {selectedAmount
                ? `Donate GH₵ ${selectedAmount}`
                : "Continue to donate"}

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            <p className="mt-4 text-center text-xs leading-5 text-[#8a9b92]">
              Your contribution will support WINCARE's health and community
              initiatives.
            </p>

          </motion.div>
        </div>
      </section>

      {/* CLOSING */}
      <motion.section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
        }}
        className="border-t border-[#dfeadf]"
      >
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:px-8">

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaHeart className="mx-auto text-xl text-[#2e7d5a]" />
          </motion.div>

          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            Together, we can make care more accessible.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#789084]">
            Thank you for believing in the work of WINCARE and choosing to
            make a difference.
          </p>

        </div>
      </motion.section>

    </main>
  );
};

export default Donation;