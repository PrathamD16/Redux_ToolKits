const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfCakes: 10
}

//Here state can be changed as mutable object, just like immer
const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state) => {
            state.numberOfCakes--;
        },
        restock:(state,action) => {
            state.numberOfCakes += action.payload
        }    
    },
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
