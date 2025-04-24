import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// layouts
import RootLayout from './Layouts/RootLayout'

// pages
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App