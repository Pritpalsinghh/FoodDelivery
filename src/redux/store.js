import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
export const store=configureStore({
    reducer:{
        cart:cartSlice
    }
    // reducers are kind of features used in the website

})