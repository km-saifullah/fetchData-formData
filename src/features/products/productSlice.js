import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(
      "https://raw.githubusercontent.com/km-saifullah/mobile-data/main/data.json"
    );
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    products: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = true;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
