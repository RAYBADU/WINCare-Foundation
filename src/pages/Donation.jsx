import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaHeart,
  FaCheck,
  FaUsers,
  FaHandHoldingHeart,
} from "react-icons/fa";

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const amounts = [50, 100, 250, 500];

  const selectedAmount =
    amount === "custom" ? customAmount : amount;

  const impactItems = [
    "Community health outreaches",
    "Health education",
    "Support for vulnerable people",
  ];

  return (
    <main className="overflow-hidden bg-[#f7fbf8] text-[#123928] pt-18">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#123928]">
        {/* Soft background shapes */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#5baa8a]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#2e7d5a]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">

          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#a9e8d4]/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a9e8d4]">
              <FaHeart className="text-[10px]" />
              Support WINCARE
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              A little kindness can create{" "}
              <span className="text-[#8fd1b1]">
                lasting impact.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 md:text-lg">
              Your gift helps us bring healthcare, education, and practical
              support closer to people and communities that need it most.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <FaCheck className="text-[#8fd1b1]" />
                Accessible healthcare
              </div>

              <div className="flex items-center gap-2">
                <FaCheck className="text-[#8fd1b1]" />
                Community support
              </div>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
              <div className="flex h-52 w-52 items-center justify-center rounded-full bg-[#2e7d5a] shadow-[0_0_80px_rgba(91,170,138,0.2)]">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#8fd1b1] text-[#123928]">
                  <FaHandHoldingHeart className="text-5xl" />
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -left-8 top-10 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                <p className="text-xl font-bold text-white">8k+</p>
                <p className="text-[11px] text-white/50">
                  people supported
                </p>
              </div>

              <div className="absolute -bottom-2 -right-5 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                <p className="text-xl font-bold text-white">20</p>
                <p className="text-[11px] text-white/50">
                  projects delivered
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= DONATION AREA ================= */}
      <section className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 md:px-8 md:py-20 lg:px-12">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
              Your impact
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Give where it matters.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#60776c]">
              Your generosity helps turn good intentions into real
              opportunities for healthier communities.
            </p>

            {/* Impact items */}
            <div className="mt-7 space-y-3">
              {impactItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3 rounded-xl border border-[#e0ebe3] bg-white px-4 py-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e6f3eb] text-xs text-[#2e7d5a]">
                    <FaCheck />
                  </span>

                  <span className="text-sm text-[#527064]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-8 border-l-2 border-[#5baa8a] pl-5">
              <p className="text-sm italic leading-6 text-[#60776c]">
                “Together, we can make quality care more accessible.”
              </p>
            </div>
          </motion.div>

          {/* ================= DONATION CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_rgba(18,57,40,0.09)]"
          >
            {/* Green top accent */}
            <div className="h-2 bg-gradient-to-r from-[#2e7d5a] via-[#5baa8a] to-[#a9e8d4]" />

            <div className="p-6 sm:p-8 md:p-10">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
                  Make a difference
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  How much would you like to give?
                </h3>
              </div>

              {/* Amount buttons */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {amounts.map((value) => (
                  <motion.button
                    key={value}
                    type="button"
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                      setAmount(value);
                      setCustomAmount("");
                    }}
                    className={`rounded-xl border py-4 text-sm font-semibold transition-all duration-200 ${
                      amount === value
                        ? "border-[#2e7d5a] bg-[#2e7d5a] text-white shadow-lg shadow-[#2e7d5a]/15"
                        : "border-[#dce9df] bg-[#fbfdfb] text-[#123928] hover:border-[#5baa8a] hover:bg-[#f3faf6]"
                    }`}
                  >
                    GH₵ {value}
                  </motion.button>
                ))}
              </div>

              {/* Custom */}
              <button
                type="button"
                onClick={() => setAmount("custom")}
                className={`mt-3 w-full rounded-xl border py-4 text-sm font-semibold transition ${
                  amount === "custom"
                    ? "border-[#2e7d5a] bg-[#e7f4ec] text-[#2e7d5a]"
                    : "border-[#dce9df] text-[#60776c] hover:border-[#5baa8a]"
                }`}
              >
                Enter a custom amount
              </button>

              {amount === "custom" && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative mt-3"
                >
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#789084]">
                    GH₵
                  </span>

                  <input
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) =>
                      setCustomAmount(e.target.value)
                    }
                    placeholder="Enter amount"
                    className="w-full rounded-xl border border-[#dce9df] bg-[#f9fcfa] py-4 pl-14 pr-4 text-sm outline-none focus:border-[#2e7d5a] focus:ring-4 focus:ring-[#2e7d5a]/10"
                  />
                </motion.div>
              )}

              {/* Divider */}
              <div className="my-8 h-px bg-[#e7eee9]" />

              {/* Details */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#dce9df] bg-[#f9fcfa] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0aea7] focus:border-[#2e7d5a] focus:ring-4 focus:ring-[#2e7d5a]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#dce9df] bg-[#f9fcfa] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#a0aea7] focus:border-[#2e7d5a] focus:ring-4 focus:ring-[#2e7d5a]/10"
                  />
                </div>
              </div>

              {/* Donate */}
              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#123928] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2e7d5a]"
              >
                {selectedAmount
                  ? `Donate GH₵ ${selectedAmount}`
                  : "Continue to donate"}

                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <p className="mt-4 text-center text-xs text-[#8a9b92]">
                Every contribution helps WINCARE reach more people.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= BOTTOM STATEMENT ================= */}
      <section className="bg-[#e7f4ec]">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
          <FaHeart className="mx-auto text-xl text-[#2e7d5a]" />

          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            Care grows when we give together.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#60776c]">
            Thank you for standing with WINCARE and helping us build healthier,
            stronger communities.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Donation;