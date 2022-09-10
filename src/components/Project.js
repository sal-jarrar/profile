import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ href, img, gitLink }) => {
  return (
    <div className="item">
      <a href={href}>
        <img src={img} alt="Project" />
      </a>
      <a href={href} className="btn-light">
        <FontAwesomeIcon icon={faEye} /> Project
      </a>
      <a href={gitLink} className="btn-dark">
        <FontAwesomeIcon icon={faGithub} /> Github
      </a>
    </div>
  );
};

export default Project;
