
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What is WINCARE?",
    answer:
      "WINCARE is a compassionate health ministry committed to improving access to healthcare and supporting underserved communities through outreach, education, and practical health initiatives.",
  },
  {
    question: "Who does WINCARE serve?",
    answer:
      "We primarily serve vulnerable and underserved individuals and communities, with a special focus on children, young people, families, and communities with limited access to healthcare resources.",
  },
  {
    question: "What services does WINCARE provide?",
    answer:
      "Our work includes health education, preventive care, wellness initiatives, community health outreaches, mentoring, and other programs designed to promote healthier communities.",
  },
  {
    question: "How can I volunteer with WINCARE?",
    answer:
      "You can get involved by joining our volunteer team, supporting outreach programs, sharing your skills, or helping us with community initiatives. Visit our contact page to get in touch with the team.",
  },
  {
    question: "How can I support WINCARE?",
    answer:
      "There are many ways to support our work, including volunteering, donating, partnering with us, or helping spread awareness about our programs and initiatives.",
  },
  {
    question: "Where does WINCARE operate?",
    answer:
      "WINCARE works through community-based initiatives and outreach programs. Our activities may vary depending on the needs of the communities we are serving.",
  },
  {
    question: "Can my organization partner with WINCARE?",
    answer:
      "Yes. We welcome partnerships with organizations, businesses, healthcare professionals, community groups, and individuals who share our commitment to improving lives and building healthier communities.",
  },
  {
    question: "How can I contact WINCARE?",
    answer:
      "You can reach out to us through the contact form on our website. Our team will be happy to respond to your questions, partnership requests, or volunteering inquiries.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#4a9577]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-3 text-3xl font-semibold text-[#123928] md:text-4xl">
            Questions? We've got answers.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-md">
            Find answers to some of the most common questions about WINCARE,
            our programs, and how you can get involved.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#5baa8a] bg-[#f7fbf9] shadow-sm"
                    : "border-gray-200 bg-white"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7 md:py-6"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base font-semibold md:text-md ${
                      isOpen ? "text-[#2e7d5a]" : "text-[#123928]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#2e7d5a] text-white"
                        : "bg-[#eef6f2] text-[#2e7d5a]"
                    }`}
                  >
                    {isOpen ? (
                      <FaMinus className="text-xs" />
                    ) : (
                      <FaPlus className="text-xs" />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-[#dcece5] px-6 pb-6 pt-4 md:px-7">
                        <p className="max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
