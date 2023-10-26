"use client";

import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Icons } from "@/components/icons";

export const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "sticky top-0 z-50 flex w-full items-center p-6 backdrop-blur-lg backdrop-filter",
        scrolled && "border-b shadow-sm",
      )}
    >
      <div className="hidden items-center gap-x-2 md:flex">
        <Icons.logo className="h-8 w-8" />{" "}
        <span className="font-bold">DenDron</span>
      </div>
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        <AuthLoading>
          <Spinner />
        </AuthLoading>
        <Unauthenticated>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button size="sm">Get Dendron free</Button>
          </SignInButton>
        </Unauthenticated>
        <Authenticated>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/documents">Enter Dendron</Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </Authenticated>
        <ModeToggle />
      </div>
    </div>
  );
};
