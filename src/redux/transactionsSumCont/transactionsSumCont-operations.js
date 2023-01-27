import { createAsyncThunk } from '@reduxjs/toolkit';
import { walletApi } from 'index';

export const getTransactionsSummary = createAsyncThunk(
  'trSummary/getTransactionsSummary',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const { data } = await walletApi.get(
        `/transactions-summary?month=${month}&year=${year}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
