const redux = require("@reduxjs/toolkit");

//Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//Functions
function click(action) {
  return {
    type: action,
  };
}

//Initial State
const intitalState = {
  counter: 10,
}

//reducer function
const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
    };
    default:
        return state
  }
};

//Configuring the store
const store = redux.configureStore({reducer})
console.log('Initial State ',  store.getState())

store.subscribe(() => console.log('Updated State ', store.getState()))

store.dispatch(click(INCREMENT))
store.dispatch(click(INCREMENT))
store.dispatch(click(INCREMENT))
store.dispatch(click(DECREMENT))


