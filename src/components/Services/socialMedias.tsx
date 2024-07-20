import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedias: React.FC = () => {
  return (
    <div>
      <div>Download CV</div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedias;
