import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    // <div id="bg-img">

    <main id="home">
      // <div className="overlay"></div>
      <h1 className="lg-heading">
        John
        <span className="text-secondary">Doe</span>
      </h1>
      <h2 className="sm-heading">
        Web Developer, Programmer, Designer & Entrepreneur
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
    // </div>
  );
};

export default Home;
