const store = require("./app/store");
const cakeActions = require("./Feature/cake/caksSlice").cakeActions;
const icecreamActions =
  require("./Feature/icecream/iceCreamSlice").iceCreamAction;

console.log("Initial State: ", store.getState());
store.subscribe(() => {
  console.log("Updated state: ", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restock(4));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restock(1));
