import React from "react";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import upcomingImage from "../assets/hero-images/photo_2026-08-15_00-11-33.jpg"

const UpcomingProjects = () => {
  return (
    <section className="bg-[#e8f4ed] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
              What's next
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#123928] md:text-4xl">
              There's more work to be done.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#60776c] md:text-base">
              We're continually working towards reaching more people,
              supporting more communities, and creating new opportunities
              for healthier lives.
            </p>
          </div>

         
        </div>

        {/* Featured upcoming project */}
        <div className="group relative overflow-hidden rounded-[30px] bg-[#123928] shadow-[0_20px_50px_rgba(18,57,40,0.12)]">

          {/* Decorative circle */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#2e7d5a]/30 blur-2xl" />

          <div className="relative grid md:grid-cols-2">

            {/* Image */}
            <div className="relative h-72 overflow-hidden md:h-[420px]">
              <img
                src={upcomingImage}
                alt="Community members participating in a health outreach"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#123928]/60 via-transparent to-transparent md:bg-gradient-to-r" />

              {/* Coming soon badge */}
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#2e7d5a] shadow-sm backdrop-blur-sm">
                Coming soon
              </div>
            </div>

            {/* Content */}
            <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-14">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8fd1b1]">
                Upcoming initiative
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Bringing care closer to the community.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 md:text-base">
                Our next community initiative will bring healthcare,
                education, and practical support directly to people who need
                it most.
              </p>

              {/* Details */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-6">

                <div className="flex items-center gap-2 text-sm text-white/70">
                  <FaCalendarAlt className="text-[#8fd1b1]" />
                  Coming soon
                </div>

                <div className="flex items-center gap-2 text-sm text-white/70">
                  <FaMapMarkerAlt className="text-[#8fd1b1]" />
                  Community outreach
                </div>

              </div>

              

            </div>
          </div>
        </div>

       

      </div>
    </section>
  );
};

export default UpcomingProjects;