import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalLogoutOpen: false,
  errorStatus: null,
  successResponse: false,
  isModalAddTransactionOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalLogout: (state, _) => {
      state.isModalLogoutOpen = true;
    },
    closeModalLogout: (state, _) => {
      state.isModalLogoutOpen = false;
    },
    openModalAddTransaction: (state, _) => {
      state.isModalAddTransactionOpen = true;
    },
    closeModalWindow: (state, _) => {
      state.isModalLogoutOpen = false;
      state.isModalAddTransactionOpen = false;
    },
    setError: (state, action) => {
      state.errorStatus = action.payload;
    },
    resetError: (state, _) => {
      state.errorStatus = null;
    },
    setSuccessResponse: (state, _) => {
      state.successResponse = true;
    },
    resetSuccessResponse: (state, _) => {
      state.successResponse = false;
    },
  },
});

export const {
  openModalLogout,
  openModalAddTransaction,
  closeModalWindow,
  setError,
  resetError,
  setSuccessResponse,
  resetSuccessResponse,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
