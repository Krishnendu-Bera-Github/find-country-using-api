import React from "react";
import "./card.css";

const Card = ({ name, population, region, capital, image }) => {
  return (
    <div className="container">
      <div className="card-box">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="country-info">
          <h3>{name}</h3>
          <div className="details">
            <p>
              Population: <span>{population}</span>{" "}
            </p>
            <p>
              Region: <span>{region}</span>{" "}
            </p>
            <p>
              Capital: <span>{capital}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
