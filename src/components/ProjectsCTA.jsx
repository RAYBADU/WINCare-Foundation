import React from "react";
import {Link} from "react-router-dom";
const ProjectsCTA = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
        Be part of the story
      </p>

      <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
        Every project starts with someone who cares.
      </h2>

      <p className="mx-auto mt-5 max-w-xl leading-7 text-[#60776c]">
        There are many ways to contribute to healthier communities. Your time,
        skills, resources, or support can help us take the next step.
      </p>

      <div className=" mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button className="rounded-full border border-[#c8ddd0] bg-white px-7 py-3 font-semibold text-[#123928] transition hover:bg-[#f0f7f2]">
          <Link to="/donate">Support a  project</Link>
          
        </button>
      </div>
    </section>
  );
};

export default ProjectsCTA;
