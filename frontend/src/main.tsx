import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CrmRouter from './router/Router.tsx'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/open-sans'
import Navbar from './components/Navbar.tsx'
import { Toaster } from './components/ui/toaster.tsx'

function shouldShowNavbar () {
  const { pathname } = window.location
  return pathname !== '/'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {shouldShowNavbar() && <Navbar />}
      <Toaster />
      {CrmRouter}
    </BrowserRouter>
  </React.StrictMode>
)
