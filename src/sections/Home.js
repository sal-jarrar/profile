import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Home = ({ status }) => {
  const overlay = status ? "overlay" : "";
  return (
    <main id={`home`} className={overlay}>
      <h1 className="lg-heading">
        Sal
        <span className="text-secondary"> Jarrar</span>
      </h1>
      <h2 className="sm-heading">
        Full Stack Engineer , Web Developer & Programmer
      </h2>
      <div className="icons">
        <a href="#!">
          <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
        </a>

        <a href="#!">
          <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
        </a>
        <a href="#!">
          <FontAwesomeIcon icon={faGithub} className="fa-2x" />
        </a>
      </div>
    </main>
  );
};

export default Home;
