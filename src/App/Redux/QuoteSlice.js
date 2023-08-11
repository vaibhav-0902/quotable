import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    content: "",
    author: ""
}

export const fetchQuote = createAsyncThunk('quotes/fetchQuote', async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/random`)
    console.log(response.data);
    return response.data;
})


const QuoteSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchQuote.fulfilled, (state, action) => {
            state.content = action.payload.content;
            state.author = action.payload.author;
        })
    }
})

export const selectQuote = (state) => state.quote;

export default QuoteSlice.reducer;