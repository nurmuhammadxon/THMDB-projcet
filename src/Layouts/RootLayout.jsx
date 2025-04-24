import React from 'react'
import { Outlet } from 'react-router-dom'

// components
import { Header, Footer } from '../components'

function RootLayout() {
    return (
        <div className='relative font-display max-w-[1400px] mx-auto'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout