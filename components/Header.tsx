import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Sign } from "crypto";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { userId } = auth();

  return (
    <header className="flex items-center justify-between px-8 border-b mb-5">
      <div className="h-20 flex items-center justify-center overflow-hidden">
        <Link href="/">
          <Image
            src="https://links.papareact.com/xgu"
            alt="logo"
            width={200}
            height={100}
            className="object-contain h-32 cursor-pointer"
          />
        </Link>
      </div>

      {userId ? (
        <div className="">
          <UserButton />
        </div>
      ) : (
        <SignInButton afterSignInUrl="/translate" mode="modal" />
      )}
    </header>
  );
};

export default Header;
