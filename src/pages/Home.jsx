import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  ShieldCheck,
  Star,
  Truck,
  Zap,
} from "lucide-react";

import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  const allReviews = products
    .flatMap((product) =>
      (product.reviewsList || []).map((review) => ({
        ...review,
        productName: product.name,
        productImage: product.image,
      }))
    )
    .slice(0, 6);

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <Hero />

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              The Collection
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.05em] mt-3">
              Find your sound.
            </h2>

            <p className="text-zinc-500 mt-4 max-w-xl">
              Premium audio products designed for music,
              work, travel and everything between.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 !text-white font-semibold hover:!text-zinc-400 transition-colors"
          >
            <span>View all products</span>
            <ArrowRight size={17} />
          </Link>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

      {/* FEATURE STRIP */}
      <section className="border-y border-white/10 bg-zinc-950">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">

            <Feature
              icon={<Truck size={22} />}
              title="Free Shipping"
              text="On orders above ₹999"
            />

            <Feature
              icon={<ShieldCheck size={22} />}
              title="1 Year Warranty"
              text="Complete product protection"
            />

            <Feature
              icon={<Headphones size={22} />}
              title="Premium Sound"
              text="Engineered for detail"
            />

            <Feature
              icon={<Zap size={22} />}
              title="Fast Support"
              text="We're here when you need us"
            />

          </div>

        </div>

      </section>

      {/* PREMIUM BANNER */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">

        <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 border border-white/10 min-h-[480px] flex items-end">

          <img
            src={products[5].image}
            alt="AURA Studio"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">

            <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              AURA STUDIO
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.05em] mt-4">
              Sound without compromise.
            </h2>

            <p className="text-zinc-400 mt-5 leading-relaxed">
              Reference-inspired audio, premium materials and
              intelligent noise cancellation for listeners who
              expect more.
            </p>

            <Link
              to="/products/6"
              className="inline-flex items-center gap-2 mt-8 bg-white !text-black px-6 py-3.5 rounded-full font-bold hover:bg-zinc-200 transition-all"
            >
              <span>Explore AURA Studio</span>
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="border-t border-white/10 bg-zinc-950">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Customer Reviews
            </p>

            <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.05em] mt-4">
              Loved by listeners.
            </h2>

            <p className="text-zinc-500 mt-4">
              Real feedback from people who made AURABUDS
              part of their everyday listening.
            </p>

            <div className="flex items-center justify-center gap-2 mt-6">

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              <span className="text-sm font-bold">
                4.8 / 5
              </span>

              <span className="text-sm text-zinc-600">
                from 1,800+ reviews
              </span>

            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">

            {allReviews.map((review) => (
              <ReviewCard
                key={`${review.productName}-${review.id}-${review.name}`}
                review={review}
              />
            ))}

          </div>

          <div className="text-center mt-10">

            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-white/10 !text-white px-6 py-3.5 rounded-full font-bold hover:bg-white hover:!text-black transition-all"
            >
              <span>Explore Products</span>
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">

        <div className="rounded-[2rem] bg-white !text-black p-8 sm:p-12 lg:p-16 text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Your next soundtrack
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.05em] mt-4">
            Hear more. Feel more.
          </h2>

          <p className="max-w-xl mx-auto text-zinc-500 mt-4">
            Discover your perfect AURABUDS and experience
            premium wireless audio.
          </p>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-black !text-white px-7 py-4 rounded-full font-bold mt-8 hover:bg-zinc-800 transition-all"
          >
            <span>Shop AURABUDS</span>
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </main>
  );
};

/* FEATURE */

const Feature = ({ icon, title, text }) => {
  return (
    <div className="flex items-center gap-4 p-6 border-b sm:border-r lg:border-b-0 border-white/10 last:border-0">

      <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold">
          {title}
        </h3>

        <p className="text-xs text-zinc-600 mt-1">
          {text}
        </p>
      </div>

    </div>
  );
};

/* REVIEW CARD */

const ReviewCard = ({ review }) => {
  const initials = review.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="group bg-black border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-white !text-black flex items-center justify-center font-black text-sm">
            {initials}
          </div>

          <div>

            <div className="flex items-center gap-2">

              <h3 className="font-bold text-sm">
                {review.name}
              </h3>

              {review.verified && (
                <CheckCircle2
                  size={14}
                  className="text-zinc-400"
                />
              )}

            </div>

            <p className="text-xs text-zinc-600 mt-1">
              {review.date}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-1">

          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={13}
              fill={
                index < review.rating
                  ? "currentColor"
                  : "none"
              }
            />
          ))}

        </div>

      </div>

      <p className="text-zinc-400 leading-relaxed text-sm mt-6">
        "{review.comment}"
      </p>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">

        <span className="text-[10px] uppercase tracking-wider text-zinc-600">
          Verified Purchase
        </span>

        <span className="text-[10px] text-zinc-600">
          {review.productName}
        </span>

      </div>

    </article>
  );
};

export default Home;