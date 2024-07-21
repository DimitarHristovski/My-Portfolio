import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { devStats } from "../../data/data";
import { Stats } from "../../interfaces/db";
const SocialMedias: React.FC<Stats> = () => {
  return (
    <div>
      <ul className="d-flex list-style-type-none  p-0 justify-content-around">
        <li>
          <a
            href="https://github.com/DimitarHristovski"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dimitar-hristovski-1711a9163"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/dimihbt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/9dh4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDribbble} size="3x" />
          </a>
        </li>
      </ul>
      <div className="d-flex flex-column justify-content-center flex-md-row col-12">
        {devStats.map((stats, index) => (
          <div key={index} className=" justify-content-center   ">
            <p className="fs-2 text-primary ">{stats.num}</p>
            <p className="fw-bold ">{stats.text}</p>
          </div>
        ))}
      </div>{" "}
      <button className="btn-primary bg-primary  rounded text-light" disabled>
        Download CV
      </button>
    </div>
  );
};

export default SocialMedias;
