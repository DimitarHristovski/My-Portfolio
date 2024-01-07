import React from "react";
import Card from "./card";
import { categories } from "../data/data";
const CardContainer: React.FC = () => {
  return (
    <div className="card-container  d-flex flex-wrap m-auto flex-column">
      <h1 className="text-center">Technologies</h1>{" "}
      <div className="row  justify-content-center ">
        {categories.map((category, index) => (
          <div className="col-lg-5  col-md-6 col-sm-12 justify-content-center">
            <Card key={index} title={category.title} items={category.items} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
