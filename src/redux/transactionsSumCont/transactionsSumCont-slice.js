import { createSlice } from "@reduxjs/toolkit";

import { getTransactionsSummary } from "./transactionSumCont-operations";

const trSummarySlice = createSlice({
  name: "transactions",
  initialState: {
    summary: [],
    expenseSummary: null,
    incomeSummary: null,
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTransactionsSummary.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTransactionsSummary.fulfilled, (state, { payload }) => {
        state.summary = payload.categoriesSummary;
        state.expenseSummary = payload.expenseSummary;
        state.incomeSummary = payload.incomeSummary;
        state.isLoading = false;
      })
      .addCase(getTransactionsSummary.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const trSummaryReducer = trSummarySlice.reducer;
