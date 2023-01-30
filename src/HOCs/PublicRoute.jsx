import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import authSelectors from '../redux/auth/auth-selectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
