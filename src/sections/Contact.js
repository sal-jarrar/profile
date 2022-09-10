import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <main id="contact">
        <h1 className="lg-heading job-heading">
          Contact
          <span className="text-secondary job-heading"> Me</span>
        </h1>
        <h2 className="sm-heading job-heading">
          This is how you can reach me...
        </h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email: </span> jarrarsal@gmail.com
          </div>
          <div>
            <span className="text-secondary">Phone: </span> (707) 334-9493
          </div>
          <div>
            <span className="text-secondary">Address: </span> Vallejo - CA
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
