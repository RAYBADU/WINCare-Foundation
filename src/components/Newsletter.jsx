import React, { useState } from 'react'
import { FaCheck, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email.trim()) return

    setSubmitted(true)
    setEmail('')

    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
      },
    },
  }


  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 md:px-8 lg:px-12">
      <div className="rounded-[28px] bg-gradient-to-r from-[#2e7d5a] to-[#1f5f43] p-6 text-white sm:p-8 md:p-10 lg:p-12">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <FaEnvelope className="text-sm text-[#d4ebe3]" />

              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#d4ebe3] sm:text-sm">
                Stay Updated
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
              Get Health Updates & Community News
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#e8f5f2] sm:text-base">
              Subscribe to our newsletter and stay informed about health tips,
              community initiatives, and ways you can make a difference.
            </p>

           
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl bg-white/10 p-5 sm:p-6 md:p-8"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#d4ebe3]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-colors duration-200 placeholder:text-white/50 focus:border-[#5baa8a] focus:ring-2 focus:ring-[#5baa8a]/30"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#5baa8a] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#4a9577] active:scale-[0.98] cursor-pointer"
              >
                {submitted
                  ? '✓ Subscribed Successfully'
                  : 'Subscribe Now'}
              </button>

              <p className="text-xs leading-relaxed text-[#c5ddd5]">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Newsletter