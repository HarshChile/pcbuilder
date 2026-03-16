import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function CheckoutButton() {
  const location = useLocation();

  if (location.pathname !== '/cart') return null;

  return (
    <Link to="/checkout">
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-500 text-white px-5 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-400 transition"
      >
        Checkout
      </button>
    </Link>
  );
}

export default CheckoutButton;
