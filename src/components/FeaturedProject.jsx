import React from "react";
import { FaArrowRight } from "react-icons/fa";
import featuredImage from "../assets/outreach-images/photo_2026-08-15_00-35-58.jpg"

const FeaturedProject = () => {
  return (
    <section className="bg-[#e8f4ed]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 lg:px-12">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
            Featured project
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Her Cycle Care
          </h2>
        </div>

        <div className="grid overflow-hidden rounded-[32px] bg-white md:grid-cols-2">
          <div className="h-[400px] md:h-full">
            <img
              src={featuredImage}
              alt="Girls participating in an educational session"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <span className="w-fit rounded-full bg-[#e7f4ec] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#2e7d5a]">
              Women & Girls
            </span>

            <h3 className="mt-5 text-3xl font-semibold">
              Creating confidence beyond the classroom.
            </h3>

            <p className="mt-5 leading-7 text-[#60776c]">
              Her Cycle Care creates opportunities for girls to have honest
              conversations about menstrual health while receiving practical
              support and guidance.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#f4f9f5] p-5">
                <p className="text-sm font-semibold text-[#2e7d5a]">
                  What we do
                </p>

                <p className="mt-2 text-sm leading-5 text-[#60776c]">
                  Education, mentorship & practical support
                </p>
              </div>

              <div className="rounded-2xl bg-[#f4f9f5] p-5">
                <p className="text-sm font-semibold text-[#2e7d5a]">
                  Who we serve
                </p>

                <p className="mt-2 text-sm leading-5 text-[#60776c]">
                  Girls and young women
                </p>
              </div>
            </div>

            {/* <button className="mt-8 flex w-fit items-center gap-3 rounded-full bg-[#123928] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2e7d5a]">
              Explore project
              <FaArrowRight />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;