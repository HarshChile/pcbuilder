import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function CheckoutPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState({});
  const [payLoading, setPayLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user.cartid) {
      setError("Please login first and add components to cart.");
      setLoading(false);
      return;
    }

    fetchCart(user.cartid);
  }, []);

  const fetchCart = async (cid) => {
    try {
      const res = await api.get("/cart", { params: { cartid: cid } });
      setCart(res.data || {});
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load cart");
    } finally {
      setLoading(false);
    }
  };

  const getItemTotal = (cartItem) => {
    if (!cartItem || !cartItem.item || !cartItem.item.price) return 0;
    return (Number(cartItem.item.price) || 0) * (Number(cartItem.quantity) || 1);
  };

  const cartTotal = Object.values(cart).reduce(
    (sum, cartItem) => sum + getItemTotal(cartItem),
    0
  );

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (cartTotal <= 0) {
      setError("Add items to cart before checkout.");
      return;
    }

    setPayLoading(true);
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      setError("Failed to load Razorpay SDK.");
      setPayLoading(false);
      return;
    }

    try {
      const orderRes = await api.post("/payment/create-order", {
        amount: cartTotal,
      });

      const { order, key } = orderRes.data;

      const options = {
        key,
        amount: order.amount,
        currency: order.currency,
        name: "PC Builder",
        description: "Checkout payment",
        order_id: order.id,
        handler: function (response) {
          alert("Payment successful. Payment ID: " + response.razorpay_payment_id);
          navigate("/");
        },
        prefill: {
          name: "Customer",
          email: "customer@example.com",
        },
        theme: { color: "#0f172a" },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error(err);
      const response = err?.response?.data;
      const detail = response?.details || response?.message || "Could not initiate payment. Please try again.";
      setError(`Could not initiate payment: ${detail}`);
    } finally {
      setPayLoading(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-black text-white p-10">Loading checkout...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-3">Checkout</h1>
        {error && <div className="mb-3 p-2 bg-red-500 text-white rounded">{error}</div>}

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Order summary</h2>
          <div className="mt-3 space-y-2">
            {Object.entries(cart).map(([type, cartItem]) =>
              cartItem && cartItem.item ? (
                <div key={type} className="flex justify-between text-gray-200">
                  <span>{type} x {cartItem.quantity}</span>
                  <span>₹{getItemTotal(cartItem).toLocaleString("en-IN")}</span>
                </div>
              ) : null
            )}
          </div>

          <div className="mt-4 border-t border-gray-700 pt-3 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{cartTotal.toLocaleString("en-IN")}</span>
          </div>
        </div>

        <button
          onClick={handlePayment}
          disabled={payLoading || cartTotal <= 0}
          className="mt-2 w-full bg-green-500 hover:bg-green-400 text-black py-3 rounded-lg font-bold disabled:opacity-50"
        >
          {payLoading ? "Loading payment..." : "Pay with Razorpay"}
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
