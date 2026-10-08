import React from "react";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import products from "../data/products";

const Hero = () => {
  const heroProduct = products[0];

  const backgroundImage =
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=2200&q=90";

  const productFallback =
    "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1400&q=90";

  return (
    <section className="aurabuds-hero relative min-h-screen overflow-hidden bg-black text-white pt-20 sm:pt-24">

      {/* =====================================================
          REAL BACKGROUND IMAGE
      ===================================================== */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      />

      {/* Dark cinematic overlays */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      {/* Red cinematic lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-950/40" />

      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <div className="absolute pointer-events-none right-[-180px] top-[5%] w-[500px] h-[500px] rounded-full bg-red-700/15 blur-[140px]" />

      <div className="absolute pointer-events-none left-[-180px] bottom-[-180px] w-[450px] h-[450px] rounded-full bg-blue-900/10 blur-[140px]" />

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* =====================================================
          DECORATIVE RINGS
      ===================================================== */}

      <div className="hero-ring hero-ring-one" />
      <div className="hero-ring hero-ring-two" />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="aurabuds-hero-content">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="hero-content">

            {/* Badge */}
            <div className="hero-fade hero-delay-1 inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border border-white/15 bg-black/55 backdrop-blur-xl text-zinc-200 text-[11px] sm:text-sm">

              <Sparkles size={13} />

              <span>
                Next-generation wireless audio
              </span>

              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />

            </div>

            {/* Heading */}
            <h1 className="hero-fade hero-delay-2 hero-heading">

              <span className="text-white">
                Hear
              </span>

              <br />

              <span className="text-zinc-400">
                everything.
              </span>

              <br />

              <span className="text-white">
                Feel more.
              </span>

            </h1>

            {/* Description */}
            <p className="hero-fade hero-delay-3 hero-description">

              Meet{" "}
              <span className="text-white font-semibold">
                AURABUDS
              </span>{" "}
              — premium wireless audio engineered for powerful bass,
              crystal-clear vocals and all-day comfort.

            </p>

            {/* Buttons */}
            <div className="hero-fade hero-delay-4 hero-buttons">

              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white !text-black px-6 sm:px-7 py-3.5 font-bold text-sm shadow-[0_12px_40px_rgba(255,255,255,.08)] hover:bg-zinc-200 hover:-translate-y-1 transition-all duration-300"
              >

                <span>
                  Shop Collection
                </span>

                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform"
                />

              </Link>

              <Link
                to={`/products/${heroProduct?.id || 1}`}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-xl !text-white px-5 py-3.5 font-semibold text-sm hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300"
              >

                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-white/25">
                  <Play size={11} fill="currentColor" />
                </span>

                <span>
                  Explore Pro X
                </span>

              </Link>

            </div>

            {/* Trust information */}
            <div className="hero-fade hero-delay-5 hero-trust">

              <div className="hero-trust-item">

                <ShieldCheck size={16} />

                <span>
                  Premium Build
                </span>

              </div>

              <div className="hero-trust-item">

                <Zap size={16} />

                <span>
                  40H Battery
                </span>

              </div>

              <div className="hero-trust-item">

                <span className="font-bold text-white">
                  4.9
                </span>

                <span className="text-yellow-400 text-[11px] tracking-wide">
                  ★★★★★
                </span>

                <span>
                  2.4k+ reviews
                </span>

              </div>

            </div>
          </div>

          {/* =================================================
              PRODUCT SHOWCASE
          ================================================= */}

          <div className="hero-product-area">

            <div className="hero-product-glow" />

            <div className="hero-product-ring" />

            <div className="hero-product">

              {/* Product image card */}
              <div className="hero-product-card">

                <img
                  src={heroProduct?.image || productFallback}
                  alt={heroProduct?.name || "AURA Pro X"}
                  onError={(e) => {
                    e.currentTarget.src = productFallback;
                  }}
                  className="hero-product-image"
                />

                {/* Image overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/10" />

                <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-transparent to-blue-950/20 mix-blend-screen" />

                {/* Top left label */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 px-3 py-2 rounded-full bg-black/65 backdrop-blur-xl border border-white/10">

                  <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-zinc-300">
                    Flagship Wireless
                  </p>

                </div>

                {/* Premium badge */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-black/75 backdrop-blur-xl border border-white/10">

                  <div className="flex items-center gap-2">

                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 flex items-center justify-center">
                      <ShieldCheck size={13} />
                    </div>

                    <div>

                      <p className="text-[10px] sm:text-[11px] font-bold">
                        Premium Build
                      </p>

                      <p className="text-[8px] text-zinc-500">
                        Built to last
                      </p>

                    </div>

                  </div>

                </div>

                {/* Bottom product details */}
                <div className="absolute left-4 right-4 bottom-4 sm:left-5 sm:right-5 sm:bottom-5">

                  <div className="flex items-end justify-between gap-3">

                    <div>

                      <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.24em] text-zinc-400">
                        AURABUDS
                      </p>

                      <h2 className="text-2xl sm:text-3xl font-black mt-0.5">
                        Pro X
                      </h2>

                      <div className="flex items-center gap-2 mt-1.5">

                        <span className="text-yellow-400 text-[10px] sm:text-xs">
                          ★★★★★
                        </span>

                        <span className="text-[9px] sm:text-[10px] text-zinc-400">
                          4.9 / 5
                        </span>

                      </div>

                    </div>

                    {/* Price */}
                    <div className="px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 shrink-0">

                      <p className="text-[8px] sm:text-[9px] text-zinc-500">
                        Starting at
                      </p>

                      <p className="text-xs sm:text-sm font-black">
                        ₹
                        {heroProduct?.price?.toLocaleString("en-IN")}
                      </p>

                    </div>

                  </div>

                  {/* Features */}
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/10">

                    <Zap size={12} />

                    <span className="text-[9px] sm:text-[10px] text-zinc-300">
                      Up to 40 hours
                    </span>

                    <span className="w-1 h-1 rounded-full bg-zinc-600" />

                    <span className="text-[9px] sm:text-[10px] text-zinc-400">
                      ANC
                    </span>

                  </div>

                </div>
              </div>

              {/* Floating dots */}
              <div className="hero-dot hero-dot-one" />
              <div className="hero-dot hero-dot-two" />

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 z-30">

        <span className="text-[9px] uppercase tracking-[0.3em]">
          Scroll to explore
        </span>

        <div className="w-px h-7 bg-gradient-to-b from-zinc-500 to-transparent" />

      </div>

    </section>
  );
};

export default Hero;