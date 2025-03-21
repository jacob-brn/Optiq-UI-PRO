"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useDialogStore } from "@/store/dialog-store";
import useIsLoggedIn from "@/hooks/useIsLoggedIn";
import { useGetBoughtTemplates } from "@/hooks/useGetBoughtTemplates";
import { Download, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { getCurrentFormattedDate } from "@/utils/formatDate";

const DialogButton = ({
  children,
  className,
  templateId,
  linkHref,
}: {
  children: React.ReactNode;
  className?: string;
  templateId: string;
  linkHref: string;
}) => {
  const { isOpen, setOpen, setTemplateId } = useDialogStore();
  const isLoggedIn = useIsLoggedIn();
  const { data, isLoading } = useGetBoughtTemplates();
  const [downloadLoading, setDownloadLoading] = useState<boolean>(false);

  const handleDownload = async () => {
    setDownloadLoading(true);

    try {
      const response = await fetch(`/api/get-download-url/${templateId}`);

      if (!response.ok)
        toast("Error downloading template", {
          description: getCurrentFormattedDate(),
        });

      const data = await response.json();

      if (data.url) {
        const link = document.createElement("a");
        link.href = data.url;
        link.setAttribute("download", `${templateId} Template.zip`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadLoading(false);
      } else {
        toast("Download link not available", {
          description: getCurrentFormattedDate(),
        });
        setDownloadLoading(false);
      }
    } catch (error) {
      toast("An unexpected error occurred", {
        description: getCurrentFormattedDate(),
      });
      setDownloadLoading(false);
    }
  };

  const handleClick = () => {
    setOpen(!isOpen);
    setTemplateId(templateId);
  };

  const isBought = data?.find(
    (template: { template_name: string }) =>
      template.template_name === templateId
  );

  const buttonElement = (
    <Button
      onClick={isBought ? handleDownload : handleClick}
      variant={"default"}
      disabled={isLoggedIn && (isLoading || downloadLoading)}
      className={cn(
        "w-full group relative px-12 py-5 font-medium rounded-md overflow-hidden transition-all duration-500",
        className
      )}
    >
      {isLoggedIn ? (
        isLoading || downloadLoading ? (
          <span className="relative z-10 flex items-center justify-center gap-1.5 font-semibold">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </span>
        ) : (
          <span className="relative z-10 flex items-center justify-center gap-1.5 font-semibold">
            {isBought ? (
              <>
                Download <Download />
              </>
            ) : (
              children
            )}
          </span>
        )
      ) : (
        children
      )}
    </Button>
  );

  return linkHref && !isBought ? (
    <Link href={linkHref}>{buttonElement}</Link>
  ) : (
    buttonElement
  );
};

export default DialogButton;
