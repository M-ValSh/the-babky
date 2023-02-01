import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import authSelectors from '../redux/auth/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
