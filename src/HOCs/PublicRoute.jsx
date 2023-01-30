import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import authSelectors from '../redux/auth/auth-selectors';

export const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(authSelectors.selectToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to="/home" /> : children;
};
