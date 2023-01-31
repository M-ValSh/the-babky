import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PublicRoute } from 'HOCs/PublicRoute';
import { PrivateRoute } from 'HOCs/PrivateRoute';

import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';
import { selectIsLoading } from 'redux/transactions/transactions-selectors';
// import { selectIsModalLogoutOpen } from 'redux/global/global-selectors';

import Layout from './Layout/Layout';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import NotFound from './NotFound/NotFound';
import HomePage from './HomePage/HomePage';
import Statistics from 'pages/Statistics/Statistics';
import Currencys from 'pages/Currencys/Currencys';
import Loader from './Loader/Loader';

import { useMedia } from './Media/useMedia';
import { selectTransactionIsLoading } from 'redux/transactionsCategories/transactionsCategories-selectors';

export const App = () => {
  const dispatch = useDispatch();
  const media = useMedia();
  const isCurrentUserRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const isLoadingAuth = useSelector(authSelectors.selectIsLoading);
  const isLoadingTransactions = useSelector(selectIsLoading);
  const isLoadingTransactSelec = useSelector(selectTransactionIsLoading);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {isLoadingAuth && <Loader />}
      {isLoadingTransactions && <Loader />}
      {isLoadingTransactSelec && <Loader />}

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
