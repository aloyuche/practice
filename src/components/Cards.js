import React from "react";
import face from "./images/icons/facebk.png";
import whats from "./images/icons/wahts.png";
import linked from "./images/icons/linkedin.png";
const Cards = (props) => {
  return (
    <div className="sect">
      <img src={props.image} width="100%" alt="" />
      <h3 style={{ padding: "10px" }}> {props.title} </h3>
      <p className="descr">{props.descr}</p>
      <p>
        <img src={face} width="20" alt="" style={{ cursor: "pointer" }} />{" "}
        <img src={whats} width="20" alt="" style={{ cursor: "pointer" }} />{" "}
        <img src={linked} width="20" alt="" style={{ cursor: "pointer" }} />
      </p>
    </div>
  );
};

export default Cards;
