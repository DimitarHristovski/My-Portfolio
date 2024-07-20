import React from "react";
import { CardProps } from "../../interfaces/db";

const Technologies: React.FC<CardProps> = ({ title, items }) => {
  return (
    <div className="cards  m-2 col-12 ">
      <h5>{title}</h5>
      <ul className="list-style-type-none">
        {items.map((item, index) => (
          <li className="wobble" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Technologies;
