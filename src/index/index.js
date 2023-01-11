import React from 'react';
import ReactDOM from 'react-dom/client';
import '/src/index/index.c7ss';
import App from './src/app/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

