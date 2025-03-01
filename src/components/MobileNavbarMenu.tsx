"use client";

import { IoClose } from "react-icons/io5";
import Link from "next/link";

interface MobileNavbarMenuProps {
  navMenu: boolean;
  setNavMenu: (value: boolean) => void;
}

const NAV_ITEMS: string[] = [
  "home",
  "about",
  "research",
  "qualification",
  "contact",
];

const MobileNavbarMenu: React.FC<MobileNavbarMenuProps> = ({
  navMenu,
  setNavMenu,
}) => {
  return (
    <ul
      className={`text-white fixed top-0 bottom-0 right-0 z-50 h-screen w-64 bg-gradient-to-tr from-[#2f2d71] to-[#d62c1f] bg-opacity-25 px-10 py-20 flex flex-col gap-5 transition-all duration-500 ease-in-out transform ${
        navMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div
        onClick={() => setNavMenu(false)}
        className="absolute top-5 right-6 cursor-pointer"
      >
        <IoClose className="w-8 h-8" />
      </div>

      {/* Navigation Links */}
      {NAV_ITEMS.map((item) => (
        <li key={item} className="text-lg">
          <Link href={`#${item}`} onClick={() => setNavMenu(false)}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavbarMenu;
