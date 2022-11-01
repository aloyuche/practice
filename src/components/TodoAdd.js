import React from "react";

const TodoAdd = () => {
  const [things, setThings] = React.useState(["Thing 1"]);

  function addNum() {
    const newThingText = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingText]);
  }
  function reduceNum() {
    const removeThing = ` ${things.pop()}`;
    setThings((nextState) => [...nextState, removeThing]);
  }
  const thingElement = things.map((thing) => <p key={thing}>{thing}</p>);
  return (
    <div>
      <button onClick={addNum}> Add Things</button>
      <ol>
        <li className="todo_content">{thingElement}</li>
      </ol>
      <button onClick={reduceNum}>Remove Things</button>
    </div>
  );
};

export default TodoAdd;
