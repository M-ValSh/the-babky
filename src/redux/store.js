import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { transactionsReducer } from './transactions/transactions-slice';
import transactionCategoriesReduser from './transactionsCategories/transactionsCategories-slice';
import { authReducer } from './auth/auth-slice';
import { globalReducer } from './global/global-slice';

import { trSummaryReducer } from './transactionsSumCont/transactionsSumCont-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transactionsReducer,
    transactionCategories: transactionCategoriesReduser,
    global: globalReducer,
    trSummary: trSummaryReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
