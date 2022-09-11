import ReactTooltip from "react-tooltip";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ id, href, img, gitLink }) => {
  console.log("id", id);
  return (
    <>
      <div className="item">
        <a href={href}>
          <img src={img} alt="Project" />
        </a>
        <a
          href={href}
          className="btn-light"
          target="_blank"
          rel="noreferrer"
          data-tip={""}
        >
          <FontAwesomeIcon icon={faEye} /> Project
        </a>

        <a
          href={gitLink}
          className="btn-dark"
          target={`${id !== 1 ? "_blank" : ""}`}
          rel="noreferrer"
          data-tip={`${id === 1 ? "Private github repository" : ""}`}
          data-place={`${id === 1 ? "left" : ""}`}
        >
          <FontAwesomeIcon icon={faGithub} delayUpdate={1000} /> Github
        </a>
      </div>
      <ReactTooltip />
    </>
  );
};

export default Project;
