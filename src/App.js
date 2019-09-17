import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import history from './services/history';
import store from './store/index';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
