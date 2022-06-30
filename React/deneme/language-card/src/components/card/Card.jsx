import "./Card.css";
import React from "react";
import { languages } from "../../helpers/data";
import Item from "../item/Item";

const Card = () => {
  return (
    <div className="card-container">
      <div className="bars"></div>
      <h1 className="title">Languages</h1>
      <div className="cards">
        {languages.map((item, index) => {
          return <Item card={item} />;
        })}
      </div>
    </div>
  );
};

export default Card;
