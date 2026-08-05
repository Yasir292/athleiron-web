import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";
import { Newsletter } from "../components/Newsletter";
import { Button } from "../components/Button";
import { products } from "../data/products";
import { Star, Zap, Leaf, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Zap,
    title: "Performance Fabrics",
    desc: "Moisture-wicking, four-way stretch materials built for movement.",
  },
  {
    icon: Trophy,
    title: "Athletic Fit",
    desc: "Cut for athletes — no baggy sleeves, no sagging waistbands.",
  },
  {
    icon: Leaf,
    title: "Responsible Design",
    desc: "Recycled fabrics and ethical manufacturing where possible.",
  },
  {
    icon: Star,
    title: "Durability First",
    desc: "Reinforced seams and abrasion-resistant panels that outlast trends.",
  },
];

export function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Gear</h2>
            <p className="mt-2 text-iron-400">Hand-picked essentials for your training.</p>
          </div>
          <Link to="/shop" className="hidden text-sm font-semibold text-flame-500 hover:text-flame-400 sm:block">
            View all products →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-iron-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">Why athletes choose ATHLEIRON</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-iron-800 bg-iron-950 p-6">
                <div className="mb-4 inline-flex rounded-xl bg-flame-500/10 p-3 text-flame-500">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-iron-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-iron-900">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to level up your training wardrobe?
              </h2>
              <p className="mt-4 text-iron-400">
                Join thousands of UK athletes who trust ATHLEIRON for
                performance, durability, and style that works as hard as they do.
              </p>
              <Link to="/shop" className="mt-8 inline-block">
                <Button size="lg">Shop the collection</Button>
              </Link>
            </div>
            <div className="relative min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&auto=format&fit=crop&q=80"
                alt="Athlete in gym"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
