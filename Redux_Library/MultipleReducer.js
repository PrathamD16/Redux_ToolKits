const redux = require("@reduxjs/toolkit");

//This will help in binding the all the actions related to store and it will dispatch automatically without using dispatcher function
const bindActionCreators = redux.bindActionCreators;
const { combineReducers } = redux;

//Action type
const CAKE_ORDERD = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";
const ICE_ORDERED = "ICECREAM_ORDERED";
const ICE_RESTOCK = "ICECREAM_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERD,
  };
}

function restock() {
  return {
    type: CAKE_RESTOCK,
    payload: 5,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ICE_ORDERED,
    payload: qty,
  };
}

function restockIcecream(qty = 1) {
  return {
    type: ICE_RESTOCK,
    payload: qty,
  };
}

//Creating a action which will take a arguement
function restock(count = 0) {
  return {
    type: CAKE_RESTOCK,
    payload: count,
  };
}

//Initial State
// const initialState = {
//   numberOfCakes: 10,
//   numberOfIcecream: 10,
// };

//Creating seperate cake and ice-cream states
const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIcecream: 10,
};

//Reducer function which is generally the store
const Cakereducer = (shop = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERD:
      return {
        ...shop,
        numberOfCakes: shop.numberOfCakes - 1,
      };
    case CAKE_RESTOCK:
      return {
        ...shop,
        numberOfCakes: shop.numberOfCakes + action.payload,
      };
    default:
      return shop;
  }
};

const IceCreamReducer = (shop = initialIceCreamState, action) => {
  switch (action.type) {
    case ICE_ORDERED:
      return {
        ...shop,
        numberOfIcecream: shop.numberOfIcecream - action.payload,
      };
    case ICE_RESTOCK:
      return {
        ...shop,
        numberOfIcecream: shop.numberOfIcecream + action.payload,
      };
    default:
      return shop;
  }
};

//Setting redux
const reducer = combineReducers({
  cake: Cakereducer,
  iceCream: IceCreamReducer,
});

//You need to pass reducer as object name, no other name is accepted
const store = redux.configureStore({ reducer });

console.log("Currently Number of cakes: ", store.getState());

store.subscribe(() => {
  console.log("Now cakes left are: ", store.getState());
});

//This is how bind action works
const action = bindActionCreators(
  { restock, orderCake, orderIcecream, restockIcecream },
  store.dispatch
);

action.orderCake();
action.orderCake();
action.restock();
action.orderCake();
action.orderIcecream(6);
action.restock(3);
