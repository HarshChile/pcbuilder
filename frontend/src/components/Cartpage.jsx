import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function Cartpage() {
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartid, setCartid] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user.cartid) {
      setError("Please log in to view your cart");
      setLoading(false);
      return;
    }
    setCartid(user.cartid);
    fetchCart(user.cartid);
  }, []);

  const fetchCart = async (cid) => {
    try {
      const res = await api.get("/cart", { params: { cartid: cid } });
      setCart(res.data || {});
      setError(null);
    } catch {
      console.error("Failed to fetch cart");
      setError("Failed to fetch cart");
    } finally {
      setLoading(false);
    }
  };

  const removeComponent = async (type) => {
    try {
      await api.delete(`/cart/${type}`, { params: { cartid } });
      fetchCart(cartid);
    } catch {
      alert("Failed to remove component");
    }
  };

  const updateQuantity = async (type, quantity) => {
    if (quantity < 1) return;

    // Optimistically update UI immediately
    setCart((prevCart) => {
      const item = prevCart[type];
      if (!item) return prevCart;
      return {
        ...prevCart,
        [type]: {
          ...item,
          quantity,
        },
      };
    });

    try {
      await api.put(`/cart/quantity/${type}`, { quantity, cartid });
      fetchCart(cartid);
    } catch {
      alert("Failed to update quantity");
      fetchCart(cartid);
    }
  };

  const getItemTotal = (cartItem) => {
    if (!cartItem || !cartItem.item || !cartItem.item.price) return 0;
    return (Number(cartItem.item.price) || 0) * (Number(cartItem.quantity) || 1);
  };

  const cartTotal = Object.values(cart).reduce((sum, cartItem) => {
    return sum + getItemTotal(cartItem);
  }, 0);

  const voltageTotal = Object.values(cart).reduce((sum, cartItem) => {
    if (!cartItem || !cartItem.item) return sum;
    const tdp = Number(cartItem.item.tdp || 0);
    const qty = Number(cartItem.quantity || 1);
    return sum + tdp * qty;
  }, 0);

  const isEmpty = Object.values(cart).every(
    (item) => !item || !item.item
  );

  if (loading) {
    return (
      <div className="bg-black min-h-screen text-white p-10">
        Loading cart...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen text-white p-10 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">{error}</h1>
        <Link to="/auth" className="text-green-400 hover:text-green-300">
          Go to Login
        </Link>
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
        <>
          <div className="px-8 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(cart).map(([type, cartItem]) =>
            cartItem && cartItem.item ? (
              <div
                key={type}
                className="bg-gray-900 p-6 rounded-lg text-white"
              >
                <h2 className="text-2xl font-semibold capitalize">
                  {type}
                </h2>

                <img
                  src={`http://localhost:3001${cartItem.item.src}`}
                  alt={cartItem.item.pname}
                  className="w-full h-40 object-contain my-4"
                />

                <p className="text-gray-300">{cartItem.item.pname}</p>

                {cartItem.item.info && (
                  <p className="text-gray-400 text-sm mt-2">
                    {cartItem.item.info}
                  </p>
                )}

                {cartItem.item.price && (
                  <>
                    <p className="text-green-400 font-semibold mt-2">
                      Unit: ₹{Number(cartItem.item.price).toLocaleString("en-IN")}
                    </p>
                    <p className="text-green-300 font-semibold mt-1">
                      Total: ₹{getItemTotal(cartItem).toLocaleString("en-IN")}
                    </p>
                  </>
                )}

                <div className="mt-4 flex items-center gap-3">
                  <label className="text-gray-300">Quantity:</label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(type, cartItem.quantity - 1)
                      }
                      className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={cartItem.quantity}
                      onChange={(e) =>
                        updateQuantity(type, parseInt(e.target.value) || 1)
                      }
                      className="w-12 text-center bg-gray-700 rounded py-1 text-white"
                      min="1"
                    />
                    <button
                      onClick={() =>
                        updateQuantity(type, cartItem.quantity + 1)
                      }
                      className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeComponent(type)}
                  className="mt-4 w-full bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ) : null
          )}
        </div>

        <div className="px-8 pb-8">
          <div className="bg-gray-900 p-4 rounded-lg text-white max-w-md mx-auto">
            <div className="flex justify-between text-gray-300">
              <span className="font-medium">Cart Total</span>
              <span className="font-bold text-green-300">
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between text-gray-300 mt-2">
              <span className="font-medium">Voltage Total (TDP)</span>
              <span className="font-bold text-yellow-300">
                {voltageTotal.toLocaleString("en-IN")} W
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
            
            </p>
          </div>
        </div>

        
      </>
      )}
    </div>
  );
}

export default Cartpage;
