import React from "react";

const milestones = [
  {
    year: "2024",
    title: "The beginning",
    text: "WINCARE begins creating opportunities to make healthcare more accessible.",
  },
  {
    year: "2025",
    title: "Expanding our reach",
    text: "Community initiatives and health-focused activities continue to grow.",
  },
  {
    year: "2026",
    title: "New communities, new possibilities",
    text: "More projects, partnerships and opportunities to serve.",
  },
];

const ProjectJourney = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-8 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
          Our journey
        </p>

        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          Growing through every project.
        </h2>
      </div>

      <div className="relative mx-auto mt-16 max-w-4xl">
        <div className="absolute left-3 top-0 h-full w-px bg-[#cfe2d5] md:left-1/2" />

        {milestones.map((item, index) => (
          <div
            key={item.year}
            className={`relative flex ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            <div className="mb-12 ml-10 w-full rounded-[24px] border border-[#dfebe2] bg-white p-6 shadow-sm md:ml-0 md:w-[44%]">
              <span className="text-sm font-bold text-[#2e7d5a]">
                {item.year}
              </span>

              <h3 className="mt-2 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#60776c]">
                {item.text}
              </p>
            </div>

            <span className="absolute left-0 top-6 h-7 w-7 rounded-full border-4 border-[#f7fbf8] bg-[#2e7d5a] md:left-1/2 md:-translate-x-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectJourney;