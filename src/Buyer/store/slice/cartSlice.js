import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cart: [] }

const cartSlice = () => createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        updateCart(state, action) {

            switch (action.type) {
                case "add":
                    state.cart = [...state.cart, action.payload]
                    break;
                case "remove":
                    console.log("Hello");
                default:

            }

        }
    }
});
export default cartSlice;