import React from "react";
import { CardProps } from "../../interfaces/db";

const toValidId = (title: any) => {
  return title.replace(/[^a-zA-Z0-9-_]/g, "");
};

const Technologies: React.FC<CardProps> = ({ title, items }) => {
  const safeTitleId = toValidId(title);

  return (
    <div className="accordion-item ">
      <h2 className="accordion-header" id={`heading${safeTitleId}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${safeTitleId}`}
          aria-expanded="false"
          aria-controls={`collapse${safeTitleId}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${safeTitleId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${safeTitleId}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <ul className="list-group list-group-flush">
            {items.map((item, index) => (
              <li className="list-group-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
