import React from "react";

import ProjectsHero from "../components/ProjectsHero";
import ProjectExplorer from "../components/ProjectExplorer";
import FeaturedProject from "../components/FeaturedProject";

import BehindProject from "../components/BehindProject";
import ProjectJourney from "../components/ProjectJourney";
import UpcomingProjects from "../components/UpcomingProjects";
import ProjectsCTA from "../components/ProjectsCTA";

const Projects = () => {
  return (
    <main className="overflow-hidden bg-[#f7fbf8] text-[#123928] pt-22">
      <ProjectsHero />
      <ProjectExplorer />
      <FeaturedProject />
      <BehindProject />
      <ProjectJourney />
      <UpcomingProjects />
      <ProjectsCTA />
    </main>
  );
};

export default Projects;