import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/CartSlice";
import categorySlice from "./slice/CategorySlice";
const store = configureStore({
    reducer: {
        cart: cartSlice,
        category: categorySlice
    },
});

export default store