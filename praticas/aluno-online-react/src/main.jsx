import React from 'react';
import { StrictMode } from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router'; 
import { AuthProvider } from './Components/contexts/AuthContext.jsx'; // Importando o Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);