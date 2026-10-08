import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Search,
  UserRound,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import {
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { useCart } from "../context/CartContext";

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-11 h-11 rounded-[13px] bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        <svg
          viewBox="0 0 48 48"
          className="w-7 h-7 text-black"
          fill="none"
        >
          <path
            d="M13 20.5C13 15.8 16.5 12 21 12C25.5 12 29 15.8 29 20.5V27.5C29 31.9 25.9 35 21.8 35C18.1 35 15.5 32.5 15.5 29.2V25.5"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          <path
            d="M31 20.5C31 16.8 33.5 14 37 14C40.5 14 43 16.8 43 20.5V25.5C43 28.7 40.7 31 37.7 31C34.5 31 32.5 28.7 32.5 25.7"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          <path
            d="M7 23C5.7 24.5 5.7 26.5 7 28"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="leading-none">
        <div className="text-[18px] font-black tracking-[-0.04em]">
          AURABUDS
        </div>

        <div className="text-[7px] tracking-[0.38em] text-zinc-500 mt-1">
          PREMIUM AUDIO
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useCart();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    setSearch(params.get("search") || "");
  }, [location.search]);

  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  const closeMenu = () => {
    setMobileOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const value = search.trim();

    if (value) {
      navigate(`/products?search=${encodeURIComponent(value)}`);
    } else {
      navigate("/products");
    }

    setSearchOpen(false);
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black/85 backdrop-blur-2xl border-b border-white/[0.07]">

      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="h-[76px] flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="AURABUDS Home"
          >
            <BrandLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-1">

            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Search"
            >
              <Search size={19} />
            </button>

            <Link
              to="/login"
              className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Account"
            >
              <UserRound size={19} />
            </Link>

            <Link
              to="/cart"
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Cart"
            >
              <ShoppingBag size={19} />

              {cartCount > 0 && (
                <span className="absolute top-1 right-0 min-w-[17px] h-[17px] px-1 rounded-full bg-white !text-black text-[9px] font-black flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

          </div>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-1">

            <Link
              to="/cart"
              className="relative w-10 h-10 flex items-center justify-center text-zinc-300"
            >
              <ShoppingBag size={19} />

              {cartCount > 0 && (
                <span className="absolute top-1 right-0 min-w-[16px] h-4 px-1 rounded-full bg-white !text-black text-[8px] font-black flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="w-10 h-10 flex items-center justify-center text-zinc-300"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>

          </div>

        </div>

        {/* Search */}
        {searchOpen && (
          <form
            onSubmit={handleSearch}
            className="hidden lg:block pb-4"
          >
            <div className="max-w-xl mx-auto relative">

              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search AURABUDS products..."
                className="w-full h-12 rounded-full bg-white/[0.06] border border-white/10 pl-11 pr-14 text-sm text-white outline-none focus:border-white/30"
              />

              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white !text-black flex items-center justify-center"
              >
                <ArrowRight size={15} />
              </button>

            </div>
          </form>
        )}

      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/[0.07] bg-black/95 backdrop-blur-2xl">

          <form
            onSubmit={handleSearch}
            className="px-5 pt-5"
          >
            <div className="relative">

              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full h-11 rounded-full bg-white/[0.06] border border-white/10 pl-11 pr-5 text-sm text-white outline-none"
              />

            </div>
          </form>

          <nav className="px-5 py-5 space-y-1">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3.5 rounded-xl text-sm font-semibold ${
                    isActive
                      ? "bg-white !text-black"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/login"
              onClick={closeMenu}
              className="block px-4 py-3.5 rounded-xl text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/[0.05]"
            >
              Login
            </NavLink>

          </nav>
        </div>
      )}

    </header>
  );
};

export default Navbar;