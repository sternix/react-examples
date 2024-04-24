import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import { AuthProvider } from './context/AuthContext';
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
  </React.StrictMode>
)
