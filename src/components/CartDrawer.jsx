import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Button } from "./Button";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, subtotal, removeItem, updateQuantity, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-iron-900 shadow-2xl">
        <div className="flex items-center justify-between border-b border-iron-800 p-4">
          <h2 className="flex items-center gap-2 text-lg font-bold text-white">
            <ShoppingBag className="h-5 w-5" /> Your Cart ({items.length})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 text-iron-400 hover:bg-iron-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-iron-400">
              <ShoppingBag className="mb-3 h-12 w-12 opacity-30" />
              <p className="text-lg font-medium text-white">Your cart is empty</p>
              <p className="text-sm">Add some gear and get moving.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="flex gap-4 rounded-xl bg-iron-950 p-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <button
                        onClick={() => removeItem(item.id, item.size, item.color)}
                        className="text-iron-500 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs text-iron-500">
                      {item.color} / Size {item.size}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-lg bg-iron-800">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.color, item.quantity - 1)
                          }
                          className="p-1 text-iron-300 hover:text-white"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-4 text-center text-sm font-medium text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.color, item.quantity + 1)
                          }
                          className="p-1 text-iron-300 hover:text-white"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="font-bold text-white">
                        £{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-iron-800 p-4">
            <div className="mb-4 flex items-center justify-between text-lg font-bold text-white">
              <span>Subtotal</span>
              <span>£{subtotal}</span>
            </div>
            <Link to="/checkout" onClick={() => setIsOpen(false)} className="block">
              <Button className="w-full">Checkout — £{subtotal}</Button>
            </Link>
            <button
              onClick={clearCart}
              className="mt-2 w-full text-center text-xs text-iron-500 hover:text-white"
            >
              Clear cart
            </button>
            <p className="mt-3 text-center text-xs text-iron-500">
              Secure checkout. You'll receive a Stripe payment link by email.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
