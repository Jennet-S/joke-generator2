import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
