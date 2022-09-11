import React from "react";
import Footer from "../components/Footer";
import resume from "../assets/resume.pdf";

const Contact = () => {
  return (
    <>
      <main id="contact">
        <h1 className="lg-heading job-heading">
          Contact
          <span className="text-second job-heading"> Me</span>
        </h1>
        <h2 className="sm-heading job-heading">
          This is how you can reach me...
        </h2>
        <div className="boxes">
          <div>
            <span className="text-second">Email: </span> jarrarsal@gmail.com
          </div>
          <div>
            <span className="text-second">Phone: </span> (707) 334-9493
          </div>
          <div>
            <span className="text-second">Address: </span> Vallejo - CA
          </div>
          <div>
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              // class="btn btn-outline-secondary my-3"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
