import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import { App } from 'components/App';
import { store } from 'redux/store';

import 'Styles/index.css';
import { theme } from 'Styles/theme';
import Media from 'components/Media/Media';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/team-project">
      <React.StrictMode>
        <ChakraProvider theme={theme}>
          <Media>
            <App />
          </Media>
        </ChakraProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
