import React from "react";
import { useState } from "react";
// import Props from "./Props";

const Welcome = () => {
  const [x, setValue] = useState(0);
  const [message, setMessage] = useState("");
  const [isDisabled, toggledDisabled] = useState(false);

  const IncreaseValue = () => {
    setValue((previousValue) => {
      return ++previousValue;
    });
    toggledDisabled(false);
    setMessage("The value is incresing");
  };
  const DecreaseValue = () => {
    setValue((previousValue) => {
      if (previousValue === 0) {
        setMessage("Cannot decrease again");
        toggledDisabled(true);
        return previousValue;
      }
      return --previousValue;
    });
    setMessage("Decreasing the value");
  };
  return (
    <div className="container">
      {/* <Props
        propValue={x}
        propMessage={message}
        propIncrement={IncreaseValue}
        propDecrement={DecreaseValue}
        propIsDisable={isDisabled}
      /> */}
      <button onClick={IncreaseValue}>Increment</button>
      <p className="value">{x}</p>
      <p>{message}</p>
      <button onClick={DecreaseValue} disabled={isDisabled}>
        Decrement
      </button>
    </div>
  );
};

export default Welcome;
