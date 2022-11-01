import React from "react";

const UsingTerniary = () => {
  const isGoingOut = false;
  //   Using ternary in React
  // let answer = isGoingOut === true ? "Yes" : "No";
  return (
    <div className="state">
      <h2 className="state-title">Do you Feel Like Going Out Tonight?</h2>
      <h2 className="state-value">{isGoingOut ? "Yes" : "No"}</h2>
    </div>
  );
};

export default UsingTerniary;
