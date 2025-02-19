import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counterReducer from './redux/slice'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    card: counterReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>

  </React.StrictMode>
);


reportWebVitals();
