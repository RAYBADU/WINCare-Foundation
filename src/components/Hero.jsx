import React from "react";
import { FaArrowRight, FaHeart, FaUsers, FaHandshake } from "react-icons/fa";

const outreachImages = [
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    alt: "Volunteers helping families in a community outreach",
    label: "Community care",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    alt: "Volunteers supporting a local outreach program",
    label: "Youth support",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
    alt: "People volunteering together during a social outreach event",
    label: "Hope in action",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-8 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dfeadf] bg-[#edf7ee] px-3 py-1.5 text-sm font-medium text-[#1f5f43]">
              <FaHeart className="text-[#2e7d5a]" />
              Helping communities thrive
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-[#123928] sm:text-5xl lg:text-6xl">
              Nurturing Health, Impacting Lives.
            </h1>

            <p className="mt-5 text-base leading-7 text-[#4a655a] sm:text-lg">
              We support families, uplift vulnerable communities, and mobilize
              volunteers to create lasting impact through compassion, care, and
              action.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="bg-[#5baa8a] text-white rounded-full">
                <a
                  href="#donate"
                  className="inline-flex items-center gap-2 rounded-full  px-5 py-4 text-sm font-semibold "
                >
                  Donate today
                  <FaArrowRight className="text-xs" />
                </a>
              </button>
              <a
                href="#outreaches"
                className="inline-flex items-center gap-2 rounded-full border border-[#cfe1d4] bg-white px-5 py-4 text-sm font-semibold text-[#123928] transition hover:border-[#a9c8b5] hover:bg-[#f3faf4]"
              >
                Explore outreach
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#325c4f]">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4f3ea] text-[#1d4d3a]">
                  <FaUsers />
                </span>
                <span>
                  <strong className="block text-base text-[#123928]">
                    3.5k+
                  </strong>
                  volunteers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4f3ea] text-[#1d4d3a]">
                  <FaHandshake />
                </span>
                <span>
                  <strong className="block text-base text-[#123928]">
                    120+
                  </strong>
                  outreach programs
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-[#d9efe0] blur-2xl" />
            <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-[#dfeaf7] blur-2xl" />

            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-[#e5efea] bg-white p-3 shadow-[0_24px_60px_rgba(29,77,58,0.12)] sm:col-span-2">
                <img
                  src={outreachImages[0].src}
                  alt={outreachImages[0].alt}
                  className="h-72 w-full rounded-[1.5rem] object-cover sm:h-80"
                />
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-[#e5efea] bg-white p-2 shadow-[0_20px_40px_rgba(29,77,58,0.08)]">
                <img
                  src={outreachImages[1].src}
                  alt={outreachImages[1].alt}
                  className="h-48 w-full rounded-[1.25rem] object-cover"
                />
                <p className="px-2 pb-2 pt-3 text-sm font-medium text-[#1f5f43]">
                  {outreachImages[1].label}
                </p>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-[#e5efea] bg-white p-2 shadow-[0_20px_40px_rgba(29,77,58,0.08)]">
                <img
                  src={outreachImages[2].src}
                  alt={outreachImages[2].alt}
                  className="h-48 w-full rounded-[1.25rem] object-cover"
                />
                <p className="px-2 pb-2 pt-3 text-sm font-medium text-[#1f5f43]">
                  {outreachImages[2].label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
