import React from 'react'
import Navigatonpanel from './Navigatonpanel'
import Footer from './Footer'
import Hero from './Hero'
import { Outlet } from 'react-router-dom'
import Seemycartbutton from './Seemycartbutton'
import { CartProvider } from '../context/CartContext'

function Layout() {
  return (
    <CartProvider>
      <Navigatonpanel/>
      <Outlet/>
      <Seemycartbutton/>
      <Footer/>
    </CartProvider>
  )
}

export default Layout