import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './index.css'
import Encrypt from './pages/Encrypt'
import NotFound from './pages/NotFound.jsx'
import Decrypt from './pages/Decrypt'

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFound />,
    children:[
      {
        path: '/',
        element: <Navigate to={'/encrypt'}/>
      },
      {
        path: "/encrypt",
        element: <Encrypt />
      },
      {
        path: "/decrypt",
        element: <Decrypt />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
