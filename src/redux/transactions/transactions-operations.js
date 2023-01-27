import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios("/transactions");

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  "transaction/addTransaction",
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/transactions", transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "transaction/deleteTransaction",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/transactions/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
