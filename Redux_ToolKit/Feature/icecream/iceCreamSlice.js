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
        }
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamAction = iceCreamSlice.actions