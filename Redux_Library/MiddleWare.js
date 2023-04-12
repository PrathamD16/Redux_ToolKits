//This is about middleware....
/* Middleware is a property of redux which act as 'dispatch' function and 'subscribe' function of redux
It basically is combination of these 2 function, with addition that it gives you the time on which the action was executed*/

//Middleware shows the initial state, the action performed and updated state

//To enable middleware we need a logger, which comes from redux-logger

const redux = require("@reduxjs/toolkit");
const { combineReducers } = redux;

//This will help in binding the all the actions related to store and it will dispatch automatically without using dispatcher function
const bindActionCreators = redux.bindActionCreators;

//MiddleWare
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERD = "CAKEORDERED";
const CAKE_RESTOCK = "CAKERESTOCK";
const ICE_ORDERED = "ICECREAMORDER";
const ICE_RESTOCK = "ICECREAMRESTOCK";

//Creating function
const orderCake = () => {
  return {
    type: CAKE_ORDERD,
    payload: 1,
  };
};

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCK,
    payload: qty,
  };
};

const orderIcecream = () => {
  return {
    type: ICE_ORDERED,
    payload: 1,
  };
};

const restockIcecream = (qty = 1) => {
  return {
    type: ICE_RESTOCK,
    payload: qty,
  };
};

//Creating 2 seperate initial state
const cakeInitialState = {
  numberOfCakes: 10,
};

const iceCreamInitialState = {
  numberOfIceCream: 10,
};

//Creating 2 seperate Reducers
const cakeReducer = (shop = cakeInitialState, action) => {
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

const iceCreamReducer = (shop = iceCreamInitialState, action) => {
  switch (action.type) {
    case ICE_ORDERED:
      return {
        ...shop,
        numberOfIceCream: shop.numberOfIceCream - 1,
      };
    case ICE_RESTOCK:
      return {
        ...shop,
        numberOfIceCream: shop.numberOfIceCream + action.payload,
      };
    default:
      return shop;
  }
};

//Using combine reducer:
const Rootreducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//We can pass multiple middleware by passing all the required middleware in an array using property 'middleware'
const store = redux.configureStore({
  reducer: Rootreducer,
  middleware: [logger],
});
console.log("Initial State: ", store.getState());
// store.subscribe(() => console.log('Updated states: ', store.getState())) //Because we are using middleware

const action = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);

action.orderCake();
action.orderIcecream();
action.restockCake(5);
action.restockIcecream(5);
action.orderCake();
action.orderCake();
action.orderCake();
