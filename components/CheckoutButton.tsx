"use client";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { Button } from "./ui/button";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "sonner";
import { getCurrentFormattedDate } from "@/utils/formatDate";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CheckoutButton = ({
  priceId,
  email,
}: {
  priceId: string;
  email: string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isStripeLoading, setIsStripeLoading] = useState<boolean>(false);

  useEffect(() => {
    const checkStripeLoaded = async () => {
      try {
        setIsStripeLoading(true);
        await stripePromise;
        setIsStripeLoading(false);
      } catch (error) {
        toast("Error creating checkout session. Please try again later.", {
          description: getCurrentFormattedDate(),
        });
        setIsStripeLoading(false);
      }
    };

    checkStripeLoaded();
  }, []);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId, email }),
      });

      if (res.status === 500) {
        toast("Error creating checkout session. Please try again later.", {
          description: getCurrentFormattedDate(),
        });
        setIsLoading(false);
        return;
      }

      const session = await res.json();
      const stripe = await stripePromise;

      stripe?.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      toast("Error creating checkout session. Please try again later.", {
        description: getCurrentFormattedDate(),
      });
    }
  };

  return (
    <Button
      size={"lg"}
      className="group gap-y-0"
      disabled={isStripeLoading || isLoading || !priceId}
      onClick={handleCheckout}
    >
      {isLoading || isStripeLoading ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <>
          Checkout
          <ArrowRight className="-ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </>
      )}
    </Button>
  );
};

export default CheckoutButton;
