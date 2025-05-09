import React from 'react'
import { Outlet } from 'react-router-dom'

// components
import { Header, Footer } from '../components'

function RootLayout() {
    return (
        <div className='relative font-display w-full'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout