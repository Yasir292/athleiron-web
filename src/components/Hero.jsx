import { Link } from "react-router-dom";
import { Button } from "./Button";
import { ArrowRight, Flame, Shield, Truck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-iron-950">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&auto=format&fit=crop&q=80"
          alt="Athlete training"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-iron-950 via-iron-950/90 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-flame-500/30 bg-flame-500/10 px-4 py-1.5 text-sm font-medium text-flame-500">
            <Flame className="h-4 w-4" /> New collection live
          </div>
          <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Engineered for athletes. <br />
            <span className="text-flame-500">Built to last.</span>
          </h1>
          <p className="mt-6 text-lg text-iron-300">
            Premium UK-designed sportswear that keeps up with your hardest
            training sessions. Technical fabrics, athletic fits, and zero
            compromises.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/shop">
              <Button size="lg" className="gap-2">
                Shop Now <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Our Story
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-iron-400">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-flame-500" />
              <span>2-year durability guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-flame-500" />
              <span>Free UK shipping over £60</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
