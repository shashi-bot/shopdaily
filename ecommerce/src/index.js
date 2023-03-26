import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

Kommunicate.init("3c620a0e0ebe58c04f641ca1f5eca25e8")


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);