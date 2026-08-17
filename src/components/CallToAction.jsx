import React from 'react'
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {Link} from "react-router-dom"

const CallToAction = () => {
  return (
      <section
        id="donate"
        className="mx-auto max-w-6xl px-4 py-12 md:px-8 lg:px-12"
      >
        <motion.div
          className="rounded-[2rem] border border-[#dfeadf] bg-white p-8 text-center shadow-[0_18px_40px_rgba(18,57,40,0.05)] md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
            Take action
          </p>
          <h2 className="mt-3 text-3xl font-medium text-[#123928] md:text-4xl">
            Your support can change a life today.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#4a655a]">
            Whether through giving, volunteering, or sharing the mission, you can
            help bring practical hope to families and communities in need.
          </p>

          <Link to="/donate"
            href="#"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#5baa8a] to-[#4a9577] px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(91,170,138,0.3)] transition-all hover:shadow-[0_12px_32px_rgba(91,170,138,0.4)]  duration-300 hover:bg-[#4A9679] "
          >
            Support a cause
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
  )
}

export default CallToAction
