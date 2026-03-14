import React from 'react'

import Footer from './Footer'
import { Toaster } from 'react-hot-toast'
import { Header } from './Header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <Header />
        <Toaster position='top-right' reverseOrder={false} />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default MainLayout
