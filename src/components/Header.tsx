import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { PiMouseScrollLight } from "react-icons/pi";

const Header = () => {
  return (
    <header
      id="home"
      className="w-11/12 max-w-3xl mx-auto text-center mt-32 flex items-center flex-col gap-6 justify-center text-[#112269] relative"
    >
      <img
        src={"/me.png"}
        className="w-32 rounded-full animate-slideLeft"
        alt="myself"
      />
      <h3 className="flex gap-5 items-center mb-3 text-xl md:text-2xl lg:text-3xl animate-slideLeft">
        Hi ! I Am Suleman Khan
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] animate-slideLeft">
        Research Associate
      </h1>
      <p className="max-w-2xl mx-auto md:text-xl animate-slideLeft">
        I am involved in various research projects in the field of sensors,
        device modeling and RF engineering.
      </p>
      <div className="flex flex-col items-center mt-4 gap-4 sm:flex-row">
        <button className="py-3 px-10 bg-gradient-to-tr from-[#2f2d71] to-[#d62c1f] rounded-xl text-white flex gap-2 items-center hover:bg-gradient-to-l transition duration-300 animate-slideBottom">
          <a href="#my-contact">Contact Me</a>
        </button>
        <button className="animate-slideBottom text-[#112269]">
          <Link
            className={`size-full flex gap-2 items-center py-3 px-10 rounded-xl transition duration-300 border border-[#2f2d71] hover:bg-[#2f2d71] hover:text-white`}
            href="./shahzaib_resume_mern.pdf"
            download
          >
            My Resume
            <FiDownload />
          </Link>
        </button>
      </div>
      <PiMouseScrollLight className=" bottom-14 left-0 xs:left-10 sm:left-20 md:left-28 lg:left-40 fixed size-12 animate-pulse z-50" />
    </header>
  );
};

export default Header;
