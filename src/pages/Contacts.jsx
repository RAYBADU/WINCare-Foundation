import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCheck,
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

    if (!validateForm()) {
      return;
    }

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
      "w-full rounded-xl bg-[#f9fcfa] px-4 py-3 text-sm outline-none transition placeholder:text-[#a0aea7] focus:ring-4";

    if (errors[field]) {
      return `${base} border border-red-400 focus:border-red-500 focus:ring-red-500/10`;
    }

    if (formData[field]) {
      return `${base} border border-[#8bc6a5] focus:border-[#2e7d5a] focus:ring-[#2e7d5a]/10`;
    }

    return `${base} border border-[#dce9df] focus:border-[#2e7d5a] focus:ring-[#2e7d5a]/10`;
  };

  return (
    <main className="bg-[#f7fbf8] text-[#123928]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#123928]">
        {/* Static decorative elements */}
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#2e7d5a]/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#5baa8a]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28 lg:px-12">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8fd1b1]">
              Contact us
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Let's start a{" "}
              <span className="text-[#8fd1b1]">conversation.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 md:text-lg">
              Whether you want to partner with us, volunteer, support our
              work, or simply say hello, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
              Reach out
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              We'd be happy to hear from you.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#60776c]">
              Have an idea, question, or opportunity you'd like to discuss?
              Send us a message and our team will get back to you.
            </p>

            {/* DETAILS */}
            <div className="mt-10 space-y-6">
              {/* EMAIL */}
              <motion.a
                href="mailto:wincare.fdn@gmail.com"
                className="group flex items-center gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e7f4ec] text-[#2e7d5a]">
                  <FaEnvelope />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8a9b92]">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium transition-colors duration-200 group-hover:text-[#2e7d5a]">
                    wincare.fdn@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* PHONE */}
              <motion.a
                href="tel:+233201990499"
                className="group flex items-center gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e7f4ec] text-[#2e7d5a]">
                  <FaPhoneAlt />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8a9b92]">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium transition-colors duration-200 group-hover:text-[#2e7d5a]">
                    +233 201 990 499
                  </p>
                </div>
              </motion.a>

              {/* LOCATION */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e7f4ec] text-[#2e7d5a]">
                  <FaMapMarkerAlt />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8a9b92]">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    Takoradi, Ghana
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 border-l-2 border-[#8fd1b1] pl-5">
              <p className="text-sm leading-6 text-[#60776c]">
                We believe meaningful change often begins with a simple
                conversation.
              </p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            className="rounded-[28px] border border-[#dfeadf] bg-white p-7 shadow-[0_20px_50px_rgba(18,57,40,0.06)] md:p-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
          >
            <div className="mb-7">
              <h3 className="text-2xl font-semibold">Send us a message</h3>

              <p className="mt-2 text-sm text-[#789084]">
                Fill in the form and we'll be in touch.
              </p>
            </div>

            {/* SUCCESS MESSAGE */}
            <AnimatePresence initial={false}>
              {submitted && (
                <motion.div
                  className="mb-6 flex items-start gap-3 rounded-2xl border border-[#b9dec7] bg-[#edf9f1] p-4 text-sm text-[#246847]"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <FaCheck className="mt-0.5 shrink-0" />

                  <div>
                    <p className="font-semibold">
                      Message sent successfully!
                    </p>

                    <p className="mt-1 text-[#527064]">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              {/* NAME + EMAIL */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* NAME */}
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
                    aria-describedby={
                      errors.name ? "name-error" : undefined
                    }
                  />

                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-2 text-xs text-red-500"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
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
                    aria-describedby={
                      errors.email ? "email-error" : undefined
                    }
                  />

                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-2 text-xs text-red-500"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* SUBJECT */}
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
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                />

                {errors.subject && (
                  <p
                    id="subject-error"
                    className="mt-2 text-xs text-red-500"
                  >
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
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
                  className={getInputClass("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />

                <div className="mt-2 flex items-center justify-between">
                  {errors.message ? (
                    <p
                      id="message-error"
                      className="text-xs text-red-500"
                    >
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

              {/* SUBMIT */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#2e7d5a] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#123928]"
              >
                Send message

                <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* BOTTOM STATEMENT */}
      <motion.section
        className="border-t border-[#dfeadf]"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
            WINCARE
          </p>

          <h2 className="mt-4 text-2xl font-semibold leading-relaxed md:text-3xl">
            Care begins when we listen.
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#789084]">
            Thank you for taking the time to connect with us.
          </p>
        </div>
      </motion.section>
    </main>
  );
};

export default Contact;