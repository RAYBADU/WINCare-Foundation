import React from "react";
import { motion } from "framer-motion";

import teamInfo from "../data/teamInfo";

const TeamMembers = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-20">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-16 max-w-2xl"
        >

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5baa8a]">
            Our Leadership
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#173b2d] md:text-5xl">
            Board of <span className="text-[#4a9577]">Directors</span> 
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-gray-600">
            Meet the individuals entrusted with helping guide WINCARE's
            vision, governance, and long-term direction.
          </p>

        </motion.div>


        {/* Board members */}
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {teamInfo.map((member, index) => (

            <motion.article
              key={member.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.55,
                delay: Math.min(index * 0.06, 0.18),
              }}
              className="group"
            >

              {/* Portrait */}
              <div className="relative mx-auto aspect-[4/5] max-w-[270px] overflow-hidden rounded-[1.5rem] bg-[#edf6ef]">

                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#173b2d]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              </div>


              {/* Details */}
              <div className="mt-5">

                <h3 className="text-xl font-semibold tracking-tight text-[#173b2d]">
                  {member.name}
                </h3>

                <p className="mt-1.5 text-sm font-medium text-[#5baa8a]">
                  {member.role}
                </p>

                <div className="mt-4 h-px w-8 bg-[#5baa8a]/50 transition-all duration-300 group-hover:w-12" />

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
};

export default TeamMembers;