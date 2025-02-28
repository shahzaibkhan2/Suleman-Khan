"use client";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="block pt-20">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="flex-col flex items-center">
          <Link href="#" className="mb-8 flex gap-1 max-w-full justify-center">
            <img src={"/logoBlue.png"} alt="suleman-logo" className="size-10" />
            <span className="text-lg lg:text-xl font-semibold text-[#2f2d71] mt-4">
              Suleman Khan
            </span>
          </Link>
          <div className="text-center font-semibold">
            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal text-[#2f2d71] transition hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal text-[#2f2d71] transition hover:text-blue-600"
            >
              Research
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal text-[#2f2d71] transition hover:text-blue-600"
            >
              Works
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal text-[#2f2d71] transition hover:text-blue-600"
            >
              Collaborations
            </Link>
            <Link
              href="#"
              className="inline-block px-6 py-2 font-normal text-[#2f2d71] transition hover:text-blue-600"
            >
              Academics
            </Link>
          </div>
          <div className="mb-8 mt-8 border-b border-gray-300 w-48"></div>
          <div className="mb-12 grid-cols-4 grid-flow-col grid w-full max-w-52 gap-4">
            <Link
              href="#"
              className="flex justify-center items-center aspect-square rounded-full p-2 bg-[#0a66c2] cursor-pointer hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]"
            >
              <FaLinkedinIn className="size-6 text-white" />
            </Link>
            <Link
              href="#"
              className={`flex items-center justify-center cursor-pointer bg-[#0a66c2] hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]
rounded-full`}
            >
              <FaTwitter className={`size-6 text-white`} />
            </Link>
            <Link
              href="#"
              className="flex justify-center items-center aspect-square rounded-full p-2 bg-[#0a66c2] cursor-pointer hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]"
            >
              <FaFacebookF className="size-6 text-white" />
            </Link>
            <Link
              href="#"
              className="flex justify-center items-center aspect-square rounded-full p-2 bg-gradient-to-r from-instaOrange via-instaPink to-instaDeepPurple cursor-pointer hover:shadow-[0_0_15px_5px_rgba(214,44,31,0.5)]
              "
            >
              <FaInstagramSquare className="size-6 text-white" />
            </Link>
          </div>
          <p className="text-sm sm:text-base text-[#2f2d71]">
            © Copyright 2024 Suleman Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
