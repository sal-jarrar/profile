import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import sal from "../assets/img/sal.jpeg";

const About = () => {
  return (
    <>
      <main id="about">
        <h1 className="lg-heading job-heading">
          About
          <span className="text-second"> Me</span>
        </h1>
        <h2 className="sm-heading job-heading mb-3">
          Let me tell you a few things...
        </h2>
        <div className="about-info">
          <img src={sal} alt="Sal Jarrar" className="bio-image" />

          <div className="bio">
            <h3 className="text-second job-heading">BIO</h3>
            <p>
              First and foremost, I love writing code. Ever since writing my
              first program in JavaScript and manipulating it to produce a
              desired output, I have been obsessed with the idea of using
              software to solve practical problems. Software engineering is a
              never-ending puzzle that I am passionately engaged in solving.
            </p>
          </div>
          <Card className="job job-1">
            <CardHeader>
              <h4 className="job-heading text-second">
                FundStory <span className="text-white px-2"> | </span> Atlanta,
                GA
              </h4>
              <Row className="mt-1">
                <Col>
                  <h6 className="job-title">Full Stack Developer</h6>
                </Col>
                <Col className="mt-1">
                  <p className="text-second">
                    2021-05 <span className="text-white px-1">to</span> Current
                  </p>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <p>
                Fundstory’s all-in-one workflow management software helps
                finance teams: evaluate risk, automate funding options, and
                manage financing into maturity. FundStory replaces multiple
                categories of tools typically used by startups to access and
                manage non dilutive capital, with a single comprehensive
                platform.
              </p>
              <p>
                <span className="text-second">Technologies used:</span>
                MERN Stack Node
                Express,JavaScript,MongoDB,React,Redux,JEST,Bootstrap,Retol,SendGrid,Codat,Heron
              </p>
            </CardBody>
            {/* </div> */}
          </Card>

          <Card className="job job-2">
            <CardHeader>
              <h4 className="job-heading text-second">
                Behaivior, LLC <span className="text-white px-2"> | </span>
                Pittsburgh, PA
              </h4>
              <Row>
                <Col>
                  <h6 className="job-title">Full Stack Developer</h6>
                </Col>
                <Col className="mt-1">
                  <p className="text-second">
                    2021-02 <span className="text-white px-1">to</span> 2021-05
                  </p>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <p>
                Behaivior, LLC, is leveraging machine learning, AI, big data,
                and wearables to recognize patterns in human behavior and
                predict outcomes, intervening when desired. Our first specific
                use will be enabling those battling heroin and opioid addiction
                to avoid relapse when they are in a drug-craving state. The
                technology will also be applicable to other mental health
                concerns such as PTSD and eating disorders.
              </p>
              <p>
                <span className="text-second">Technologies used: </span>
                JavaScript,Typescript,React,Redux,Firebase,REST API,Material-UI,
              </p>
            </CardBody>
          </Card>

          <Card className="job job-3">
            <CardHeader>
              <h4 className="job-heading text-second">
                StockSwap, LLC<span className="text-white px-2"> | </span>St.
                Louis, MO
              </h4>
              <Row>
                <Col>
                  <h6 className="job-title">Back-End Developer</h6>
                </Col>
                <Col className="mt-1">
                  <p className="text-second">
                    2021-04 <span className="text-white px-1">to</span> 2021-12
                  </p>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <p>
                StockSwap is a social finance mobile application for investors
                in the stock market. Users have the ability to connect their
                brokerage accounts, show off their portfolio, show their trades,
                post blurbs or videos about the market, search individual stock
                information, news articles, and users, and view standings among
                their friends and across the entire app.
              </p>
              <p>
                <span className="text-second">Technologies used: </span>
                Node Express,JavaScript,JEST,AWS,GraphQL,Docker
              </p>
            </CardBody>
          </Card>
        </div>
      </main>
    </>
  );
};

export default About;
