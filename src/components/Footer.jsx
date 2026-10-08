import React from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   BRAND LOGO
========================================================= */

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-3 group">

      {/* Logo */}
      <div className="relative w-12 h-12 rounded-[14px] bg-white flex items-center justify-center overflow-hidden shadow-[0_10px_35px_rgba(255,255,255,.07)] group-hover:scale-105 transition-transform duration-300">

        <svg
          viewBox="0 0 48 48"
          className="w-8 h-8 text-black"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* Main earbud */}
          <path
            d="M13 20.5C13 15.8 16.5 12 21 12C25.5 12 29 15.8 29 20.5V27.5C29 31.9 25.9 35 21.8 35C18.1 35 15.5 32.5 15.5 29.2V25.5"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Second earbud */}
          <path
            d="M31 20.5C31 16.8 33.5 14 37 14C40.5 14 43 16.8 43 20.5V25.5C43 28.7 40.7 31 37.7 31C34.5 31 32.5 28.7 32.5 25.7"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Sound waves */}
          <path
            d="M7 23C5.7 24.5 5.7 26.5 7 28"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          <path
            d="M41 34C42.5 35.5 42.5 37.5 41 39"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

        </svg>
      </div>

      {/* Brand */}
      <div>

        <div className="text-xl font-black tracking-[-0.045em] text-white">
          AURABUDS
        </div>

        <div className="text-[7px] tracking-[0.38em] text-zinc-500 font-semibold mt-1">
          PREMIUM AUDIO
        </div>

      </div>
    </div>
  );
};

/* =========================================================
   SOCIAL ICONS
========================================================= */

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-[17px] h-[17px]"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.8"
    />

    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth="1.8"
    />

    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="currentColor"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-[17px] h-[17px]"
  >
    <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v6h4v-6h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
  </svg>
);

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-[17px] h-[17px]"
  >
    <path
      d="M5 4L19 20M19 4L5 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-[18px] h-[18px]"
  >
    <path d="M21 7.2a2.9 2.9 0 0 0-2-2C17.2 4.7 12 4.7 12 4.7s-5.2 0-7 .5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 2.5 12 30 30 0 0 0 3 16.8a2.9 2.9 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.9 2.9 0 0 0 2-2 30 30 0 0 0 .5-4.8 30 30 0 0 0-.5-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
  </svg>
);

/* =========================================================
   FOOTER
========================================================= */

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/[0.07] overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-[-200px] w-[450px] h-[450px] rounded-full bg-red-900/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-20">

        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr] gap-12 lg:gap-10">

          {/* Brand */}
          <div>

            <Link to="/" className="inline-block">
              <BrandLogo />
            </Link>

            <p className="mt-6 max-w-[330px] text-sm leading-7 text-zinc-500">
              Premium wireless audio engineered for people who
              expect more from every beat, every call and every
              moment.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-7">

              <a
                href="#"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <InstagramIcon />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <FacebookIcon />
              </a>

              <a
                href="#"
                aria-label="X"
                className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <XIcon />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <YouTubeIcon />
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>

            <h3 className="text-sm font-bold text-white mb-6">
              Explore
            </h3>

            <div className="space-y-4">

              <Link
                to="/"
                className="block text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="block text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Products
              </Link>

              <Link
                to="/about"
                className="block text-sm text-zinc-500 hover:text-white transition-colors"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="block text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Contact
              </Link>

              <Link
                to="/login"
                className="block text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Login
              </Link>

            </div>
          </div>

          {/* Customer Care */}
          <div>

            <h3 className="text-sm font-bold text-white mb-6">
              Customer Care
            </h3>

            <div className="space-y-4">

              <Link
                to="/contact"
                className="block text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Shipping & Returns
              </Link>

              <Link
                to="/contact"
                className="block text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Warranty
              </Link>

              <Link
                to="/contact"
                className="block text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                to="/contact"
                className="block text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-sm font-bold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="text-[11px] text-zinc-600">
                    Email
                  </p>

                  <a
                    href="mailto:hello@aurabuds.com"
                    className="text-sm text-zinc-300 hover:text-white transition-colors"
                  >
                    hello@aurabuds.com
                  </a>
                </div>

              </div>

              <div className="flex items-start gap-3">

                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-[11px] text-zinc-600">
                    Phone
                  </p>

                  <a
                    href="tel:+9118001234567"
                    className="text-sm text-zinc-300 hover:text-white transition-colors"
                  >
                    +91 1800 123 4567
                  </a>
                </div>

              </div>

              <div className="flex items-start gap-3">

                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-[11px] text-zinc-600">
                    Location
                  </p>

                  <p className="text-sm text-zinc-300">
                    Bengaluru, India
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* =================================================
            NEWSLETTER
        ================================================= */}

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 sm:p-7 lg:p-8">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">

            <div>

              <div className="flex items-center gap-2">

                <Mail size={17} />

                <h3 className="text-lg font-bold">
                  Stay in the sound.
                </h3>

              </div>

              <p className="text-sm text-zinc-600 mt-2">
                Get product launches, exclusive offers and audio stories.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">

              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-[360px] h-12 rounded-full bg-black border border-white/10 px-5 text-sm text-white outline-none focus:border-white/30"
              />

              <button
                type="button"
                className="h-12 px-7 rounded-full bg-white !text-black font-bold text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                Join
                <ArrowUpRight size={15} />
              </button>

            </div>

          </div>
        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="mt-10 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-zinc-700">
            © 2026 AURABUDS. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-xs text-zinc-700">
            <span>
              Made for better sound.
            </span>

            <span className="w-1 h-1 rounded-full bg-zinc-700" />

            <span>
              Designed in India.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;