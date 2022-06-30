import React from "react";
import { useState } from "react";
import "./Item.css";
const Item = ({ card }) => {
  const { name, img, options } = card;
  const [showLogo, setShowLogo] = useState(true);

  return (
    <div
      className="card"
      onClick={() => {
        setShowLogo(!showLogo);
      }}
    >
      {showLogo ? (
        <div>
          <img className="language-logo" src={img} alt="" />
          <h3 className="card-title">{name} </h3>
        </div>
      ) : (
        <ul>
          {options.map((element, index) => {
            return <li key={index}>{element} </li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
