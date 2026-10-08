import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  Star,
  ArrowUpRight,
  Check,
} from "lucide-react";

import { useCart } from "../context/CartContext";

const fallbackImages = [
  "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=1200&q=90",
];

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const [imageSrc, setImageSrc] = useState(product.image);

  useEffect(() => {
    setImageSrc(product.image);

    const wishlist = JSON.parse(
      localStorage.getItem("aurabuds-wishlist") || "[]"
    );

    setLiked(
      wishlist.some(
        (item) => String(item.id) === String(product.id)
      )
    );
  }, [product.id, product.image]);

  const handleImageError = () => {
    const fallback =
      fallbackImages[(Number(product.id) - 1) % fallbackImages.length];

    if (imageSrc !== fallback) {
      setImageSrc(fallback);
    }
  };

  const toggleWishlist = () => {
    const wishlist = JSON.parse(
      localStorage.getItem("aurabuds-wishlist") || "[]"
    );

    if (liked) {
      const updated = wishlist.filter(
        (item) => String(item.id) !== String(product.id)
      );

      localStorage.setItem(
        "aurabuds-wishlist",
        JSON.stringify(updated)
      );

      setLiked(false);
    } else {
      localStorage.setItem(
        "aurabuds-wishlist",
        JSON.stringify([
          ...wishlist,
          product,
        ])
      );

      setLiked(true);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <article className="group bg-zinc-950 border border-white/10 rounded-[1.5rem] overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-500">

      {/* IMAGE */}
      <div className="relative aspect-square bg-zinc-900 overflow-hidden">

        {/* PRODUCT IMAGE */}
        <Link
          to={`/products/${product.id}`}
          className="block absolute inset-0"
        >
          <img
            src={imageSrc}
            alt={product.name}
            onError={handleImageError}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </Link>

        {/* BADGE */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-20 bg-white !text-black px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">
            {product.badge}
          </div>
        )}

        {/* WISHLIST */}
        <button
          type="button"
          onClick={toggleWishlist}
          aria-label="Toggle wishlist"
          className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
            liked
              ? "bg-white !text-black border-white"
              : "bg-black/60 !text-white border-white/10 hover:bg-white hover:!text-black"
          }`}
        >
          <Heart
            size={17}
            fill={liked ? "currentColor" : "none"}
          />
        </button>

        {/* VIEW DETAILS */}
        <Link
          to={`/products/${product.id}`}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-white !text-black px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all duration-300 whitespace-nowrap"
        >
          <span>View Details</span>
          <ArrowUpRight size={14} />
        </Link>

      </div>

      {/* CONTENT */}
      <div className="p-5">

        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-bold mt-2 hover:text-zinc-400 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* RATING */}
        <div className="flex items-center gap-2 mt-3">

          <div className="flex items-center gap-1">
            <Star
              size={13}
              fill="currentColor"
            />

            <span className="text-xs font-bold">
              {product.rating}
            </span>
          </div>

          <span className="text-xs text-zinc-600">
            ({product.reviews} reviews)
          </span>

        </div>

        {/* PRICE */}
        <div className="flex items-center flex-wrap gap-2 mt-4">

          <span className="text-xl font-black">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-zinc-600 line-through">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>
          )}

          {product.discount && (
            <span className="text-[10px] font-bold text-zinc-400">
              {product.discount}
            </span>
          )}

        </div>

        {/* CART */}
        <button
          type="button"
          onClick={handleAddToCart}
          className={`w-full mt-5 min-h-[48px] flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-bold text-sm transition-all duration-300 ${
            added
              ? "bg-white !text-black"
              : "bg-white/[0.06] !text-white border border-white/10 hover:bg-white hover:!text-black"
          }`}
        >
          {added ? (
            <>
              <Check size={17} />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingBag size={17} />
              <span>Add to Cart</span>
            </>
          )}
        </button>

      </div>

    </article>
  );
};

export default ProductCard;