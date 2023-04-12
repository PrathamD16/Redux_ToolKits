//Importing redux
const redux = require("@reduxjs/toolkit");
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

//Creating action
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
      return shop
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
      return shop
  }
};

//Using combine reducer:
const reducer = combineReducers({
  cake:cakeReducer,
  iceCream:iceCreamReducer
})

const store = redux.configureStore({reducer})
console.log('Initial State: ', store.getState())
store.subscribe(() => console.log('Updated states: ', store.getState()))

const action = bindActionCreators({orderCake,restockCake,orderIcecream,restockIcecream},store.dispatch)

action.orderCake()
action.orderIcecream()
action.restockCake(5)
action.restockIcecream(5)
action.orderCake()
action.orderCake()
action.orderCake()

