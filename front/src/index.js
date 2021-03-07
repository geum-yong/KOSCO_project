import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './modules';

import ErrorBoundary from './components/common/ErrorBoundary';
import GlobalStyles from './components/common/GlobalStyles';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
        <GlobalStyles />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
