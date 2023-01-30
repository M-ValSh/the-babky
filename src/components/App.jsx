import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PublicRoute } from 'HOCs/PublicRoute';
import { PrivateRoute } from 'HOCs/PrivateRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import authSelectors from 'redux/auth/auth-selectors';
// import { selectIsModalLogoutOpen } from 'redux/global/global-selectors';

import Layout from './Layout/Layout';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import NotFound from './NotFound/NotFound';
import HomePage from './HomePage/HomePage';
import Statistics from 'pages/Statistics/Statistics';
import authOperations from 'redux/auth/auth-operations';

// import LogOutModal from './Modals/LogOutModal/LogOutModal';

export const App = () => {
  const dispatch = useDispatch();
  const isCurrentUserRefreshing = useSelector(authSelectors.selectIsRefreshing);
  // const showLogoutModal = useSelector(selectIsModalLogoutOpen);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {!isCurrentUserRefreshing && (
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/login" component={<Layout />} />
            }
          >
            <Route index element={<HomePage />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route
            path="/register"
            element={<PublicRoute redirectTo="/" component={<Register />} />}
          />

          <Route
            path="/login"
            element={<PublicRoute redirectTo="/" component={<Login />} />}
          />
        </Routes>
      )}

      {/* {showLogoutModal && <Modal children={ <LogOutModal action="logout"/>} />} */}

      <ToastContainer
        autoClose={3000}
        theme="colored"
        limit={2}
        style={{ zIndex: '100000' }}
      />
    </div>
  );
};
