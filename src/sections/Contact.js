import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <main id="contact">
        <h1 class="lg-heading">
          Contact
          <span class="text-secondary"> Me</span>
        </h1>
        <h2 class="sm-heading">This is how you can reach me...</h2>
        <div class="boxes">
          <div>
            <span class="text-secondary">Email: </span> jarrarsal@gmail.com
          </div>
          <div>
            <span class="text-secondary">Phone: </span> (707) 334-9493
          </div>
          <div>
            <span class="text-secondary">Address: </span> Vallejo - CA
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
