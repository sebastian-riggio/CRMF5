import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CrmRouter from './router/Router.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {CrmRouter}
    </BrowserRouter>
  </React.StrictMode>
)
