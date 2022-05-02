import { createStore } from "redux";

function reducer(state = { value: 0, step: 1, max: Infinity }, action) {
  switch (action.type) {
    case "increment":
      return { ...state, value: state.value + state.step };
    case "decrement":
      if (state.value > 0) {
        return { ...state, value: state.value - state.step };
      } else {
        return { ...state, value: 0 };
      }
    case "updateStep":
      return { ...state, step: action.payload };
    case "updateMax":
      return { ...state, max: action.payload };
    case "reset":
      return { ...state, value: 0, step: 1, max: Infinity };
    default:
      return state;
  }
}

let store = createStore(reducer);
export default store;
