import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const extraActions = [
  authOperations.register,
  authOperations.logOut,
  authOperations.logIn,
  authOperations.fetchCurrentUser,
];
const getActions = (type) => extraActions.map((action) => action[type]);

const initialState = {
  user: { username: null, email: null, balance: null, id: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authOperations.register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.pending, (state) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(
        authOperations.fetchCurrentUser.rejected,
        (state, { payload }) => {
          state.isRefreshing = false;
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addCase(
        authOperations.fetchCurrentUser.fulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )

      .addMatcher(isAnyOf(...getActions("fulfilled")), handleFulfilled)
      .addMatcher(isAnyOf(...getActions("pending")), handlePending);
  },

  reducers: {
    changeBalance(state, action) {
      state.user.balance = state.user.balance - action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { changeBalance } = authSlice.actions;
