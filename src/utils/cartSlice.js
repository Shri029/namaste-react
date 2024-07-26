import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            //mutating state here
            state.items.push(action.payload);
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart: (state) =>{
            //To print state
            console.log(current(state))
            state.items.length = 0;

            // similar to retun return [];
        }
    }
});

export const { addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
