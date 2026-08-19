import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaSchool,
  FaHeartbeat,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const areas = [
  {
    number: "01",
    title: "Schools & Young People",
    icon: FaSchool,
    text: "We partner with schools to provide health education, menstrual health support, mentoring, and practical assistance for young people.",
  },
  {
    number: "02",
    title: "Local Communities",
    icon: FaUsers,
    text: "We work alongside families and community leaders to promote healthier lifestyles and make important health information more accessible.",
  },
  {
    number: "03",
    title: "Underserved Communities",
    icon: FaHeartbeat,
    text: "We extend our outreach to communities where access to healthcare, preventive services, and health education remains limited.",
  },
];

const WhereWeWork = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2e7d5a]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
                Where We Work
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Bringing care 
              <span className="text-[#4a9577] block">closer to people .</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl lg:ml-auto"
          >
            <p className="text-lg leading-8 text-gray-600">
              WINCARE takes healthcare beyond traditional facilities. We meet
              people in the places where they live, learn, and grow.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-500">
              Through outreach programs, partnerships, education, and community
              engagement, we work to make quality healthcare and health
              information more accessible.
            </p>
          </motion.div>
        </div>

        {/* MAIN SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-[2rem] bg-[#1f5f43]"
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT */}
            <div className="relative flex min-h-[480px] flex-col justify-between overflow-hidden p-8 sm:p-12 lg:p-16">
              {/* Decorative circles */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />

              <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full border border-white/10" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl text-[#1f5f43]">
                  <FaMapMarkerAlt />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Community First
                </p>

                <h3 className="mt-3 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Wherever there is a need, we find a way to reach it.
                </h3>
              </div>

              <div className="relative z-10 mt-12">
                <div className="mb-6 h-[2px] w-12 bg-white" />

                <p className="max-w-md text-sm leading-7 text-white/75">
                  Our outreach programs are shaped around the realities of the
                  communities we serve. We listen, understand local needs, and
                  respond with practical solutions.
                </p>

                <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-white">
                  <span>Community-led. People-focused.</span>
                  <FaArrowRight className="text-xs" />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-[#edf6f1] p-8 sm:p-12 lg:p-16">
              <div className="mb-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2e7d5a]">
                  Our Areas of Focus
                </p>

                <h4 className="mt-2 text-2xl font-semibold text-gray-900">
                  Reaching communities that matter.
                </h4>
              </div>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute bottom-5 left-5 top-5 w-px bg-[#2e7d5a]/20" />

                <div className="space-y-10">
                  {areas.map((area, index) => {
                    const Icon = area.icon;

                    return (
                      <motion.div
                        key={area.number}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.08,
                        }}
                        className="relative flex gap-6"
                      >
                        {/* Marker */}
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#2e7d5a] bg-[#edf6f1] text-sm text-[#2e7d5a]">
                          <Icon />
                        </div>

                        {/* Content */}
                        <div className="pt-1">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-[#2e7d5a]">
                              {area.number}
                            </span>

                            <h5 className="text-lg font-semibold text-gray-800">
                              {area.title}
                            </h5>
                          </div>

                          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-600">
                            {area.text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhereWeWork;
