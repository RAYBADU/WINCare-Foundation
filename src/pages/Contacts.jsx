import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCheck,
  FaHeart,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (submitted) {
      setSubmitted(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!subject) {
      newErrors.subject = "Please enter a subject.";
    } else if (subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!message) {
      newErrors.message = "Please enter your message.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form submitted:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };

  const getInputClass = (field) => {
    const base =
      "w-full rounded-xl bg-[#f8fbf9] px-4 py-3.5 text-sm outline-none transition placeholder:text-[#9aaba2] focus:ring-4";

    if (errors[field]) {
      return `${base} border border-red-400 focus:border-red-500 focus:ring-red-500/10`;
    }

    if (formData[field]) {
      return `${base} border border-[#8bc6a5] focus:border-[#2e7d5a] focus:ring-[#2e7d5a]/10`;
    }

    return `${base} border border-[#dce9df] focus:border-[#2e7d5a] focus:ring-[#2e7d5a]/10`;
  };

  const contactItems = [
    {
      icon: FaEnvelope,
      title: "Email us",
      value: "wincare.fdn@gmail.com",
      href: "mailto:wincare.fdn@gmail.com",
    },
    {
      icon: FaPhoneAlt,
      title: "Call us",
      value: "+233 201 990 499",
      href: "tel:+233201990499",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6faf7] text-[#123928] pt-22">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#123928]">

        {/* Background decoration */}
        <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#5baa8a]/20 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[-180px] left-[-100px] h-[400px] w-[400px] rounded-full bg-[#2e7d5a]/20 blur-3xl" />

        {/* Small decorative line */}
        <div className="pointer-events-none absolute right-[15%] top-1/2 hidden h-px w-32 bg-[#8fd1b1]/20 lg:block" />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 md:px-8 md:py-24 lg:px-12 lg:py-28">

          <div className="grid items-end gap-12 lg:grid-cols-[1.3fr_0.7fr]">

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#8fd1b1]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fd1b1]">
                  Contact WINCARE
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Let's make
                <br />
                <span className="text-[#8fd1b1]">
                  something meaningful.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base md:text-lg">
                Have a question, an idea, or an opportunity to collaborate?
                We'd love to hear from you.
              </p>
            </motion.div>

            {/* Hero side text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="hidden lg:block"
            >
              <div className="border-l border-white/10 pl-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  We're here to listen
                </p>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Whether you're looking to volunteer, partner with WINCARE,
                  support our work, or simply learn more, let's start a
                  conversation.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}
      <section className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 md:px-8 md:py-20 lg:px-12">

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
              Get in touch
            </span>

            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight md:text-4xl">
              We'd love to hear from you.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#60776c]">
              Reach out to us with your questions, ideas, partnership
              opportunities, or anything you'd like to discuss.
            </p>

            {/* Contact cards */}
            <div className="mt-8 space-y-3">

              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="group flex items-center justify-between rounded-2xl border border-[#dfeae2] bg-white p-4 shadow-[0_5px_20px_rgba(18,57,40,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a9d8bd] hover:shadow-[0_10px_30px_rgba(18,57,40,0.07)]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7f4ec] text-[#2e7d5a] transition-colors duration-300 group-hover:bg-[#2e7d5a] group-hover:text-white">
                        <Icon />
                      </span>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-[#91a199]">
                          {item.title}
                        </p>

                        <p className="mt-1 text-sm font-medium text-[#123928]">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <FaArrowRight className="mr-2 text-xs text-[#a0aea7] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#2e7d5a]" />
                  </motion.a>
                );
              })}

              {/* Location */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.16,
                }}
                className="flex items-center gap-4 rounded-2xl border border-[#dfeae2] bg-white p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e7f4ec] text-[#2e7d5a]">
                  <FaMapMarkerAlt />
                </span>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[#91a199]">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    Takoradi, Ghana
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Small statement */}
            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-[#e8f5ed] p-5">
              <FaHeart className="mt-1 shrink-0 text-sm text-[#2e7d5a]" />

              <p className="text-sm leading-6 text-[#527064]">
                Meaningful change often begins with a simple conversation.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              FORM
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.6,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Decorative offset layer */}
            <div className="absolute -right-2 -top-2 hidden h-full w-full rounded-[2rem] bg-[#dff2e7] sm:block" />

            <div className="relative rounded-[2rem] border border-[#dce9df] bg-white p-6 shadow-[0_20px_60px_rgba(18,57,40,0.08)] sm:p-8 md:p-10">

              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
                      Send a message
                    </span>

                    <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                      Tell us what's on your mind.
                    </h3>
                  </div>

                  <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#123928] text-white sm:flex">
                    <FaEnvelope className="text-sm" />
                  </div>
                </div>

                <p className="mt-3 max-w-lg text-sm leading-6 text-[#789084]">
                  Complete the form below and a member of our team will get
                  back to you.
                </p>
              </div>

              {/* Success */}
              <AnimatePresence initial={false}>
                {submitted && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                      y: -8,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      y: -8,
                    }}
                    className="mb-6 overflow-hidden"
                  >
                    <div className="flex items-start gap-3 rounded-2xl border border-[#b9dec7] bg-[#edf9f1] p-4 text-sm text-[#246847]">
                      <FaCheck className="mt-0.5 shrink-0" />

                      <div>
                        <p className="font-semibold">
                          Message sent successfully!
                        </p>

                        <p className="mt-1 text-[#527064]">
                          Thank you for reaching out. We'll get back to you
                          soon.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={getInputClass("name")}
                      aria-invalid={!!errors.name}
                    />

                    {errors.name && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={getInputClass("email")}
                      aria-invalid={!!errors.email}
                    />

                    {errors.email && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to talk about?"
                    className={getInputClass("subject")}
                    aria-invalid={!!errors.subject}
                  />

                  {errors.subject && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className={`${getInputClass(
                      "message"
                    )} resize-none`}
                    aria-invalid={!!errors.message}
                  />

                  <div className="mt-2 flex justify-between">
                    {errors.message ? (
                      <p className="text-xs text-red-500">
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}

                    <span className="text-xs text-[#9aaba2]">
                      {formData.message.length}/500
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#123928] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#2e7d5a]"
                >
                  Send message

                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section className="border-t border-[#dfeadf] bg-white">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6">

          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f4ec] text-[#2e7d5a]">
            <FaHeart className="text-sm" />
          </span>

          <h2 className="mt-5 text-2xl font-semibold md:text-3xl">
            Every conversation can lead to change.
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#789084]">
            Thank you for connecting with WINCARE and being part of our
            journey toward healthier communities.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;