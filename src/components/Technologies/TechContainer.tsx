import React from "react";
import Technologies from "./technologies";
import { categories } from "../../data/data";

const CardContainer: React.FC = () => {
  return (
    <div className="card-container mx-2 py-2 d-flex flex-column align-items-center ">
      <h1 className="text-center mb-3">Technologies</h1>
      <div
        className="accordion col-md-8 col-12  justify-content-center"
        id="accordionExample"
      >
        {categories.map((category, index) => (
          <Technologies
            key={index}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
