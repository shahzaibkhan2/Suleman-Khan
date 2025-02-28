import Image from "next/image";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full py-3 bg-gradient-to-tr from-[#2f2d71] to-[#d62c1f]">
      <div className="flex justify-between max-w-7xl pl-9 mx-auto">
        <section className="flex items-center justify-center text-white">
          <Image
            src={"/logoWhite.png"}
            alt="suleman-logo"
            width={30}
            height={30}
          />
          <span className="text-xl lg:text-2xl mt-4">Suleman Khan</span>
        </section>
        <section className="hidden 830px:block xl:pl-32 xl:pr-24">
          <ul className="flex items-center h-full w-full gap-10 lg:gap-14 text-white">
            <li>Home</li>
            <li>About</li>
            <li>Research</li>
            <li>Qualification</li>
            <li>Contact</li>
          </ul>
        </section>

        <button className="hidden 955px:inline-block text-[#242168] bg-white px-5 py-2.5 rounded-xl hover:bg-[#242168] hover:text-white transition duration-300">
          Contact Me
        </button>
        <div className="transform translate-y-1 -translate-x-4">
          <HiMenu className="size-10 text-white 830px:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
