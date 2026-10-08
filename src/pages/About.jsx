import {
  AudioLines,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-5 pb-20 pt-36 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600">
              About AURABUDS
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
              We believe
              <br />
              <span className="text-zinc-600">sound matters.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400">
              AURABUDS was created with one simple idea — premium audio
              should feel effortless. We combine thoughtful design,
              powerful technology and exceptional sound to create
              earbuds that fit naturally into everyday life.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">
            <img
              src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1800&q=85"
              alt="Premium AURABUDS wireless earbuds"
              className="h-[350px] w-full object-cover opacity-80 transition duration-700 hover:scale-105 sm:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-white/10 bg-zinc-950 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: AudioLines,
                title: "Pure Sound",
                text: "Engineered for detail, clarity and powerful bass.",
              },
              {
                icon: Sparkles,
                title: "Modern Design",
                text: "Minimal, premium products built for everyday life.",
              },
              {
                icon: ShieldCheck,
                title: "Built to Last",
                text: "Durable materials backed by a reliable warranty.",
              },
              {
                icon: Heart,
                title: "Customer First",
                text: "Everything we create starts with our listeners.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white/10 p-7 transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.03]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black transition duration-500 group-hover:rotate-6">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600">
              Our Philosophy
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Technology should disappear.
              <span className="text-zinc-600">
                {" "}
                The experience shouldn't.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-zinc-500">
              From the shape of every earbud to the way every sound
              reaches your ears, we obsess over the details that make
              listening better.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["50+", "Countries"],
              ["1M+", "Listeners"],
              ["4.8/5", "Average Rating"],
              ["24/7", "Support"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-zinc-950 p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20"
              >
                <p className="text-3xl font-black">{number}</p>
                <p className="mt-2 text-xs text-zinc-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-zinc-950 px-7 py-14 text-center sm:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600">
            Experience AURABUDS
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-5xl">
            Hear the difference.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-zinc-500">
            Premium sound, thoughtful design and technology made for
            your everyday moments.
          </p>

          <a
            href="/products"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-black transition hover:scale-105"
          >
            Explore Products
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;