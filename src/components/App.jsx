import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PublicRoute } from 'HOCs/PublicRoute';
import { PrivateRoute } from 'HOCs/PrivateRoute';

// import css from './Layout/Layout.module.css';

import authSelectors from 'redux/auth/auth-selectors';
// import { selectIsModalLogoutOpen } from 'redux/global/global-selectors';

import Layout from './Layout/Layout';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import NotFound from './NotFound/NotFound';
import HomePage from './HomePage/HomePage';
import Statistics from 'pages/Statistics/Statistics';
import Currencys from 'pages/Currencys/Currencys';
import authOperations from 'redux/auth/auth-operations';

import { useMedia } from './Media/useMedia';
// import Loader from './Loader/Loader';

// import LogOutModal from './Modals/LogOutModal/LogOutModal';

export const App = () => {
  const dispatch = useDispatch();
  const isCurrentUserRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const media = useMedia();
  // const showLogoutModal = useSelector(selectIsModalLogoutOpen);


  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {/* <div className={css.loader_field}>
        <Loader />
      </div> */}
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
            {media.isMobile && (
              <Route path="/currency" element={<Currencys />} />
            )}

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
    </div>
  );
};
