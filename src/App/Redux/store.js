import { configureStore } from "@reduxjs/toolkit"
import quoteReducer from "./QuoteSlice";


const store = configureStore({
    reducer: {
        quote: quoteReducer,
    }
})


export default store;