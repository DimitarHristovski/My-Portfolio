import React from "react";
import Card from "./card";
import { categories } from "../data/data";
const CardContainer: React.FC = () => {
  return (
    <div className="card-container  d-flex flex-wrap m-auto flex-column">
      <h1 className="text-center">Technologies</h1>{" "}
      <div className=" d-flex flex-wrap m-auto justify-content-center col-12">
        {categories.map((category, index) => (
          <div className="col-md-6 d-flex justify-content-center col-sm-12">
            <Card key={index} title={category.title} items={category.items} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
