import React from "react";
import Eugene from "../assets/team-images/Eugene.jpg";
import Emma from "../assets/team-images/Emmanuel.jpg"
import Nana from "../assets/team-images/Nana.jpg"

const teamMembers = [
  {
    name: "Dr. Eugene Attah Wireko",
    role: "President",
    image: Eugene,
  },
  {
    name: "Nana Adjoa Sarkwa",
    role: " Head of Administration",
    image: Nana,
  },
  {
    name: "Emmanuel Boateng",
    role: " Head of Communications",
    image: Emma,
  },

];

const Team = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 lg:px-12">
  <div className="mb-10 text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
      Our team
    </p>

    <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-[#173b2d] md:text-5xl">
      Trusted leadership with a <span className="text-[#4a9577]">people-first approach.</span> 
    </h2>
     <p className="mt-5 leading-7 text-gray-600 text-center">
            A dedicated team united by compassion, purpose, and a comittment to serving others.
          </p>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    {teamMembers.map((member) => (
      <div
        key={member.name}
        className="group overflow-hidden rounded-[24px] border border-[#dfeadf] bg-white shadow-[0_18px_40px_rgba(18,57,40,0.06)]"
      >
        <div className="overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="h-72 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#123928]">
            {member.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-[#2e7d5a]">
            {member.role}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
  );
};

export default Team;
