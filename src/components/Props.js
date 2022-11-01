const Props = (
  propIncrement,
  propDecrement,
  propMessage,
  propIsDisable,
  propValue
) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={propIncrement}>
        Increment
      </button>
      <p>{propValue}</p>
      <p>{propMessage}</p>
      <button onClick={propDecrement} disabled={propIsDisable}>
        Decrement
      </button>
    </div>
  );
};

export default Props;
