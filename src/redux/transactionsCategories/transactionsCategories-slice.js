import { createSlice } from "@reduxjs/toolkit";
import { fetchTransactionCategories } from "./transactionsCategories-operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const transactionCategoriesSlice = createSlice({
  name: "transactionCategories",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTransactionCategories.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchTransactionCategories.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const { transactionCategoriesAction } =
  transactionCategoriesSlice.actions;
export default transactionCategoriesSlice.reducer;
