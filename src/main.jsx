// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 👈 IMPORTA O ROUTER
import App from './App.jsx';
import './index.css'; // se estiver usando Tailwind configurado no PostCSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 👈 ENVOLVE O APP AQUI */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
