import App from './App';
import './App.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// this just routes and inits <App> - usually don't edit it.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

