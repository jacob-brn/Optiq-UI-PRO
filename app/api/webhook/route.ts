import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient } from "@/utils/supabase/server";
import Stripe from "stripe";

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

const templateNamesMapping: Record<string, string> = {
  "SaaS Template": "saas",
};

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
  } catch (error) {
    console.error("Webhook signature verifcation failed.");
    return NextResponse.json(
      { error: "Webhook signature verifcation failed." },
      { status: 400 }
    );
  }

  const supabase = await createClient();

  try {
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;
        const lineItems = await stripe.checkout.sessions.listLineItems(
          session.id,
          { expand: ["data.price.product"] }
        );
        const product = lineItems.data[0].price?.product as Stripe.Product;
        const templateName = templateNamesMapping[product.name] || product.name;

        const ownerId = session.metadata?.user_id;
        const email = session.metadata?.email;

        if (!ownerId && email) {
          const { error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
              shouldCreateUser: true,
            },
          });

          if (error) {
            console.error("Error creating user:", error);
            return NextResponse.json(
              { error: "Error creating user" },
              { status: 400 }
            );
          }
        }

        const { error } = await supabase.from("purchased").insert({
          template_name: templateName,
          owner: ownerId,
          owner_email: email,
        });

        if (error) {
          console.error("Error inserting purchase record:", error);
          return NextResponse.json(
            { error: "Error inserting purchase record" },
            { status: 400 }
          );
        }
        break;
    }
  } catch (error) {
    console.error(`Error processing webhook`);
    return NextResponse.json(
      { error: "Error processing webhook" },
      { status: 400 }
    );
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
