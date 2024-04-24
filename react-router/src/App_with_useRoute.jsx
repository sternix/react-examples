import { useRoutes } from "react-router-dom";
import routes from "./routes";

// useRoutes şekli

/*

index.js'dede değişiklik yapıldı
bu şekilde kullanabilmek için

import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import { AuthProvider } from './context/AuthContext';
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)


şeklinde bir index.js kullanabiliriz
*/


function App() {
    return useRoutes(routes)
}

export default App
