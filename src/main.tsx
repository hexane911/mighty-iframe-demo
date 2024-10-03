import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { MightyWrapper } from 'mighty-academy-widget';

ReactDOM.render(
  <React.StrictMode>
    <MightyWrapper theme="dark">
      <App />
    </MightyWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
