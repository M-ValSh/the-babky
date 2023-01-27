import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { transactionsReduser } from "./transactions/transactions-slice";
import transactionCategoriesReduser from "./transactionsCategories/transactionsCategories-slice";
import { authReducer } from "./auth";
import { globalReducer } from "./global/global-slice";
import { trSummaryReducer } from "./transactionSumCont/transactionSumCont-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  auth: authPersistedReducer,
  transactions: transactionsReduser,
  transactionCategories: transactionCategoriesReduser,
  global: globalReducer,
  trSummary: trSummaryReducer,
});

const rootPersistedReducer = persistReducer(rootReducer);

export const store = configureStore({
  reducer: rootPersistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
