import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const governanceAreas = [
  {
    number: "01",
    icon: FaBullseye,
    title: "Strategic Direction",
    text: "Helping shape WINCARE's long-term vision, priorities, and strategic direction.",
  },
  {
    number: "02",
    icon: FaShieldAlt,
    title: "Governance & Oversight",
    text: "Promoting accountability, transparency, responsible decision-making, and good governance.",
  },
  {
    number: "03",
    icon: FaChartLine,
    title: "Sustainable Impact",
    text: "Supporting responsible growth and ensuring our work creates meaningful, lasting impact.",
  },
];

const GovernanceSection = () => {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

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
          >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5baa8a]">
              Our Responsibility
            </p>

            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-[#173b2d] md:text-5xl">

              Leadership that

              <span className="block text-[#5baa8a]">
                keeps us accountable.
              </span>

            </h2>

          </motion.div>


          <motion.p
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
              duration: 0.6,
            }}
            className="max-w-xl leading-7 text-gray-600 lg:ml-auto"
          >
            Effective governance helps ensure that WINCARE's resources,
            programmes, and decisions remain aligned with its mission and
            the needs of the communities it serves.
          </motion.p>

        </div>


        {/* Governance cards */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-[#dcebe2] md:grid-cols-3">

          {governanceAreas.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="group bg-white p-8 md:p-10 lg:p-12"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf6ef] text-[#5baa8a] transition-transform duration-300 group-hover:scale-105">
                    <Icon />
                  </div>

                  <span className="text-sm font-semibold text-[#5baa8a]/60">
                    {item.number}
                  </span>

                </div>


                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#173b2d]">
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
  );
};

export default GovernanceSection;