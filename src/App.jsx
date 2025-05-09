import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// layouts
import RootLayout from './Layouts/RootLayout'

// pages
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import MovieDetail from './components/home/MovieDetail'

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
        },
        {
          path: "movie/:id",
          element: <MovieDetail />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App