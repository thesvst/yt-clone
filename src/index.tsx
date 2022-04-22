import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const rootElement = document.getElementById('gogoappz');

ReactDOM.render(
    <App />,
    rootElement,
);

if (module.hot) {
    module.hot.accept('.', () => {
        console.log('Accepting HMR @ ./*');
    });
}
