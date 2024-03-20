import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const { amount } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <h4>{amount}</h4>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
