import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import image1 from "../assets/project-page-images/photo_2026-08-15_00-08-35.jpg";
import image2 from "../assets/project-page-images/photo_2026-08-16_18-32-11.jpg";
import image3 from "../assets/project-page-images/photo_2026-08-16_18-34-02.jpg";

const projects = [
  {
    title: "Ntranoa Medical Outreach",
    category: "Healthcare",
    date: "2026",
    location: "Community Outreach",
    description:
      "Bringing healthcare closer to communities through screenings, consultations, health education, and practical support.",
    image:
      image2,
  },
  {
    title: "Her Cycle Care",
    category: "Women & Girls",
    date: "2025",
    location: "Schools & Communities",
    description:
      "Creating safe spaces for girls to learn about menstrual health while providing practical support and essential supplies.",
    image:
      image1,
  },
  {
    title: "Wellness Education Campaign",
    category: "Community",
    date: "2026",
    location: "Local Communities",
    description:
      "Helping individuals and families make informed decisions about prevention, hygiene, nutrition, and everyday wellbeing.",
    image:
     image3,
  },
];

const ProjectExplorer = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 lg:px-12">
      {/* Heading + Filters */}
      <motion.div
        className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
            Explore our work
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Projects making a difference.
          </h2>
        </div>

        
      </motion.div>

      {/* Projects */}
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group overflow-hidden rounded-[28px] border border-[#dfebe2] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(18,57,40,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }}
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#123928]/70 via-transparent to-transparent" />

              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#2e7d5a] backdrop-blur-sm">
                {project.category}
              </span>

              <span className="absolute bottom-5 left-5 flex items-center gap-2 text-sm text-white">
                <FaMapMarkerAlt className="text-[#8fd1b1]" />
                {project.location}
              </span>
            </div>

            {/* Content */}
            <div className="p-7">
              <div className="mb-3 flex items-center gap-2 text-xs text-[#789084]">
                <FaCalendarAlt />
                {project.date}
              </div>

              <h3 className="text-2xl font-semibold">{project.title}</h3>

              <p className="mt-3 text-sm leading-6 text-[#60776c]">
                {project.description}
              </p>

              {/* <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#2e7d5a] transition-[gap] duration-200 group-hover:gap-3">
                View project
                <FaArrowRight />
              </button> */}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProjectExplorer;