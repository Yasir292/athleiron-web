import { useState } from "react";
import { Button } from "../components/Button";
import { Mail, MapPin, Phone, Clock, Check } from "lucide-react";

const faqs = [
  {
    q: "How long does UK shipping take?",
    a: "Standard UK shipping takes 3–5 working days. Express delivery is available at checkout for 1–2 working days.",
  },
  {
    q: "What is your returns policy?",
    a: "We offer 30-day returns on unworn items with tags attached. Returns are free within the UK.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship to most countries. International delivery typically takes 7–14 working days.",
  },
  {
    q: "How do I find my size?",
    a: "Each product page includes a detailed size guide. If you're between sizes, we recommend sizing up for a relaxed fit or down for compression.",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Get in Touch</h1>
        <p className="mt-2 text-iron-400">We're here to help with orders, sizing, and training tips.</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-white">Contact us</h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-flame-500/10 p-3 text-flame-500">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-iron-400">hello@athleiron.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-flame-500/10 p-3 text-flame-500">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="text-iron-400">+44 (0) 20 7946 0958</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-flame-500/10 p-3 text-flame-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Support Hours</h3>
                <p className="text-iron-400">Mon–Fri, 9am–6pm GMT</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-flame-500/10 p-3 text-flame-500">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">HQ</h3>
                <p className="text-iron-400">London, United Kingdom</p>
              </div>
            </div>
          </div>

          <div id="shipping" className="mt-10">
            <h2 className="text-xl font-bold text-white">Shipping & Returns</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-iron-400">
              <li>Free UK standard shipping on orders over £60</li>
              <li>Standard delivery: 3–5 working days</li>
              <li>Express delivery: 1–2 working days</li>
              <li>30-day free UK returns on unworn items</li>
              <li>International shipping available</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-iron-800 bg-iron-900 p-6 sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 rounded-full bg-green-500/10 p-4 text-green-500">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Message sent</h3>
              <p className="mt-2 text-iron-400">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-white">Send us a message</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="First name"
                  className="rounded-lg border border-iron-700 bg-iron-950 px-4 py-3 text-white placeholder-iron-500 focus:border-flame-500 focus:outline-none"
                />
                <input
                  required
                  type="text"
                  placeholder="Last name"
                  className="rounded-lg border border-iron-700 bg-iron-950 px-4 py-3 text-white placeholder-iron-500 focus:border-flame-500 focus:outline-none"
                />
              </div>
              <input
                required
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-iron-700 bg-iron-950 px-4 py-3 text-white placeholder-iron-500 focus:border-flame-500 focus:outline-none"
              />
              <select className="w-full rounded-lg border border-iron-700 bg-iron-950 px-4 py-3 text-white focus:border-flame-500 focus:outline-none">
                <option>Order enquiry</option>
                <option>Product question</option>
                <option>Returns</option>
                <option>Wholesale</option>
                <option>Other</option>
              </select>
              <textarea
                required
                rows={5}
                placeholder="How can we help?"
                className="w-full rounded-lg border border-iron-700 bg-iron-950 px-4 py-3 text-white placeholder-iron-500 focus:border-flame-500 focus:outline-none"
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>

      <div id="faq" className="mt-16">
        <h2 className="text-center text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-iron-800 bg-iron-900 p-6">
              <h3 className="font-bold text-white">{faq.q}</h3>
              <p className="mt-2 text-sm text-iron-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
