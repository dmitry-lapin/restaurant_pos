import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';

import store from './app/store';

const container = document.getElementById('root');
const root = createRoot(container);

//localhost:3000
root.render(
  <React.StrictMode>
      <BrowserRouter> 
      <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
  </React.StrictMode>
);