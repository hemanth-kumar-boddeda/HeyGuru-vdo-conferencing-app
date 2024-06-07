import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from '@clerk/nextjs'


const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 ">
      <Link href="/" className="flex gap-2 items-center">
        <Image src={"/hey-logo1.png"} alt="logo" width={40} height={40} />
        <p className="navText text-[26px] font-extrabold text-white max-sm:hidden">
          HeyGuru
        </p>
      </Link>

      <div className="flex-between gap-3">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
