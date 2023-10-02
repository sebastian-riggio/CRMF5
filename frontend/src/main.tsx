import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CrmRouter from './router/Router.tsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import '@fontsource-variable/open-sans'
import { Toaster } from './components/ui/toaster.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(CrmRouter)
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
)
