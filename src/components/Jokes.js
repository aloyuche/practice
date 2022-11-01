import React from "react";

const Jokes = (props) => {
  return (
    <div className="jokes">
      {props.setup} && <h3> {props.setup} </h3>
      <p> {props.punchline} </p>
      <hr />
    </div>
  );
};

export default Jokes;
