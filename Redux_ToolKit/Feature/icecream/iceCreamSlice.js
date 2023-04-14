const { cakeActions } = require('../cake/caksSlice');

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOficeCream: 10
}

const iceCreamSlice = createSlice({
    name:'IceCream',
    initialState,
    reducers:{
        ordered:(shop) => {
            shop.numberOficeCream--;
    },
        restock:(shop,ac) => {
            shop.numberOficeCream += ac.payload
        },
    },

    //Here on ordered action of cake the number of icecream will also be reduced
    // extraReducers:{
    //     ['cake/ordered']:state => {
    //         state.numberOficeCream--;
    //     }
    // }

    //Second approach
    extraReducers:build => {
        build.addCase(cakeActions.ordered, state => {
            state.numberOficeCream--;
        })
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamAction = iceCreamSlice.actions