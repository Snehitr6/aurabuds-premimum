import React, { useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Please complete all fields.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    localStorage.setItem(
      "aurabuds-user",
      JSON.stringify({
        name: form.name,
        email: form.email,
        loggedIn: true,
      })
    );

    navigate("/");
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 flex items-center">

      <section className="w-full max-w-md mx-auto px-5">

        <div className="text-center">

          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            Join AURABUDS
          </p>

          <h1 className="text-5xl font-black tracking-[-0.06em] mt-3">
            Create account.
          </h1>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >

          {error && (
            <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-300">
              {error}
            </div>
          )}

          <label className="block text-xs font-semibold mb-2">
            Full Name
          </label>

          <div className="relative">

            <User
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
            />

            <input
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              placeholder="Your name"
              className="w-full h-12 rounded-xl bg-black border border-white/10 pl-11 pr-4 text-sm outline-none focus:border-white/30"
            />

          </div>

          <label className="block text-xs font-semibold mb-2 mt-5">
            Email
          </label>

          <div className="relative">

            <Mail
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
            />

            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              placeholder="you@example.com"
              className="w-full h-12 rounded-xl bg-black border border-white/10 pl-11 pr-4 text-sm outline-none focus:border-white/30"
            />

          </div>

          <label className="block text-xs font-semibold mb-2 mt-5">
            Password
          </label>

          <div className="relative">

            <Lock
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
            />

            <input
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              placeholder="Minimum 6 characters"
              className="w-full h-12 rounded-xl bg-black border border-white/10 pl-11 pr-11 text-sm outline-none focus:border-white/30"
            />

            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-white"
            >
              {showPassword ? (
                <EyeOff size={16} />
              ) : (
                <Eye size={16} />
              )}
            </button>

          </div>

          <button
            type="submit"
            className="w-full h-12 mt-7 rounded-full bg-white !text-black font-bold text-sm flex items-center justify-center gap-2"
          >
            Create Account
            <ArrowRight size={16} />
          </button>

          <p className="text-center text-xs text-zinc-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-white hover:underline"
            >
              Sign in
            </Link>
          </p>

        </form>

      </section>
    </main>
  );
};

export default Signup;