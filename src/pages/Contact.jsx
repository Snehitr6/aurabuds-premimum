import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      event.target.reset();
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-black px-5 pb-24 pt-36 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT SIDE */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600">
              Get in Touch
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
              Let's talk
              <br />
              <span className="text-zinc-600">audio.</span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-7 text-zinc-500">
              Have a question about your order, our products, or
              anything else? Our team is here to help.
            </p>

            {/* Contact Information */}
            <div className="mt-10 space-y-4">
              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950 p-4 transition duration-300 hover:border-white/20">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-black">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs text-zinc-600">Email</p>

                  <p className="mt-1 text-sm font-medium text-white">
                    hello@aurabuds.com
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950 p-4 transition duration-300 hover:border-white/20">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-black">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-zinc-600">Phone</p>

                  <p className="mt-1 text-sm font-medium text-white">
                    +91 1800 123 4567
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950 p-4 transition duration-300 hover:border-white/20">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-black">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs text-zinc-600">Location</p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Bengaluru, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-zinc-950 p-6 shadow-2xl sm:p-9"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-black">
                Send us a message
              </h2>

              <p className="mt-2 text-sm text-zinc-600">
                We'll get back to you as soon as possible.
              </p>
            </div>

            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-semibold text-zinc-500"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  required
                  type="text"
                  placeholder="John Doe"
                  className="h-13 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-white/30"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-semibold text-zinc-500"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="h-13 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-white/30"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-xs font-semibold text-zinc-500"
              >
                Subject
              </label>

              <input
                id="contact-subject"
                name="subject"
                required
                type="text"
                placeholder="How can we help?"
                className="h-13 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-white/30"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-semibold text-zinc-500"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                rows="6"
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-white/30"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 text-sm font-black text-black transition duration-300 hover:scale-[1.01] hover:bg-zinc-200"
            >
              {submitted ? (
                <>
                  Message Sent
                  <CheckCircle2 size={17} />
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>

            <p className="mt-4 text-center text-[11px] text-zinc-700">
              We usually respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;