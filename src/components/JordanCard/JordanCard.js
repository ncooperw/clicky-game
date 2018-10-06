import React from "react";
// import jordans from "./jordans.json";
import "./JordanCard.css";

const JordanCard = props => (
    <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
    </div>
);

export default JordanCard;