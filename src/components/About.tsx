import Title from "./Title";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <>
      <Title title="INTRODUCTION" subTitle="ABOUT ME" />
      <section className="text-[#112269]" id="about">
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center rounded-md bg-gray-300 px-3 py-1">
                <div className="mr-1 h-2 w-2 rounded-full bg-gradient-to-tr from-[#2f2d71] to-[#d62c1f]"></div>
                <p className="text-sm">Lecturar in CUST</p>
              </div>
              <p className="text-sm text-[#9e2319] sm:text-xl">
                Research Associate
              </p>

              <h1 className="mb-6 text-4xl md:text-6xl lg:mb-8">
                Suleman Khan
              </h1>
              <p className="text-sm text-[#112269] sm:text-xl">
                I am involved in various research projects in the field of
                sensors, device modeling and RF engineering.
              </p>

              <div className="mb-8 mt-8 h-px w-full bg-[#9e2319]"></div>
              <div className="mb-6 flex flex-col gap-2 text-sm text-[#112269] sm:text-base lg:mb-8">
                <h2 className="font-bold text-xl">Recent Research Activities</h2>
                <p>
                  <strong className="mr-2">2023: </strong>Advanced Antenna Research in the CUST Research Center.
                </p>
                <p>
                  <strong className="mr-2">2022: </strong>Advanced Sensor Modeling with LDR Antennas in the CUST Research Center.
                </p>
              </div>

              <a
                href="#"
                className="mb-6 flex items-center gap-2.5 text-center text-sm font-bold uppercase md:mb-10 lg:mb-12"
              >
                <p>All Achievements</p>
                <IoIosArrowForward className="size-5" />
              </a>

              <div className="flex flex-col gap-4 font-semibold sm:flex-row">
                <a
                  href="#"
                  className="flex items-center gap-4 rounded-xl px-6 py-3 text-white bg-gradient-to-tr from-[#2f2d71] to-[#d62c1f] hover:bg-gradient-to-l transition duration-300"
                >
                  <MdOutlineEmail className="size-6" />
                  <p>Email Me</p>
                </a>
                <a
                  href="#"
                  className="flex gap-4 rounded-xl border border-solid border-[#112269] px-6 py-3 hover:bg-[#112269] hover:text-white transition duration-300"
                >
                  <FaLinkedin className="size-6" />
                  <p>Contact Me</p>
                </a>
              </div>
            </div>

            <div className="min-h-[530px] overflow-hidden rounded-xl bg-gray-100">
              <img
                src={"/people03.jpg"}
                className="size-full object-cover"
                alt="myself"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
