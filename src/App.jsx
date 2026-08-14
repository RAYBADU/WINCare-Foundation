import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const impactStats = [
  { value: "15k+", label: "People supported" },
  { value: "42", label: "Volunteer-led projects" },
  { value: "98%", label: "Community satisfaction" },
];

const outreachPrograms = [
  {
    title: "School Support",
    description:
      "Providing school supplies, mentoring, and practical assistance to students in underserved communities.",
  },
  {
    title: "Health Outreach",
    description:
      "Running health campaigns and wellness checks to support families with accessible healthcare resources.",
  },
  {
    title: "Emergency Relief",
    description:
      "Responding quickly with food, basic supplies, and compassionate aid during times of urgent need.",
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-[#f7faf7] text-[#123928]">
      <Nav />

      <main className="pt-28">
        <Hero />

        <section className="mx-auto max-w-6xl px-4 py-10 md:px-8 lg:px-12">
          <div className="rounded-[2rem] bg-[#edf7ee] p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
                  Our impact
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[#123928] md:text-4xl">
                  A stronger community starts with care.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {impactStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#dfeadf]"
                  >
                    <div className="text-3xl font-bold text-[#123928]">
                      {item.value}
                    </div>
                    <p className="mt-2 text-sm text-[#4a655a]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="outreaches"
          className="mx-auto max-w-6xl px-4 py-12 md:px-8 lg:px-12"
        >
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
              Our outreach
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#123928] md:text-4xl">
              Programs designed to serve and restore.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {outreachPrograms.map((program) => (
              <div
                key={program.title}
                className="rounded-[1.75rem] bg-white p-6 shadow-[0_18px_40px_rgba(18,57,40,0.08)] ring-1 ring-[#e7efe9]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf7ee] text-xl text-[#1d4d3a]">
                  ❤
                </div>
                <h3 className="text-xl font-semibold text-[#123928]">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#4a655a]">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-6xl px-4 py-12 md:px-8 lg:px-12"
        >
          <div className="rounded-4xl bg-[#123928] p-8 text-[#edf8f1] md:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a9d1b6]">
                  Who we are
                </p>
                <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                  We believe every community deserves dignity and opportunity.
                </h2>
              </div>

              <p className="text-base leading-7 text-[#dfeee3]">
                WINCare brings together volunteers, donors, and local partners
                to respond to real needs with practical action and heartfelt
                support.
              </p>
            </div>
          </div>
        </section>

        <section
          id="donate"
          className="mx-auto max-w-6xl px-4 py-12 md:px-8 lg:px-12"
        >
          <div className="rounded-[2rem] border border-[#dfeadf] bg-white p-8 text-center shadow-[0_18px_40px_rgba(18,57,40,0.05)] md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
              Take action
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#123928] md:text-4xl">
              Your support can change a life today.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#4a655a]">
              Whether through giving, volunteering, or sharing the mission, you
              can help bring practical hope to families and communities in need.
            </p>

            <button className="text-white">
              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#5baa8a] px-5 py-4 text-sm font-semibold transition "
              >
                Support a cause
              </a>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
