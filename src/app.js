import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from '@iso/assets/styles/globalStyle';
import Boot from '@iso/redux/boot';
import Routes from './router';
import AppProvider from './AppProvider';
import { store } from '@iso/redux/store';
import { theme } from 'styled-tools';

const App = () => (
  <Provider store={store}>
    <AppProvider>
      <>
        <GlobalStyles theme={theme} />
        <Routes />
      </>
    </AppProvider>
  </Provider>
);
Boot()
  .then(() => App())
  .catch((error) => console.error(error));

export default App;
