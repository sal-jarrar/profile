import Project from "../components/Project";
import { projects } from "../constant/constants";

const Work = () => {
  return (
    <main id="work">
      <h1 className="lg-heading">
        My
        <span className="text-secondary"> Work</span>
      </h1>
      <h2 className="sm-heading">Check out some of my projects...</h2>
      <div className="projects">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
};

export default Work;
