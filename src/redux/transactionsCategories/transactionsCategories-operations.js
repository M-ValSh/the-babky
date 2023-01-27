import { createAsyncThunk } from '@reduxjs/toolkit';
import { walletApi } from 'index';

export const fetchTransactionCategories = createAsyncThunk(
  'transactionCategories/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await walletApi.get('/transaction-categories');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
