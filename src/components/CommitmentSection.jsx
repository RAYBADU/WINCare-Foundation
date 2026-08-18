import React from "react";
import { motion } from "framer-motion";

const commitments = [
  {
    number: "01",
    title: "People First",
    text: "Keeping the wellbeing, dignity, and needs of the communities we serve at the centre of our decisions.",
  },
  {
    number: "02",
    title: "Responsible Stewardship",
    text: "Ensuring resources are managed responsibly and decisions are made with accountability, transparency, and care.",
  },
  {
    number: "03",
    title: "Lasting Impact",
    text: "Supporting initiatives that create meaningful, measurable, and sustainable improvements in the communities we serve.",
  },
];

const CommitmentSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#edf6ef] px-6 py-24 md:px-12 md:py-32 lg:px-20">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#5baa8a]/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#2e7d5a]/10 blur-3xl" />


      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Introduction */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-xl"
          >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4a9577]">
              Our Commitment
            </p>


            <h2 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-[#173b2d] md:text-5xl">

              Leading today.

              <span className="block text-[#5baa8a]">
                Building for tomorrow.
              </span>

            </h2>


            <p className="mt-6 max-w-lg leading-7 text-gray-600">
              Our leadership is committed to making thoughtful decisions
              that strengthen WINCARE today while creating a foundation
              for meaningful and sustainable impact in the future.
            </p>


            <div className="mt-8 h-1 w-12 rounded-full bg-[#5baa8a]" />

          </motion.div>


          {/* Commitments */}
          <div className="space-y-4">

            {commitments.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group flex gap-5 rounded-[1.5rem] border border-[#d7e8dc] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9d9c5] md:p-7"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-sm font-semibold text-[#5baa8a]">
                  {item.number}
                </div>


                <div>

                  <h3 className="text-lg font-semibold text-[#173b2d]">
                    {item.title}
                  </h3>


                  <p className="mt-2 leading-7 text-gray-600">
                    {item.text}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default CommitmentSection;