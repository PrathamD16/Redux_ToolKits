const redux = require('@reduxjs/toolkit')

//This will help in binding the all the actions related to store and it will dispatch automatically without using dispatcher function
const bindActionCreators = redux.bindActionCreators

//Action type
const CAKE_ORDERD = 'CAKE_ORDERED'
const CAKE_RESTOCK = 'CAKE_RESTOCK'

function orderCake(){
    return {
        type:CAKE_ORDERD
    }
}

function restock(){
    return {
        type:CAKE_RESTOCK,
        payload:5,
    }
}

//Creating a action which will take a arguement
function restock(count = 0){
    return {
        type:CAKE_RESTOCK,
        payload:count,
    }
}

//Initial State
const initialState = {
    numberOfCakes: 10,
}

//Reducer function which is generally the store
const reducer = (shop = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERD:
            return {
                ...shop,
                numberOfCakes:shop.numberOfCakes - 1
            }
        case CAKE_RESTOCK:
            return {
                ...shop,
                numberOfCakes:shop.numberOfCakes + action.payload
            }
        default:
            return shop
    }
}

//Setting redux
const store = redux.configureStore({reducer})
console.log('Currently Number of cakes: ', store.getState())

store.subscribe(() => {console.log('Now cakes left are: ', store.getState())})


//Normal working using dispatch
// store.dispatch(restock())
// store.dispatch(restock())
// store.dispatch(orderCake())
// store.dispatch(restock())


//This is how bind action works
const action = bindActionCreators({restock,orderCake},store.dispatch)
action.orderCake()
action.orderCake()
action.restock()
action.orderCake()


