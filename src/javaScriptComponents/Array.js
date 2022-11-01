import React from "react";
// import Yes from "../Yes";

const Array = () => {
  // const person = {["Okey","Mathew","Mary","Agnes","Emeka","Tobi"]}

  const persons = ["Abigail ", " Mabel", "  Chris", " Austin"];

  // JSX Elements
  const person = [
    <h3>Abigail</h3>,
    <h3>Mabel</h3>,
    <h3>Chris</h3>,
    <h3>Tobis</h3>,
  ];

  return (
    <div className="arrayObject">
      <h2>{persons}</h2>

      {/* Or  */}
      <h3> {["Abigail ", " Mabel", "  Chris", " Austin"]} </h3>

      {person}
      {/* <Yes /> */}
    </div>
  );
};

export default Array;
