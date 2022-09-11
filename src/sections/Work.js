import { useState } from "react";
import FundStoryModel from "../components/FundStoryModel";
import Project from "../components/Project";
import { projects } from "../constant/constants";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <main id="work">
        <h1 className="lg-heading job-heading">
          My
          <span className="text-second job-heading"> Work</span>
        </h1>
        <h2 className="sm-heading job-heading">
          Check out some of my projects...
        </h2>
        <div className="projects">
          {projects.map((project) => (
            <Project key={project.id} {...project} toggle={toggle} />
          ))}
        </div>
      </main>
      <FundStoryModel toggle={toggle} isOpen={isOpen} />
    </>
  );
};

export default Work;
