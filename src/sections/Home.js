import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Home = ({ status }) => {
  const overlay = status ? "overlay" : "";
  return (
    <main id={`home`} className={overlay}>
      <h1 className="lg-heading">
        Sal
        <span className="text-second"> Jarrar</span>
      </h1>
      <h2 className="sm-heading">
        Full Stack Engineer , Web Developer & Programmer
      </h2>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/sal-jarrar-570b0410b/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
        </a>
        <a
          href="https://github.com/sal-jarrar"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="fa-2x" />
        </a>
      </div>
    </main>
  );
};

export default Home;
