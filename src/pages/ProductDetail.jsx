import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { Button } from "../components/Button";
import { Check, Shield, Truck, RotateCcw, Star } from "lucide-react";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-white">Product not found</h1>
        <button onClick={() => navigate("/shop")} className="mt-4 text-flame-500 hover:underline">
          Back to shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-iron-400 hover:text-white"
      >
        ← Back
      </button>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-iron-900">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-wide text-flame-500">
            {product.category}
          </div>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-iron-400">{product.tagline}</p>

          <div className="mt-4 flex items-center gap-2">
            <div className="flex text-flame-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-iron-500">(42 reviews)</span>
          </div>

          <div className="mt-6 text-3xl font-bold text-white">£{product.price}</div>

          <p className="mt-6 text-iron-300">{product.description}</p>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-white">Colour</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                    selectedColor === color
                      ? "border-flame-500 bg-flame-500/10 text-white"
                      : "border-iron-700 bg-iron-900 text-iron-400 hover:border-iron-500 hover:text-white"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-white">Size</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-11 w-14 rounded-lg border text-sm font-bold transition-colors ${
                    selectedSize === size
                      ? "border-flame-500 bg-flame-500 text-white"
                      : "border-iron-700 bg-iron-900 text-iron-400 hover:border-iron-500 hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="flex-1 gap-2"
              onClick={handleAddToCart}
            >
              {added ? (
                <>
                  <Check className="h-5 w-5" /> Added to Cart
                </>
              ) : (
                "Add to Cart — £" + product.price
              )}
            </Button>
          </div>

          <div className="mt-8 grid gap-4 border-t border-iron-800 pt-8 text-sm text-iron-400 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-flame-500" />
              <span>Free UK shipping over £60</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-flame-500" />
              <span>30-day returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-flame-500" />
              <span>2-year guarantee</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-white">Key features</h3>
            <ul className="mt-3 space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-iron-300">
                  <Check className="h-4 w-4 text-flame-500" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
