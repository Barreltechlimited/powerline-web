import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  handleNavigation: (section: string) => void;
}

const Header = ({ handleNavigation }: FooterProps) => {
  return (
    <header className="sticky z-20 top-0 h-[80px] md:h-[96px] py-6 md:py-7  ">
      <div className="w-11/12 max-w-screen-xl mx-auto  flex flex-row justify-between items-center">
        <Link href="/">
          <Image
            src="/img/powerline-logo.png"
            alt="Hivenify Logo"
            width={241}
            height={52}
            className="w-[110px] md:w-[128px] h-auto"
          />
        </Link>

        <ul className="hidden md:flex flex-row gap-6 text-hiven-ash hover:text-hiven-ash/90 items-center justify-center text-sm font-medium">
          <li
            className="hover:text-hiven-black cursor-pointer"
            onClick={() => handleNavigation("howItWorksRef")}
          >
            How it Works
          </li>
          <li
            className="hover:text-hiven-black cursor-pointer"
            onClick={() => handleNavigation("testimonialRef")}
          >
            Testimonials
          </li>
          <li
            className="hover:text-hiven-black cursor-pointer"
            onClick={() => handleNavigation("contactUsRef")}
          >
            Contact Us
          </li>
        </ul>

        {/* Power Line Socials */}
        <div className="flex flex-row gap-4 items-center">
          <Link href={"/auth/login"}>
            <button className="text-hiven-ash hover:text-[#1D2571] font-medium text-xs md:text-sm">
              Sign in
            </button>
          </Link>
          <Link
            href={"/auth/signup"}
            className="font-semibold text-xs md:text-sm text-white bg-hiven-blue hover:bg-[#1D2571]   py-2 md:py-3 px-3 md:px-5 rounded-lg cursor-pointer"
          >
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
