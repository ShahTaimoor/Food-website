import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) {

                state.cart = state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {

                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },

        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },

        increementQty: (state, action) => {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
        },
        decreementQty: (state, action) => {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item)
        }
    }


})
export const { addToCart, removeItem, increementQty,decreementQty } = cartSlice.actions
export default cartSlice.reducer