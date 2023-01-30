import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectEmail,
  selectToken,
  selectIsLoading,
  selectBalance,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const email = useSelector(selectEmail);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);
  const balance = useSelector(selectBalance);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    email,
    token,
    isLoading,
    balance,
  };
};
