import React from "react";

interface CardProps {
  title: string;
  items: string[];
}

const Card: React.FC<CardProps> = ({ title, items }) => {
  return (
    <div className="cards  m-2 ">
      <h5>{title}</h5>
      <ul>
        {items.map((item, index) => (
          <li className="wobble" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
