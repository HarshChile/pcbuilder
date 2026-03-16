import React from 'react'
import Navigatonpanel from './Navigatonpanel'

import Hero from './Hero'
import { Outlet } from 'react-router-dom'
import Seemycartbutton from './Seemycartbutton'
import CheckoutButton from './CheckoutButton'
import { CartProvider } from '../context/CartContext'

function Layout() {
  return (
    <CartProvider>
      <Navigatonpanel/>
      <Outlet/>
      <Seemycartbutton/>
      <CheckoutButton/>
    </CartProvider>
  )
}

export default Layout