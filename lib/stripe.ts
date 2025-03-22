import Stripe from "stripe";

export const getStripeClient = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing Stripe secret key.");
  }

  return new Stripe(process.env.STRIPE_SECRET_KEY);
};
