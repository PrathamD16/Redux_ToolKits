//To update nested states, we constantly need to update objects by spreading it.

//Immer helps to update the state directly without spreading the object. It updates the object like, the object is mutable

const redux = require('@reduxjs/toolkit')
const produce = require('immer').produce

const initialState = {
  name: 'Pratham',
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA'
  }
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
  return {
    type:STREET_UPDATED,
    payload:street
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case STREET_UPDATED:
    //   return {
    //     ...state,
    //     address:{
    //       ...state.address,
    //       street:action.payload
    //     }
    //   }
    return produce(state,(draft) => {
        draft.address.street = action.payload
    })
    default:
      return state
  }
}

const store = redux.configureStore({reducer})

console.log('Initial State: ', store.getState())

store.subscribe(() => console.log('Updated Address: ', store.getState()))

store.dispatch(updateStreet('456 Gully'))
