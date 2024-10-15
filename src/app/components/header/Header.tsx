import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

interface FooterProps {
  handleNavigation: (section: string) => void;
}

const Header = ({ handleNavigation }: FooterProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky z-20 top-0 h-[80px] md:h-[96px] py-6 md:py-7 bg-[#FBFFFF] backdrop-blur-3xl bg-opacity-100">
      <div className="w-11/12 max-w-screen-xl mx-auto bg-[#FBFFFF] flex flex-row justify-between items-center">
        <Link href="/">
          <Image
            src="/img/powerline-logo.svg"
            alt="Hivenify Logo"
            width={241}
            height={52}
            className="w-[110px] md:w-[128px] h-auto"
          />
        </Link>

        <ul className="hidden md:flex flex-row gap-8 items-center justify-center text-sm font-medium">
          <li
            className="hover:text-black/70 cursor-pointer"
            onClick={() => handleNavigation("howItWorksRef")}
          >
            How it Works
          </li>
          <li
            className="hover:text-black/70 cursor-pointer"
            onClick={() => handleNavigation("testimonialRef")}
          >
            Testimonials
          </li>
          <li
            className="hover:text-black/70 cursor-pointer"
            onClick={() => handleNavigation("contactUsRef")}
          >
            Contact Us
          </li>
        </ul>

        {/* Power Line Socials */}
        <div className="hidden md:flex flex-row gap-4 items-center">
          <Link href={"/"}>
            <Image
              src="/icons/x.svg"
              alt="Twitter (X) Logo"
              width={48}
              height={48}
              className="w-[48px] h-[48px]"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/icons/facebook.svg"
              alt="Facebook Logo"
              width={48}
              height={48}
              className="w-[48px] h-[48px]"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/icons/instagram.svg"
              alt="Instagram Logo"
              width={48}
              height={48}
              className="w-[48px] h-[48px]"
            />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden  focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        <div
          className={`block md:hidden fixed top-[80px] left-0 w-full h-[240px] bg-[#FBFFFF] py-4 z-10 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <ul className="flex flex-col items-center gap-6 mt-0 text-hiven-ash text-lg font-medium">
            <li
              className="hover:text-black/50 cursor-pointer"
              onClick={() => {
                handleNavigation("howItWorksRef");
                toggleMenu();
              }}
            >
              How it Works
            </li>
            <li
              className="hover:text-black/50 cursor-pointer"
              onClick={() => {
                handleNavigation("testimonialRef");
                toggleMenu();
              }}
            >
              Testimonials
            </li>
            <li
              className="hover:text-black/50 cursor-pointer"
              onClick={() => {
                handleNavigation("contactUsRef");
                toggleMenu();
              }}
            >
              Contact Us
            </li>
            <li className="flex md:hidden flex-row gap-4 items-center">
              <Link href={"/"}>
                <Image
                  src="/icons/x.svg"
                  alt="Twitter (X) Logo"
                  width={36}
                  height={36}
                  className="w-[36px] h-[36px]"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook Logo"
                  width={36}
                  height={36}
                  className="w-[36px] h-[36px]"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram Logo"
                  width={36}
                  height={36}
                  className="w-[36px] h-[36px]"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
