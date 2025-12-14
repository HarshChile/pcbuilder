import React from 'react'
import Add from './Add'
import { Link } from 'react-router-dom'

function Browse({ component, type }) {
  return (
    <div className="bg-gradient-to-r from-[#d1d5db] via-[#6b7280] to-[#374151] p-6 rounded-xl shadow hover:scale-105 transition">

      <Link to={`/${type}/details/${component.id}`}>
        <img
          src={component.src}
          alt={component.pname}
          className="w-full h-80 object-contain mb-4"
        />
      </Link>

      <h2 className="text-2xl font-semibold">{component.pname}</h2>
      <p className="text-gray-600 mt-2">{component.info}</p>
      
      <Add component={component} type={type} />
      
    </div>
    
  )
}

export default Browse
