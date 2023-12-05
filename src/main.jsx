import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { AuthProviderWrapper } from './contexts/auth.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviderWrapper>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </AuthProviderWrapper>
)