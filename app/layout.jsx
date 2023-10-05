'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import injectContext from './context/appContext'
import NavbarBot from './components/NavbarBot'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Template',
  description: 'ecomers site template full stack',
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          {children}
        <Footer />
        <NavbarBot />
      </body>
    </html>
  )
}
export default injectContext(RootLayout)