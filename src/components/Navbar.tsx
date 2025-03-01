"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import MobileNavbarMenu from "./MobileNavbarMenu";

const NAV_ITEMS: string[] = [
  "home",
  "about",
  "research",
  "qualification",
  "contact",
];

const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [navMenu, setNavMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 830); // Adjust based on your breakpoint
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full py-3 bg-gradient-to-tr from-[#2f2d71] to-[#d62c1f]">
      <div className="flex justify-between max-w-7xl pl-9 mx-auto">
        {/* Logo Section */}
        <section className="flex items-center justify-center text-white">
          <Image
            src="/logoWhite.png"
            alt="suleman-logo"
            width={30}
            height={30}
          />
          <span className="text-xl lg:text-2xl mt-4">Suleman Khan</span>
        </section>

        {/* Navigation Links */}
        <section className="hidden 830px:block xl:pl-32 xl:pr-24">
          <ul className="flex items-center h-full w-full gap-10 lg:gap-14 text-white">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <Link href={`#${item}`} onClick={(e) => handleScroll(e, item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Button */}
        <button className="hidden 955px:inline-block text-[#242168] bg-white px-5 py-2.5 rounded-xl hover:bg-[#242168] hover:text-white transition duration-300">
          Contact Me
        </button>

        {/* Mobile Menu Icon */}
        {isMobile && (
          <div
            className="transform translate-y-1 -translate-x-4 cursor-pointer"
            onClick={() => setNavMenu((prev) => !prev)}
          >
            <HiMenu className="size-10 text-white" />
          </div>
        )}
      </div>

      {/* Mobile Navbar Menu */}
      {isMobile && navMenu && <MobileNavbarMenu navMenu={navMenu} setNavMenu={setNavMenu} />}
    </nav>
  );
};

export default Navbar;
