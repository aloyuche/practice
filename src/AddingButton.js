import React from "react";

const AddingButton = () => {
  const [things, setThings] = React.useState(["Thing 1", " Thing 2"]);

  function addNum() {
    const newThingText = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingText]);
  }
  const thingElement = things.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div className="addContent">
      <button onClick={addNum}> Add Things</button>
      {thingElement}
    </div>
  );
};

export default AddingButton;
