import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import axios from 'axios';

import { App } from 'components/App';
import { store, persistor } from 'redux/store';

import 'Styles/index.css';
import { fontFaceStyles } from 'Styles/fontFaceStyles';
import { Global } from '@emotion/react';
import { theme } from 'Styles/theme';
import Media from 'components/Media/Media';
import { PersistGate } from 'redux-persist/integration/react';

export const bankApi = axios.create({
  baseURL: 'https://api.monobank.ua/bank/currency',
});
export const walletApi = axios.create({
  baseURL: 'https://wallet.goit.ua/api',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename="/the-babky">
        <React.StrictMode>
          <ChakraProvider theme={theme}>
            <HelmetProvider>
              <Media>
                <Global styles={fontFaceStyles} />
                <App />
              </Media>
            </HelmetProvider>
          </ChakraProvider>
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
