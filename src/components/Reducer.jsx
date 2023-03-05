import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      break;
  }
}
const initialState = {
  count: 0,
  theme: "light",
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        -
      </button>
      <span>{state.count}</span>
      <span>Theme: {state.theme}</span>
      <button onClick={() => dispatch({ type: "increment", payload: 3 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "toggleTheme" })}>Toggle</button>
    </div>
  );
};

export default Reducer;
