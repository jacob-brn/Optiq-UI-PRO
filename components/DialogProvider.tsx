"use client";

import Image from "next/image";
import { Dialog, DialogContent } from "./ui/dialog";
import { useDialogStore } from "@/store/dialog-store";
import { DialogTitle } from "@radix-ui/react-dialog";
import { templates } from "@/config/templates";
import { Input } from "./ui/input";
import { useState } from "react";
import CheckoutButton from "./CheckoutButton";
import useIsLoggedIn from "@/hooks/useIsLoggedIn";

export function DialogProvider() {
  const { isOpen, setOpen, templateId } = useDialogStore();
  const isLoggedIn = useIsLoggedIn();
  const [email, setEmail] = useState("");
  const selectedTemplate = templates.find(
    (template) => template.id === templateId
  );

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className=" [&_.dialog-close]:hidden p-0 pb-6">
        <DialogTitle>
          <div className="flex flex-col">
            {selectedTemplate?.thumbnailUrl && (
              <Image
                src={selectedTemplate.thumbnailUrl}
                alt="Thumbnail of template"
                width={1200}
                height={1200}
                className="w-full rounded-t-xl max-h-[300px]"
              />
            )}
            <div className="flex flex-row justify-between mt-6 px-6">
              <h3 className="text-xl font-bold">
                {selectedTemplate?.name} Template
              </h3>
              <h4 className="text-xl font-bold">
                ${selectedTemplate?.price.toLocaleString()}
              </h4>
            </div>
            <p className="mt-2 text-muted-foreground px-6">
              {selectedTemplate?.description}
            </p>
          </div>
        </DialogTitle>
        <div className="mt-2 grid gap-y-6 px-6">
          {!isLoggedIn && (
            <div className="grid gap-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-xs text-gray-500">
                The email above will be used to create your account. You will be
                redirected to Stripe to complete your purchase.
              </p>
            </div>
          )}
          <CheckoutButton
            priceId={selectedTemplate?.price_id as string}
            email={email}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
