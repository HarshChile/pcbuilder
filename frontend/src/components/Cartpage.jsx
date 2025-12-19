import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function Cartpage() {
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await api.get("/cart");
      setCart(res.data || {});
    } catch (err) {
      console.error("Failed to fetch cart");
    } finally {
      setLoading(false);
    }
  };

  const removeComponent = async (type) => {
    try {
      await api.delete(`/cart/${type}`);
      fetchCart(); // refresh cart
    } catch (err) {
      alert("Failed to remove component");
    }
  };

  const isEmpty = Object.values(cart).every((item) => !item);

  if (loading) {
    return (
      <div className="bg-black min-h-screen text-white p-10">
        Loading cart...
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen page-enter">
      <nav className="text-white px-6 py-3 text-xl pt-8">
        <Link to="/" className="hover:text-green-300">
          Back to Home
        </Link>
      </nav>

      <div className="px-6 pt-12 text-center text-white">
        <h1 className="text-4xl font-bold mb-6">
          {isEmpty ? "Cart is empty" : "Your Cart"}
        </h1>
      </div>

      {!isEmpty && (
        <div className="px-8 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(cart).map(([type, comp]) =>
            comp ? (
              <div
                key={type}
                className="bg-gray-900 p-6 rounded-lg text-white"
              >
                <h2 className="text-2xl font-semibold capitalize">
                  {type}
                </h2>

                <img
                  src={`http://localhost:3001${comp.src}`}
                  alt={comp.pname}
                  className="w-full h-40 object-contain my-4"
                />

                <p className="text-gray-300">{comp.pname}</p>

                {comp.info && (
                  <p className="text-gray-400 text-sm mt-2">
                    {comp.info}
                  </p>
                )}

                {comp.price && (
                  <p className="text-green-400 font-semibold mt-2">
                    ₹{Number(comp.price).toLocaleString("en-IN")}
                  </p>
                )}

                <button
                  onClick={() => removeComponent(type)}
                  className="mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

export default Cartpage;
