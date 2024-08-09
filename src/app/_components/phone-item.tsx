"use client";
import { SmartphoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface PhoneItemProps {
  phone: string;
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(phone)
        .then(() => {
          toast.success("Telefone copiado com sucesso!");
          console.log("Phone number copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy phone number: ", err);
        });
    } else {
      console.error("Clipboard API is not supported or not available");
    }
  };
  return (
    <div key="phone" className="flex justify-between">
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  );
};

export default PhoneItem;
