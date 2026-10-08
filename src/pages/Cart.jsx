import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    cartCount,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const shipping = cartTotal >= 999 || cartTotal === 0 ? 0 : 79;

  const total = cartTotal + shipping;

  if (!cartItems || cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white pt-32">

        <section className="min-h-[70vh] flex items-center justify-center px-5 text-center">

          <div>

            <div className="w-20 h-20 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center mx-auto">
              <ShoppingBag size={28} />
            </div>

            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] mt-7">
              Your cart
            </p>

            <h1 className="text-4xl sm:text-6xl font-black tracking-[-0.05em] mt-3">
              Your cart is empty.
            </h1>

            <p className="text-zinc-500 max-w-md mx-auto mt-4">
              Discover something you love and add it to your
              collection.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 mt-7 px-7 py-3.5 rounded-full bg-white !text-black font-bold text-sm"
            >
              Explore Products
              <ArrowRight size={16} />
            </Link>

          </div>

        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24">

      <section className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">

          <div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              Continue Shopping
            </Link>

            <h1 className="text-5xl sm:text-6xl font-black tracking-[-0.06em] mt-5">
              Your Cart
            </h1>

            <p className="text-zinc-500 mt-3">
              {cartCount} {cartCount === 1 ? "item" : "items"} in your cart.
            </p>

          </div>

          <button
            type="button"
            onClick={() => {
              cartItems.forEach((item) => {
                removeFromCart(item.id);
              });
            }}
            className="text-xs text-zinc-600 hover:text-red-400 transition-colors"
          >
            Clear items
          </button>

        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 mt-12 items-start">

          {/* Items */}
          <div className="space-y-3">

            {cartItems.map((item) => (
              <article
                key={item.id}
                className="relative flex gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-28 sm:w-32 sm:h-36 object-cover rounded-xl bg-zinc-900"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="flex-1 min-w-0">

                  <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                    {item.category}
                  </p>

                  <h2 className="font-bold text-lg mt-1 truncate">
                    {item.name}
                  </h2>

                  <p className="text-white font-black mt-2">
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-2 mt-5">

                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10"
                    >
                      <Minus size={13} />
                    </button>

                    <span className="w-8 text-center text-sm font-bold">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10"
                    >
                      <Plus size={13} />
                    </button>

                  </div>

                </div>

                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-zinc-600 hover:text-red-400 hover:bg-red-400/10 transition-all"
                >
                  <Trash2 size={16} />
                </button>

              </article>
            ))}

          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-28 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-black">
              Order Summary
            </h2>

            <div className="space-y-4 mt-7">

              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">
                  Subtotal
                </span>

                <span>
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">
                  Shipping
                </span>

                <span>
                  {shipping === 0
                    ? "FREE"
                    : `₹${shipping}`}
                </span>
              </div>

              {cartTotal > 0 && cartTotal < 999 && (
                <p className="text-xs text-zinc-600">
                  Add ₹{(999 - cartTotal).toLocaleString("en-IN")} more
                  for free shipping.
                </p>
              )}

              <div className="h-px bg-white/10" />

              <div className="flex justify-between">

                <span className="font-bold">
                  Total
                </span>

                <span className="text-xl font-black">
                  ₹{total.toLocaleString("en-IN")}
                </span>

              </div>

            </div>

            <button
              type="button"
              onClick={() => navigate("/checkout")}
              className="w-full mt-7 h-12 rounded-full bg-white !text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
            >
              Proceed to Checkout
              <ArrowRight size={16} />
            </button>

          </aside>

        </div>

      </section>
    </main>
  );
};

export default Cart;