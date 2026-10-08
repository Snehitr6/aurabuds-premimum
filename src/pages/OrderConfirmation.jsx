import React from "react";
import {
  Check,
  ArrowRight,
  PackageCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const order = JSON.parse(
    localStorage.getItem("aurabuds-last-order") || "null"
  );

  const orderId = order?.id || "AURA-ORDER";

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-24">

      <section className="min-h-[75vh] flex items-center justify-center px-5">

        <div className="w-full max-w-2xl text-center">

          <div className="relative w-24 h-24 mx-auto">

            <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-2xl" />

            <div className="relative w-24 h-24 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">

              <Check
                size={38}
                className="text-emerald-400"
              />

            </div>

          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-400 mt-8">
            Order Confirmed
          </p>

          <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.06em] mt-3">
            You're all set.
          </h1>

          <p className="text-zinc-500 max-w-lg mx-auto mt-5 leading-7">
            Thank you for choosing AURABUDS. Your order has been
            successfully placed and will be prepared for delivery.
          </p>

          <div className="inline-flex items-center gap-3 mt-7 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03]">

            <PackageCheck size={17} />

            <span className="text-sm">
              Order ID:
            </span>

            <strong className="text-sm">
              {orderId}
            </strong>

          </div>

          {order?.total && (
            <p className="text-sm text-zinc-600 mt-4">
              Total paid/order value: ₹
              {Number(order.total).toLocaleString("en-IN")}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-9">

            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white !text-black font-bold text-sm"
            >
              Continue Shopping
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/10 text-sm font-semibold hover:bg-white/10"
            >
              Back Home
            </Link>

          </div>

        </div>

      </section>
    </main>
  );
};

export default OrderConfirmation;