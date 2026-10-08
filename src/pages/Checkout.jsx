import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Lock,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    cartTotal,
    clearCart,
  } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "card",
  });

  const [errors, setErrors] = useState({});

  const shipping = cartTotal >= 999 ? 0 : 79;
  const total = cartTotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Enter your name.";
    }

    if (!form.email.trim() || !form.email.includes("@")) {
      nextErrors.email = "Enter a valid email.";
    }

    if (!form.phone.trim() || form.phone.length < 10) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (!form.address.trim()) {
      nextErrors.address = "Enter your address.";
    }

    if (!form.city.trim()) {
      nextErrors.city = "Enter your city.";
    }

    if (!form.pincode.trim() || form.pincode.length !== 6) {
      nextErrors.pincode = "Enter a valid 6-digit pincode.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const order = {
      id: `AURA-${Date.now().toString().slice(-8)}`,
      customer: form,
      items: cartItems,
      subtotal: cartTotal,
      shipping,
      total,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "aurabuds-last-order",
      JSON.stringify(order)
    );

    clearCart();

    navigate("/order-confirmation");
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white pt-32">

        <section className="min-h-[65vh] flex items-center justify-center px-5 text-center">

          <div>

            <h1 className="text-4xl font-black">
              Your cart is empty.
            </h1>

            <Link
              to="/products"
              className="inline-flex mt-6 px-6 py-3 rounded-full bg-white !text-black font-bold text-sm"
            >
              Shop Products
            </Link>

          </div>

        </section>
      </main>
    );
  }

  const Field = ({
    label,
    name,
    type = "text",
    placeholder,
    className = "",
  }) => (
    <div className={className}>

      <label className="block text-xs font-semibold text-zinc-300 mb-2">
        {label}
      </label>

      <input
        name={name}
        type={type}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full h-12 rounded-xl bg-white/[0.04] border border-white/10 px-4 text-sm text-white outline-none focus:border-white/30"
      />

      {errors[name] && (
        <p className="text-xs text-red-400 mt-1.5">
          {errors[name]}
        </p>
      )}

    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24">

      <section className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">

        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white"
        >
          <ArrowLeft size={14} />
          Back to cart
        </Link>

        <div className="mt-6">

          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            Secure Checkout
          </p>

          <h1 className="text-5xl sm:text-6xl font-black tracking-[-0.06em] mt-3">
            Complete your order.
          </h1>

        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8 mt-12 items-start">

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7"
          >

            <div className="flex items-center gap-3 mb-7">

              <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
                <Lock size={17} />
              </div>

              <div>
                <h2 className="font-bold">
                  Delivery Information
                </h2>

                <p className="text-xs text-zinc-600">
                  Your information is securely processed.
                </p>
              </div>

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              <Field
                label="Full Name"
                name="name"
                placeholder="Your name"
              />

              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />

              <Field
                label="Phone"
                name="phone"
                type="tel"
                placeholder="10 digit phone number"
              />

              <Field
                label="City"
                name="city"
                placeholder="Bengaluru"
              />

              <Field
                label="Pincode"
                name="pincode"
                placeholder="560001"
              />

              <div />

              <Field
                label="Delivery Address"
                name="address"
                placeholder="House number, street, area"
                className="sm:col-span-2"
              />

            </div>

            <div className="mt-9">

              <h2 className="font-bold">
                Payment Method
              </h2>

              <div className="grid sm:grid-cols-3 gap-3 mt-4">

                {[
                  ["card", "Card"],
                  ["upi", "UPI"],
                  ["cod", "Cash on Delivery"],
                ].map(([value, label]) => (
                  <label
                    key={value}
                    className={`cursor-pointer rounded-xl border p-4 transition-all ${
                      form.payment === value
                        ? "border-white bg-white/[0.08]"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >

                    <input
                      type="radio"
                      name="payment"
                      value={value}
                      checked={form.payment === value}
                      onChange={handleChange}
                      className="sr-only"
                    />

                    <div className="flex items-center gap-2">

                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          form.payment === value
                            ? "border-white"
                            : "border-zinc-700"
                        }`}
                      >
                        {form.payment === value && (
                          <span className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </span>

                      <span className="text-sm font-semibold">
                        {label}
                      </span>

                    </div>

                  </label>
                ))}

              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-9 h-13 min-h-[52px] rounded-full bg-white !text-black font-black text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
            >
              <Check size={17} />
              Place Order
              <ArrowRight size={16} />
            </button>

          </form>

          {/* Summary */}
          <aside className="lg:sticky lg:top-28 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <h2 className="text-xl font-black">
              Order Summary
            </h2>

            <div className="space-y-4 mt-6">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-lg object-cover bg-zinc-900"
                  />

                  <div className="flex-1 min-w-0">

                    <p className="text-sm font-semibold truncate">
                      {item.name}
                    </p>

                    <p className="text-xs text-zinc-600">
                      Qty: {item.quantity}
                    </p>

                  </div>

                  <p className="text-sm font-bold">
                    ₹{(
                      item.price * item.quantity
                    ).toLocaleString("en-IN")}
                  </p>

                </div>
              ))}

            </div>

            <div className="h-px bg-white/10 my-6" />

            <div className="space-y-4">

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
                  {shipping === 0 ? "FREE" : `₹${shipping}`}
                </span>
              </div>

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

          </aside>

        </div>
      </section>
    </main>
  );
};

export default Checkout;