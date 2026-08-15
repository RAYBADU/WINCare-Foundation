import React from 'react'
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardCheck,
  FaHandsHelping,
  FaHeart,
  FaMedkit,
  FaShieldAlt,
  FaStethoscope,
  FaUsers,
} from "react-icons/fa";

const CoreValues = () => {


const values = [
  {
    icon: FaHeart,
    title: "Compassion",
    text: "We meet people with empathy, dignity, and practical care.",
  },
  {
    icon: FaShieldAlt,
    title: "Integrity",
    text: "We act honestly, transparently, and with accountability in all we do.",
  },
  {
    icon: FaUsers,
    title: "Community",
    text: "We build lasting solutions with community voices and local partnerships.",
  },
  {
    icon: FaClipboardCheck,
    title: "Excellence",
    text: "We strive for quality, evidence-based care and service delivery.",
  },
  {
    icon: FaStethoscope,
    title: "Accessibility",
    text: "We remove barriers so care and health information reach everyone.",
  },
  {
    icon: FaCheckCircle,
    title: "Accountability",
    text: "We take responsibility for outcomes and trust-based stewardship.",
  },
];



  return (
      <section className="mx-auto max-w-6xl px-4 py-8 md:px-8 lg:px-12">
              <div className="mb-10 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
                  Our values
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[#123928] md:text-4xl">
                  The principles guiding our work.
                </h2>
              </div>
    
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {values.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-[22px] border border-[#dfeadf] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(18,57,40,0.08)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf7ee] text-xl text-[#2e7d5a]">
                      <Icon />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-[#123928]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#4a655a]">{text}</p>
                  </div>
                ))}
              </div>
            </section>
  )
}

export default CoreValues
