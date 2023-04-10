//Importing redux
const redux = require('@reduxjs/toolkit')
console.log("Gello")

//Creating actions
//Action is a object with type property
function orderCake(){
    return{
        type:'CAKE_ORDERED',
        quantity:1
    }
}

//Initial State which is always a object
const initialState = {
    counter:10
}


//Reducer function
//(previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'CAKE_ORDERED':
            return {
                ...state,
                counter:state.counter - 1
            }
        default:
            return state
    }
}

const store = redux.configureStore({reducer})
console.log('Inital State ' + store.getState().counter)

store.subscribe(() => console.log('Update State ', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

// unsubcribed()


