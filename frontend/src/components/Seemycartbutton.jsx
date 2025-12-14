import React from 'react'
import cartSvg from '../assets/cart.svg'
import { Link } from 'react-router-dom'

function Seemycartbutton() {
  return (
     <Link to="/cart">
    <div className="fixed bottom-6 right-6 z-40 bg-green-500 text-black px-6 py-3 
    rounded-lg font-bold shadow-lg hover:bg-green-400 cursor-pointer transition flex items-center gap-2">
     <img src={cartSvg} alt="cart" className="h-6 w-6"/>My Cart
    </div>
     </Link>
  )
}

export default Seemycartbutton