import { Button, UncontrolledTooltip } from "reactstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ id, href, img, gitLink, toggle }) => {
  return (
    <>
      <div className="item mt-4">
        <a href={href}>
          <img src={img} alt="Project" />
        </a>
        {id === 1 ? (
          <Button
            block
            className="btn-lighten text-start"
            onClick={() => toggle()}
          >
            <FontAwesomeIcon icon={faEye} /> Project
          </Button>
        ) : (
          <a
            href={href}
            className="btn-lighten"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEye} /> Project
          </a>
        )}

        <a
          href={gitLink}
          className="btn-dark"
          target={`${id !== 1 ? "_blank" : ""}`}
          rel="noreferrer"
          id={`${id === 1 ? "tooltip" : ""}`}
        >
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>

      <UncontrolledTooltip target="tooltip">
        Private github repository!
      </UncontrolledTooltip>
    </>
  );
};

export default Project;
