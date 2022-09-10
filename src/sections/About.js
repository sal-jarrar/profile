import React from "react";

const About = () => {
  return (
    <>
      <main id="about">
        <h1 className="lg-heading job-heading">
          About
          <span className="text-secondary"> Me</span>
        </h1>
        <h2 className="sm-heading job-heading">
          Let me tell you a few things...
        </h2>
        <div className="about-info">
          <img src="img/portrait.jpg" alt="Sal Jarrar" className="bio-image" />

          <div className="bio">
            <h3 className="text-secondary job-heading">BIO</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              magni nam nisi quae vitae? Quod molestiae ipsa autem natus eum vel
              ducimus nulla harum voluptatem eligendi! Unde, reiciendis?
              Praesentium, laborum.
            </p>
          </div>

          <div className="job job-1">
            <h3 className="job-heading">123 Webshop</h3>
            <h6>Full Stack Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo.
            </p>
          </div>

          <div className="job job-2">
            <h3 className="job-heading">Designers ABC</h3>
            <h6>Front End Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo.
            </p>
          </div>

          <div className="job job-3">
            <h3 className="job-heading">Webworks</h3>
            <h6>Graphic Designer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
