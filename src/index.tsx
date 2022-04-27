import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './app';

const rootElement = document.getElementById('gogoappz');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement,
);

if (module.hot) {
  module.hot.accept('.', () => {
    console.log('Accepting HMR @ ./*');
  });
}
