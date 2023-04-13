const cakeReducer = require("../Feature/cake/caksSlice");
const iceCreamReducer = require('../Feature/icecream/iceCreamSlice')
const configureStore = require("@reduxjs/toolkit").configureStore;

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream:iceCreamReducer
  },
});

module.exports = store
