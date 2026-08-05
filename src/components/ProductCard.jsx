import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ProductCard({ product }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-iron-800 bg-iron-900 transition-transform hover:-translate-y-1">
      {product.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-flame-500 px-3 py-1 text-xs font-bold text-white">
          {product.badge}
        </span>
      )}
      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs font-medium uppercase tracking-wide text-iron-500">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold text-white group-hover:text-flame-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-iron-400">
          {product.tagline}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-xl font-bold text-white">£{product.price}</span>
          <Link
            to={`/product/${product.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-flame-500 hover:text-flame-400"
          >
            View <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
