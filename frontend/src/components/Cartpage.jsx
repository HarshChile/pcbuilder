import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function Cartpage() {
  const { selected, removeComponent } = useContext(CartContext)

  const isEmpty = !selected.processor && !selected.graphics && !selected.ssd && !selected.ram 
   && !selected.usb && !selected.casefan && !selected.harddrives && !selected.cables && !selected.keyboard && !selected.powersupply;
  const title = isEmpty ? 'Cart is empty' : 'Your Cart'

  return (
    <div className="bg-black min-h-screen page-enter">
      <nav className="text-white px-6 py-3 text-xl pt-8">
        <Link to="/" className="hover:text-green-300">Back to Home</Link>
      </nav>

      <div className="px-6 pt-12 text-center text-white">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
      </div>

      {!isEmpty && (
        <div className="px-8 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(selected).map(([key, comp]) => (
            comp && (
              <div key={key} className="bg-gray-900 p-6 rounded-lg text-white">
                <h2 className="text-2xl font-semibold capitalize">{key}</h2>
                <img src={comp.src} alt={comp.pname} className="w-full h-40 object-contain my-4" />
                <p className="text-gray-300">{comp.pname}</p>
                <p className="text-gray-400 text-sm mt-2">{comp.info}</p>
                <button onClick={() => removeComponent(key)} className="mt-4 bg-red-600 px-4 py-2 rounded">Remove</button>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  )
}

export default Cartpage
