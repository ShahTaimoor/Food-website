import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/CartSlice";
import categorySlice from "./slice/CategorySlice";
import searchSlice from "./slice/SearchSlice";
const store = configureStore({
    reducer: {
        cart: cartSlice,
        category: categorySlice,
        search: searchSlice
    },
});

export default store