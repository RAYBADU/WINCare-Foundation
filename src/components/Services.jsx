import React from 'react'
const programAreas = [
  "Health education",
  "Community health outreaches",
  "Health screening",
  "Preventive healthcare",
  "Support for vulnerable communities",
  "Health awareness campaigns",
];


const Services = () => {
  return (
      <section
          id="services"
          className="mx-auto max-w-6xl px-4 py-16 md:px-8 lg:px-12"
        >
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#123928] md:text-4xl">
              Practical programs that improve health outcomes.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programAreas.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[18px] border border-[#dfeae6] bg-white p-5 shadow-sm transition hover:border-[#bfe0d5] hover:shadow-[0_12px_35px_rgba(18,58,78,0.04)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf7f4] text-[#0d4d5b]">
                  <FaMedkit />
                </span>
                <span className="text-base font-medium text-[#123a4e]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Services
