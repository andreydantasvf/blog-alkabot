import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Routes />
  </React.StrictMode>,
)
