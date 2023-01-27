import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://wallet.goit.ua/';

export const fetchTransactionCategories = createAsyncThunk(
  "transactionCategories/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/transaction-categories");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
