import React, { useState } from "react";
import { FaCheck, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import supabase from "../lib/supabase";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) return;

    setStatus("loading");
    setMessage("");

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert([
          {
            email: trimmedEmail,
          },
        ]);

      if (error) {
        // Duplicate email
        if (error.code === "23505") {
          setStatus("error");
          setMessage("You're already subscribed to our newsletter.");
          return;
        }

        console.error("Newsletter subscription error:", error);

        setStatus("error");
        setMessage("Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're successfully subscribed!");

      setEmail("");

      // Reset success message after 4 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 4000);
    } catch (error) {
      console.error("Unexpected error:", error);

      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

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
        ease: "easeOut",
      },
    },
  };

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
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Email */}
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
                  disabled={status === "loading"}
                  onChange={(e) => {
                    setEmail(e.target.value);

                    // Clear previous error when user starts typing
                    if (status === "error") {
                      setStatus("idle");
                      setMessage("");
                    }
                  }}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-colors duration-200 placeholder:text-white/50 focus:border-[#5baa8a] focus:ring-2 focus:ring-[#5baa8a]/30 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#5baa8a] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#4a9577] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Subscribing...
                  </>
                ) : status === "success" ? (
                  <>
                    <FaCheck />
                    Subscribed Successfully
                  </>
                ) : (
                  "Subscribe Now"
                )}
              </button>

              {/* Status Message */}
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm leading-relaxed ${
                    status === "success"
                      ? "text-[#d4ebe3]"
                      : "text-red-200"
                  }`}
                >
                  {message}
                </motion.p>
              )}

              {/* Privacy Text */}
              <p className="text-xs leading-relaxed text-[#c5ddd5]">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;