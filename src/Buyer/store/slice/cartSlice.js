import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cart: [] }

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        add(state, action) {
            state.cart = [...state.cart, action.payload]
        }
    }
});
export default cartSlice;