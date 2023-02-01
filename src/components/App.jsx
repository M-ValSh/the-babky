import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PublicRoute } from 'Routes/PublicRoute';
import { PrivateRoute } from 'Routes/PrivateRoute';

import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';
import { selectIsLoading } from 'redux/transactions/transactions-selectors';

import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';
import Loader from './Loader/Loader';

import { useMedia } from './Media/useMedia';
import { selectTransactionIsLoading } from 'redux/transactionsCategories/transactionsCategories-selectors';

const Currencys = lazy(() => import('pages/Currencys/Currencys'));
const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Statistics = lazy(() => import('pages/Statistics/Statistics'));

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
            <Route index element={<Home />} />
            <Route path="/statistics" element={<Statistics />} />
            {media.isMobile && (
              <Route path="/currency" element={<Currencys />} />
            )}
          </Route>

          <Route path="*" element={<NotFound />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/"
                component={
                  <Suspense>
                    <Register />
                  </Suspense>
                }
              />
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute
                redirectTo="/"
                component={
                  <Suspense>
                    <Login />
                  </Suspense>
                }
              />
            }
          />
        </Routes>
      )}
    </div>
  );
};
