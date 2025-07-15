import { configureStore } from "@reduxjs/toolkit";
import { productCountReducer } from "./ProductCountStore";

export const Store = configureStore({
    reducer: {
        productCount: productCountReducer
    }
})