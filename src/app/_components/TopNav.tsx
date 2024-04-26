"use client";

import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 px-20 text-xl font-semibold text-white">
      <div>Gallery</div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
