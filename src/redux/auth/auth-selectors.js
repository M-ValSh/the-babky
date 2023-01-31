const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUser = state => state.auth.user.username;
const selectEmail = state => state.auth.user.email;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectToken = state => state.auth.token;
export const selectId = state => state.auth.user.id;
const selectIsLoading = state => state.auth.isLoading;
export const selectBalance = state => state.auth.user.balance;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectEmail,
  selectToken,
  selectIsLoading,
  selectBalance,
  selectId,
};
export default authSelectors;
