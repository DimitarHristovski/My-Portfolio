import React from "react";
import SocialMedias from "./Services/socialMedias";
const About = () => {
  return (
    <div className="container-fluid py-3">
      <div className="row">
        <div className="col-10 text-center d-flex  justify-content-between m-auto flex-column flex-md-row ">
          <div className="col-sm-10 py-2 col-md-5 align-self-center">
            {" "}
            <h1>About My Self</h1>
            <p>
              An entrepreneurial minded and an adaptable young man, seeking
              full-time employment, that will give me an opportunity to continue
              to grow my leadership skills as well as expand my technical
              knowledge. My education in computer science combined with my
              natural curiosity and an analytical mind allow me to tackle
              quantitative problems. An ideal job would give me an opportunity
              to learn new skills, have a vested stake in individual projects,
              and do something different every day.
            </p>
          </div>{" "}
          <div className="col-sm-10 m-0 py-2 col-md-5 align-content-center offset-1">
            <SocialMedias num={0} text={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
