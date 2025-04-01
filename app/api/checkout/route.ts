import { NextRequest, NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import { createClient } from "@/utils/supabase/server";
import { validateEmail } from "@/utils/email-validator";
import checkIsProd from "@/lib/check-is-prod";

const validPriceIds = {
  development: ["price_1R0ecRGbjt10Jx4Gkeo2PGyP"], // SaaS Template
  production: ["price_1R56CwK9YrZBiErRjCUz10SS"],
};

export async function POST(request: NextRequest) {
  const { priceId, email } = await request.json();
  const supabase = await createClient();
  const { data: session, error } = await supabase.auth.getUser();

  if (validateEmail(email).isValid === false)
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });

  const metadata: { email: string; user_id?: string } = {
    email: email,
  };

  if (!error && session.user) metadata.user_id = session.user.id;

  const isProduction = checkIsProd();

  if (
    !validPriceIds[isProduction ? "production" : "development"].includes(
      priceId
    )
  )
    return NextResponse.json({ error: "Invalid price ID" }, { status: 400 });

  try {
    const stripe = getStripeClient();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: metadata,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}
