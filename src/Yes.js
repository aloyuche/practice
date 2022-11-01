import React from "react";

export default function Yes() {
  const [result, setIsImportant] = React.useState("Yes");

  function handleClick() {
    setIsImportant("No");
  }

  const [count, setCount] = React.useState(0);

  /*
    Note: if you ever need the old value of state
    to help you determine the new value of state,
    you should pass a callback function to your
    state setter function instead of using state 
    directly. This callback function will receive
    the old value of state as its parameter, which
    you can then use to determine your new value of
    state.

  */

  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  function minus() {
    setCount(count - 1);
  }

  return (
    <div className="state">
      <h4 className="state-title">Is state important to know?</h4>
      <div className="state-value" onClick={handleClick}>
        <h2>{result}</h2>
      </div>
      <div className="counter">
        <button className="counter-minus" onClick={minus}>
          -
        </button>
        <div className="counter--count">
          <h1>{count}</h1>
        </div>
        <button className="counter-add" onClick={add}>
          +
        </button>
      </div>
    </div>
  );
}
