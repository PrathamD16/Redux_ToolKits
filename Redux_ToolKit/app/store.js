const cakeReducer = require("../Feature/cake/caksSlice");
const iceCreamReducer = require("../Feature/icecream/iceCreamSlice");

const reduxLogger = require("redux-logger");  //setting logger

const configureStore = require("@reduxjs/toolkit").configureStore;

const logger = reduxLogger.createLogger();//setting logger

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
  
  // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
  // middleware:[logger]
});

//both the approaches for logger will work

module.exports = store;


//extra reducers are the reducers where more than 1 reducers respond or perform action on same action call
//Scenario: When a cake is ordered the ice-cream will also be reduced by 1