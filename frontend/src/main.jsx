import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './index.css'

import Layout from './components/Layout.jsx'
import Hero from './components/Hero.jsx'
import ComponentListPage from './components/ComponentListPage.jsx'
import Componentdetail from './components/Componentdetail.jsx'
import Cartpage from './components/Cartpage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Hero />} />

      {/* Single page to show any component type */}
      <Route path=":type" element={<ComponentListPage />} />

      {/* Details page */}
      <Route path=":type/details/:id" element={<Componentdetail />} />
      <Route path="cart" element={<Cartpage/>} />
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
