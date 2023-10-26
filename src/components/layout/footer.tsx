import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export const Footer = () => {
  return (
    <div className="z-50 flex w-full items-center bg-background p-6 ">
      <div className="hidden items-center gap-x-2 md:flex">
        <Icons.logo className="h-8 w-8" />{" "}
        <span className="font-bold">DenDron</span>
      </div>
      <div className="flex w-full items-center justify-between gap-x-2 text-muted-foreground md:ml-auto md:justify-end">
        <Button variant="link" size="sm">
          Privacy Policy
        </Button>
        <Button variant="link" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
