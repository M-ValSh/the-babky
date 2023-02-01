import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  fetchTransactions,
  deleteTransaction,
} from './transactions-operations';

const initialState = {
  items: [
    {
      id: '0fc08d7f-ab19-4748-9fad-ca1b91aba661',
      transactionDate: '2022-11-29',
      type: 'EXPENSE',
      comment: 'собака охраняла гладіолуси',
      amount: -500,
      balanceAfter: 8872,
      categoryId: '1272fcc4-d59f-462d-ad33-a85a075e5581',
      userId: '183e3459-8f43-42e0-b0e3-d40640cad655',
    },
    {
      id: 'c5450b8f-db33-4c44-9838-610933dd5b15',
      transactionDate: '2022-12-11',
      type: 'EXPENSE',
      comment: 'маячило їй щастя впереді',
      amount: -2000,
      balanceAfter: 6872,
      categoryId: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
      userId: '183e3459-8f43-42e0-b0e3-d40640cad655',
    },
    {
      id: '79017eb7-ad49-4b39-9759-b4ce352b2095',
      transactionDate: '2022-12-11',
      type: 'INCOME',
      comment: 'і вітер ніжно гладив на собаке волоси',
      amount: 3000,
      balanceAfter: 3872,
      categoryId: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
      userId: '183e3459-8f43-42e0-b0e3-d40640cad655',
    },
  ],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchTransactions.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
        state.isLoading = false;
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
