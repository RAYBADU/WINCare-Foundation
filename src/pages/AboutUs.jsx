import React from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardCheck,
  FaHandsHelping,
  FaHeart,
  FaMedkit,
  FaShieldAlt,
  FaStethoscope,
  FaUsers,
} from "react-icons/fa";

const values = [
  { icon: FaHeart, title: "Compassion", text: "We meet people with empathy, dignity, and practical care." },
  { icon: FaShieldAlt, title: "Integrity", text: "We act honestly, transparently, and with accountability in all we do." },
  { icon: FaUsers, title: "Community", text: "We build lasting solutions with community voices and local partnerships." },
  { icon: FaClipboardCheck, title: "Excellence", text: "We strive for quality, evidence-based care and service delivery." },
  { icon: FaStethoscope, title: "Accessibility", text: "We remove barriers so care and health information reach everyone." },
  { icon: FaCheckCircle, title: "Accountability", text: "We take responsibility for outcomes and trust-based stewardship." },
];

const programAreas = [
  "Health education",
  "Community health outreaches",
  "Health screening",
  "Preventive healthcare",
  "Support for vulnerable communities",
  "Health awareness campaigns",
];

const stats = [
  { value: "500+", label: "People Reached" },
  { value: "20+", label: "Communities Served" },
  { value: "15+", label: "Community Outreaches" },
  { value: "10+", label: "Health Campaigns" },
];

const teamMembers = [
  {
    name: "Dr. Adwoa Mensah",
    role: "Executive Director",
    description: "Leads our mission to expand equitable healthcare access and community wellbeing.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Samuel Boateng",
    role: "Programs Manager",
    description: "Coordinates outreach and community health initiatives across underserved areas.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Naa Afi Quaye",
    role: "Health Education Lead",
    description: "Develops community health education programs that empower families to make informed decisions.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#f6faf8] text-[#123a4e]">
      <main className="pt-28">
        <section className="px-4 pb-16 md:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-[#dfeae6] bg-white shadow-[0_24px_60px_rgba(18,58,78,0.08)]">
            <div
              className="relative min-h-[420px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(10,35,45,0.78), rgba(12,59,69,0.52)), url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80')",
              }}
            >
              <div className="relative z-10 flex h-full min-h-[420px] items-end p-8 md:p-12 lg:p-16">
                <div className="max-w-xl">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#eafaf6] backdrop-blur-sm">
                    Our story
                  </span>
                  <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                    About Us
                  </h1>
                  <p className="mt-4 max-w-lg text-base leading-7 text-[#e9f5f2] md:text-lg">
                    We are committed to improving community health through accessible healthcare, trustworthy education, and compassionate outreach that helps people thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8 md:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#168a74]">
                Who we are
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#123a4e] md:text-4xl">
                A health-focused organization rooted in compassion and action.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#49656f]">
                WINCare exists to improve the health and wellbeing of individuals and communities by making healthcare more accessible, informative, and responsive to real community needs. We work with local leaders, volunteers, and partners to support people with dignity and care.
              </p>
              <p className="mt-4 text-base leading-7 text-[#49656f]">
                From health education to preventive care and outreach programs, we focus on practical solutions that strengthen families, protect vulnerable groups, and build healthier communities for the long term.
              </p>

              <a
                href="#mission"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0d4d5b] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0a3c48]"
              >
                Our Work
                <FaArrowRight className="text-xs" />
              </a>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-[#dfeae6] bg-white p-3 shadow-[0_20px_45px_rgba(15,45,59,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80"
                alt="Healthcare workers supporting a community"
                className="h-[480px] w-full rounded-[18px] object-cover"
              />
            </div>
          </div>
        </section>

        <section id="mission" className="mx-auto max-w-6xl px-4 py-16 md:px-8 lg:px-12">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#168a74]">
              Mission & Vision
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#123a4e] md:text-4xl">
              Building stronger communities through healthier lives.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[24px] border border-[#dfeae6] bg-[#0d4d5b] p-8 text-white shadow-[0_16px_40px_rgba(13,77,91,0.18)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl text-[#b9f2e2]">
                <FaHeart />
              </div>
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="mt-4 text-base leading-7 text-[#dfeef0]">
                To improve access to quality healthcare, health information, and community support so that individuals and families can live healthier, safer, and more empowered lives.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#dfeae6] bg-white p-8 shadow-[0_16px_40px_rgba(18,58,78,0.06)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf7f4] text-2xl text-[#0d4d5b]">
                <FaHandsHelping />
              </div>
              <h3 className="text-2xl font-semibold text-[#123a4e]">Our Vision</h3>
              <p className="mt-4 text-base leading-7 text-[#49656f]">
                To build healthier, more resilient communities where every person has access to essential care, informed choices, and the support needed to thrive.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8 md:px-8 lg:px-12">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#168a74]">
              Our values
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#123a4e] md:text-4xl">
              The principles guiding our work.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[22px] border border-[#dfeae6] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(18,58,78,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf7f4] text-xl text-[#0d4d5b]">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#123a4e]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#49656f]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:px-8 lg:px-12">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#168a74]">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#123a4e] md:text-4xl">
              Practical programs that improve health outcomes.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programAreas.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[18px] border border-[#dfeae6] bg-white p-5 shadow-sm transition hover:border-[#bfe0d5] hover:shadow-[0_12px_35px_rgba(18,58,78,0.04)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf7f4] text-[#0d4d5b]">
                  <FaMedkit />
                </span>
                <span className="text-base font-medium text-[#123a4e]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#ebf5f3] py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#168a74]">
                Our impact
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#123a4e] md:text-4xl">
                Measurable progress, meaningful change.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[22px] border border-[#dfeae6] bg-white p-7 text-center shadow-[0_12px_28px_rgba(18,58,78,0.04)]"
                >
                  <div className="text-4xl font-bold text-[#0d4d5b]">{stat.value}</div>
                  <p className="mt-3 text-sm font-medium text-[#49656f]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 lg:px-12">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#168a74]">
              Our team
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#123a4e] md:text-4xl">
              Trusted leadership with a people-first approach.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-[24px] border border-[#dfeae6] bg-white shadow-[0_18px_40px_rgba(18,58,78,0.06)]"
              >
                <img src={member.image} alt={member.name} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#123a4e]">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-[#168a74]">{member.role}</p>
                  <p className="mt-4 text-sm leading-6 text-[#49656f]">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-8 lg:px-12">
          <div className="rounded-[28px] bg-[#0f2d3b] p-8 text-white shadow-[0_20px_50px_rgba(15,45,59,0.18)] md:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b9f2e2]">
                  Join us
                </p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  Together, We Can Build Healthier Communities.
                </h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a
                  href="#support"
                  className="inline-flex items-center justify-center rounded-full bg-[#5db69e] px-5 py-3.5 text-sm font-semibold text-[#0f2d3b] transition hover:bg-[#82c9b3]"
                >
                  Support Our Work
                </a>
                <a
                  href="#get-involved"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default AboutUs;
