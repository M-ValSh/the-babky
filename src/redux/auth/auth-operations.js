import { createAsyncThunk } from '@reduxjs/toolkit';
import { walletApi } from 'index';

const setAuthHeader = token => {
  walletApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  walletApi.defaults.headers.common.Authorization = '';
};

const register = createAsyncThunk(
  '/auth/sign-up',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await walletApi.post('/auth/sign-up', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  '/auth/sign-in',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await walletApi.post('/auth/sign-in', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk('/auth/sign-out', async (_, thunkAPI) => {
  try {
    await walletApi.delete('/auth/sign-out');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await walletApi.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default authOperations;
