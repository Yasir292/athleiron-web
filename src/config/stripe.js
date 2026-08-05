// Stripe Payment Links configuration
// Replace these placeholder URLs with real Stripe Payment Links after creating products in Stripe Dashboard.
// Guide: https://stripe.com/docs/payment-links

export const stripeConfig = {
  enabled: false, // Set to true once real payment links are added
  currency: "gbp",
  // One payment link per product for "Buy Now" direct purchases
  paymentLinks: {
    1: "https://buy.stripe.com/YOUR_LINK_FOR_IRONTRACK_TRACKSUIT",
    2: "https://buy.stripe.com/YOUR_LINK_FOR_FORGE_TRAINING_TEE",
    3: "https://buy.stripe.com/YOUR_LINK_FOR_VOLT_PERFORMANCE_LEGGINGS",
    4: "https://buy.stripe.com/YOUR_LINK_FOR_SUMMIT_HOODIE",
    5: "https://buy.stripe.com/YOUR_LINK_FOR_CORE_SHORTS",
    6: "https://buy.stripe.com/YOUR_LINK_FOR_ENDURANCE_JACKET",
  },
};

export function getPaymentLink(productId) {
  return stripeConfig.paymentLinks[productId];
}

export function isStripeEnabled() {
  return stripeConfig.enabled;
}
