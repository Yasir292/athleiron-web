import { useState } from "react";
import { Button } from "./Button";
import { Send, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="border-y border-iron-800 bg-iron-900 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Join the ATHLEIRON squad
        </h2>
        <p className="mt-3 text-iron-400">
          Get early access to drops, training tips, and exclusive member-only offers.
        </p>

        {submitted ? (
          <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-iron-800 px-6 py-4 text-white">
            <Check className="h-5 w-5 text-flame-500" />
            <span>You're in. Welcome to the team.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-iron-700 bg-iron-950 px-4 py-3 text-white placeholder-iron-500 focus:border-flame-500 focus:outline-none sm:w-80"
            />
            <Button type="submit" className="gap-2">
              <Send className="h-4 w-4" /> Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
