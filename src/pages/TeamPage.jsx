import React from "react";

import TeamHero from "../components/TeamHero";
import TeamIntroduction from "../components/TeamIntroduction";
import TeamMembers from "../components/TeamMembers";
import GovernanceSection from "../components/GovernanceSection";
import CommitmentSection from "../components/CommitmentSection";
import Team from "../components/Team";

const TeamPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbf9]">
      <TeamHero />
      <TeamIntroduction/>
      <TeamMembers/>
      <Team/>
      <GovernanceSection/>
      <CommitmentSection/>

     
    </main>
  );
};

export default TeamPage;