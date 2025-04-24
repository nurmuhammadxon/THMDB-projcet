import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='bg-primary w-screen h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-3xl text-white font-bold'>404 not found</h1>
        <Link
          to='/'
          className='text-xl text-blue-600 hover:underline hover:text-blue-700'
        >
          Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage