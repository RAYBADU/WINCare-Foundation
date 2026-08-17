import React from 'react'
import {
  FaHeart,
  FaShieldAlt,
  FaUsers,
  FaClipboardCheck,
  FaHandHoldingHeart,
  FaPeopleArrows,
  FaLightbulb,
} from "react-icons/fa";

const CoreValues = () => {


const values = [
  {
    icon: FaHeart,
    title: "Compassion",
    text: "We treat every person with empathy, dignity, and genuine care.",
  },
  {
    icon: FaShieldAlt,
    title: "Integrity",
    text: "We act with honesty, transparency, accountability, and trust.",
  },
  {
    icon: FaUsers,
    title: "Community",
    text: "We listen to communities and build solutions around their needs.",
  },
  {
    icon: FaClipboardCheck,
    title: "Excellence",
    text: "We pursue quality, evidence-based care, and meaningful impact.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Stewardship",
    text: "We use resources responsibly to expand access to care and health information.",
  },
  {
    icon: FaPeopleArrows,
    title: "Teamwork",
    text: "We work together with volunteers, partners, and communities to create lasting change.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    text: "We embrace practical, creative solutions to improve health and reach more people.",
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
