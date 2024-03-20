import { INCREMENT, DECREMENT, RESET } from "./actions.types";
let count = 0;
export const INCREMENT = () => {
  return {
    type: "INCREMENT",
    count: ++count,
  };
};
export const DECREMENT = () => {
  return {
    type: "DECREMENT",
    count: --count,
  };
};
export const RESET = () => {
  count = 0;
  return {
    type: "RESET",
    count: 0,
  };
};
