import React from "react";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row m-3">
        <img
          src="/Design/avatar.png"
          alt="avatar"
          className="col-12  col-md-5 m-auto fixed shakeit img-rounded"
        />
      </div>
      <div className="row">
        <div className="col-10     text-center p-4 d-flex  justify-content-center m-auto flex-column flex-md-row ">
          <div className="col-sm-10  col-md-5 align-self-center">
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
          <img
            src="/Design/colorful.png"
            alt="colorful"
            className="col-12 shakeit col-md-5 m-auto fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
