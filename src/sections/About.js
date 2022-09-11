import React from "react";

const About = () => {
  return (
    <>
      <main id="about">
        <h1 className="lg-heading job-heading">
          About
          <span className="text-second"> Me</span>
        </h1>
        <h2 className="sm-heading job-heading">
          Let me tell you a few things...
        </h2>
        <div className="about-info">
          <img src="img/portrait.jpg" alt="Sal Jarrar" className="bio-image" />

          <div className="bio">
            <h3 className="text-second job-heading">BIO</h3>
            <p>
              First and foremost, I love writing code. Ever since writing my
              first program in JavaScript and manipulating it to produce a
              desired output, I have been obsessed with the idea of using
              software to solve practical problems. Software engineering is a
              never-ending puzzle that I am passionately engaged in solving.
            </p>

            <p>
              I love applying responsive design principles and watching my web
              pages shrink into mobile screens and still look amazing. It's
              oddly satisfying. I think in a way I'm kind of like those web
              pages; I'm moldable, but I still keep my creative flare intact.
            </p>
          </div>

          <div className="job job-1">
            <h3 className="job-heading text-second">FundStory | Atlanta, GA</h3>
            <h5 className="job-title">Full Stack Developer</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo.
            </p>
          </div>

          <div className="job job-2">
            <h3 className="job-heading text-second">
              Behaivior, LLC | Pittsburgh, PA
            </h3>
            <h5 className="job-title">Full Stack Developer</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo.
            </p>
          </div>

          <div className="job job-3">
            <h3 className="job-heading text-second">StockSwap LLC</h3>
            <h5 className="job-title">Back-End Developer</h5>
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
