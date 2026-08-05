import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Button } from "../components/Button";
import { Lock, CreditCard, Truck, ShieldCheck } from "lucide-react";

export function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postcode: "",
    phone: "",
  });

  if (items.length === 0 && !submitted) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-white">Your cart is empty</h1>
        <p className="mt-2 text-iron-400">Add some gear before checking out.</p>
        <Button onClick={() => navigate("/shop")} className="mt-6">
          Continue Shopping
        </Button>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order submission. In production, send this to your backend,
    // Formspree, or a Stripe Checkout Session API.
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-iron-800 bg-iron-900 p-8 sm:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-white">Order received</h1>
          <p className="mt-4 text-iron-400">
            Thanks, {formData.firstName}. We've received your order total of{" "}
            <strong className="text-white">£{subtotal}</strong>. We'll send a
            Stripe payment invoice to <strong className="text-white">{formData.email}</strong>{" "}
            within the next few hours.
          </p>
          <Button onClick={() => navigate("/shop")} className="mt-8">
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  const shipping = subtotal >= 60 ? 0 : 4.99;
  const total = subtotal + shipping;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white">Checkout</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-white">Contact</h2>
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-3 w-full rounded-lg border border-iron-700 bg-iron-950 px-4 py-3 text-white placeholder-iron-500 focus:border-flame-500 focus:outline-none"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">Shipping address</h2>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="rounded-lg border border-iron-700 bg-iron-950 px-4 py-3 text-white placeholder-iron-500 focus:border-flame-500 focus:outline-none"
                />
                <input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="rounded-lg border border-iron-700 bg-iron-950 px-4 py-3 text-white placeholder-iron-500 focus:border-flame-500 focus:outline-none"
                />
              </div>
              <input
                required
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="mt-4 w-full rounded-lg border border-iron-700 bg-iron-950 px-4 py-3 text-white placeholder-iron-500 focus:border-flame-500 focus:outline-none"
              />
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="rounded-lg border border-iron-700 bg-iron-950 px-4 py-3 text-white placeholder-iron-500 focus:border-flame-500 focus:outline-none"
                />
                <input
                  required
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  className="rounded-lg border border-iron-700 bg-iron-950 px-4 py-3 text-white placeholder-iron-500 focus:border-flame-500 focus:outline-none"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="mt-4 w-full rounded-lg border border-iron-700 bg-iron-950 px-4 py-3 text-white placeholder-iron-500 focus:border-flame-500 focus:outline-none"
              />
            </div>

            <div className="rounded-xl border border-iron-800 bg-iron-900 p-4">
              <div className="flex items-start gap-3">
                <CreditCard className="mt-0.5 h-5 w-5 text-flame-500" />
                <div>
                  <h3 className="font-semibold text-white">Payment</h3>
                  <p className="text-sm text-iron-400">
                    You'll receive a secure Stripe payment link via email after
                    submitting your order. No card details are collected on this
                    site.
                  </p>
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full gap-2">
              <Lock className="h-4 w-4" /> Complete order — £{total.toFixed(2)}
            </Button>
          </form>
        </div>

        <div className="h-fit rounded-2xl border border-iron-800 bg-iron-900 p-6">
          <h2 className="text-lg font-semibold text-white">Order summary</h2>
          <div className="mt-4 space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-iron-500">
                    {item.color} / Size {item.size} / Qty {item.quantity}
                  </p>
                </div>
                <span className="font-semibold text-white">
                  £{item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 border-t border-iron-800 pt-6 text-sm">
            <div className="flex justify-between text-iron-400">
              <span>Subtotal</span>
              <span>£{subtotal}</span>
            </div>
            <div className="flex justify-between text-iron-400">
              <span className="flex items-center gap-1"><Truck className="h-4 w-4" /> Shipping</span>
              <span>{shipping === 0 ? "Free" : `£${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-white">
              <span>Total</span>
              <span>£{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
