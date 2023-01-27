import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import { App } from 'components/App';
import { store, persistor } from 'redux/store';

import 'Styles/index.css';
import { theme } from 'Styles/theme';
import Media from 'components/Media/Media';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename="/team-project">
        {/* <React.StrictMode> */}
        <ChakraProvider theme={theme}>
          <Media>
            <App />
          </Media>
        </ChakraProvider>
        {/* </React.StrictMode> */}
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
