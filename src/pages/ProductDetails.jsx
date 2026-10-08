import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";

import products from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-5 pt-24">
        <div className="text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            404
          </p>

          <h1 className="text-4xl font-black mt-3">
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-white !text-black px-6 py-3.5 rounded-full font-bold mt-7"
          >
            <ArrowLeft size={17} />
            <span>Back to Products</span>
          </Link>

        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  return (
    <main className="min-h-screen bg-black text-white pt-[76px]">

      {/* BACK */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8">

        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Products</span>
        </Link>

      </div>

      {/* PRODUCT */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-20">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">

          {/* IMAGE */}
          <div className="lg:sticky lg:top-28 h-fit">

            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-zinc-950 border border-white/10">

              {product.badge && (
                <div className="absolute top-5 left-5 z-20 bg-white !text-black px-4 py-2 rounded-full text-xs font-black uppercase">
                  {product.badge}
                </div>
              )}

              <button
                type="button"
                onClick={() => setLiked(!liked)}
                className={`absolute top-5 right-5 z-20 w-11 h-11 rounded-full flex items-center justify-center border backdrop-blur-xl ${
                  liked
                    ? "bg-white !text-black border-white"
                    : "bg-black/50 !text-white border-white/10 hover:bg-white hover:!text-black"
                }`}
              >
                <Heart
                  size={19}
                  fill={liked ? "currentColor" : "none"}
                />
              </button>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

            </div>

            <div className="grid grid-cols-3 gap-3 mt-4">

              <Benefit
                icon={<ShieldCheck size={18} />}
                text="1 Year Warranty"
              />

              <Benefit
                icon={<Truck size={18} />}
                text="Fast Delivery"
              />

              <Benefit
                icon={<RotateCcw size={18} />}
                text="Easy Returns"
              />

            </div>

          </div>

          {/* DETAILS */}
          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              {product.category} Collection
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.05em] leading-[0.95] mt-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-6">

              <div className="flex items-center gap-1 bg-white !text-black px-3 py-1.5 rounded-full">
                <Star size={14} fill="currentColor" />
                <span className="text-xs font-black">
                  {product.rating}
                </span>
              </div>

              <span className="text-sm text-zinc-500">
                {product.reviews} verified reviews
              </span>

            </div>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mt-7">
              {product.description}
            </p>

            <div className="flex items-center flex-wrap gap-3 mt-8">

              <span className="text-3xl sm:text-4xl font-black">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              <span className="text-lg text-zinc-600 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>

              <span className="bg-white/10 text-zinc-300 px-3 py-1.5 rounded-full text-xs font-bold">
                {product.discount}
              </span>

            </div>

            <div className="h-px bg-white/10 my-8" />

            {/* FEATURES */}
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Key Features
            </h2>

            <div className="grid sm:grid-cols-2 gap-3 mt-5">

              {product.features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-zinc-950 border border-white/10 rounded-xl p-4"
                >

                  <div className="w-5 h-5 rounded-full bg-white !text-black flex items-center justify-center shrink-0">
                    <Check size={12} />
                  </div>

                  <span className="text-sm text-zinc-300">
                    {feature}
                  </span>

                </div>
              ))}

            </div>

            {/* QUANTITY */}
            <div className="mt-8">

              <p className="text-sm font-bold mb-3">
                Quantity
              </p>

              <div className="inline-flex items-center border border-white/10 rounded-xl overflow-hidden">

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((value) =>
                      Math.max(1, value - 1)
                    )
                  }
                  className="w-11 h-11 flex items-center justify-center text-white hover:bg-white hover:text-black"
                >
                  <Minus size={16} />
                </button>

                <span className="w-12 text-center font-bold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((value) => value + 1)
                  }
                  className="w-11 h-11 flex items-center justify-center text-white hover:bg-white hover:text-black"
                >
                  <Plus size={16} />
                </button>

              </div>

            </div>

            {/* ACTIONS */}
            <div className="grid sm:grid-cols-[1fr_auto] gap-3 mt-6">

              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex items-center justify-center gap-3 rounded-xl py-4 px-5 font-bold ${
                  added
                    ? "bg-white !text-black"
                    : "bg-white !text-black hover:bg-zinc-200"
                }`}
              >
                {added ? (
                  <>
                    <Check size={19} />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={19} />
                    <span>Add to Cart</span>
                    <ArrowRight size={17} />
                  </>
                )}
              </button>

              <Link
                to="/cart"
                className="flex items-center justify-center gap-2 border border-white/15 text-white rounded-xl px-6 py-4 font-bold hover:bg-white hover:text-black transition-all"
              >
                View Cart
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* REVIEWS */}
      <section className="border-t border-white/10 bg-zinc-950">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">

          <div className="grid lg:grid-cols-[280px_1fr] gap-10">

            {/* RATING SUMMARY */}
            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                Customer Reviews
              </p>

              <div className="text-6xl font-black mt-5">
                {product.rating}
              </div>

              <div className="flex items-center gap-1 mt-3">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill={
                      star <= Math.round(product.rating)
                        ? "currentColor"
                        : "none"
                    }
                  />
                ))}

              </div>

              <p className="text-sm text-zinc-500 mt-3">
                Based on {product.reviews} reviews
              </p>

              <div className="mt-7 p-5 border border-white/10 rounded-2xl">

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={17} />
                  <span className="text-sm font-bold">
                    Verified Reviews
                  </span>
                </div>

                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                  Reviews are from customers who purchased
                  AURABUDS products.
                </p>

              </div>

            </div>

            {/* REVIEW CARDS */}
            <div className="grid md:grid-cols-2 gap-5">

              {product.reviewsList?.map((review) => (
                <Review
                  key={review.id}
                  review={review}
                />
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* RELATED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">

        <div className="flex items-end justify-between gap-5">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
              You may also like
            </p>

            <h2 className="text-3xl sm:text-4xl font-black mt-3">
              More AURABUDS
            </h2>
          </div>

          <Link
            to="/products"
            className="hidden sm:flex items-center gap-2 text-sm font-bold"
          >
            View All
            <ArrowRight size={16} />
          </Link>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

          {products
            .filter(
              (item) =>
                item.category === product.category &&
                item.id !== product.id
            )
            .slice(0, 4)
            .map((item) => (
              <MiniProduct
                key={item.id}
                product={item}
              />
            ))}

        </div>

      </section>

    </main>
  );
};

/* BENEFIT */

const Benefit = ({ icon, text }) => {
  return (
    <div className="border border-white/10 rounded-2xl p-4 bg-zinc-950 text-center">

      <div className="flex justify-center mb-2">
        {icon}
      </div>

      <p className="text-[10px] sm:text-xs text-zinc-500">
        {text}
      </p>

    </div>
  );
};

/* REVIEW */

const Review = ({ review }) => {
  const initials = review.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="bg-black border border-white/10 rounded-2xl p-6">

      <div className="flex items-center justify-between gap-3">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-white !text-black flex items-center justify-center text-xs font-black">
            {initials}
          </div>

          <div>

            <div className="flex items-center gap-2">

              <p className="text-sm font-bold">
                {review.name}
              </p>

              {review.verified && (
                <CheckCircle2 size={14} />
              )}

            </div>

            <p className="text-xs text-zinc-600 mt-1">
              {review.date}
            </p>

          </div>

        </div>

        <div className="flex gap-0.5">

          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={12}
              fill={
                index < review.rating
                  ? "currentColor"
                  : "none"
              }
            />
          ))}

        </div>

      </div>

      <p className="text-sm text-zinc-400 leading-relaxed mt-5">
        "{review.comment}"
      </p>

      <p className="text-[10px] text-zinc-700 uppercase tracking-wider mt-5">
        Verified Purchase
      </p>

    </article>
  );
};

/* MINI PRODUCT */

const MiniProduct = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden"
    >

      <div className="aspect-square overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

      </div>

      <div className="p-4">

        <p className="text-[10px] uppercase text-zinc-600">
          {product.category}
        </p>

        <h3 className="font-bold mt-1">
          {product.name}
        </h3>

        <p className="font-black mt-3">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

      </div>

    </Link>
  );
};

export default ProductDetails;