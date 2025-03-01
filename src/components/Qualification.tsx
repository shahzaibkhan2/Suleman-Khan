import Title from "./Title";

const Qualification = () => {
  return (
    <section id="qualification">
      <Title title="EDUCATION" subTitle="QUALIFICATION" />
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20 text-[#2f2d71]">
        {/* Component */}
        <div className="flex flex-col items-center">
          {/* Item */}
          <div className="relative">
            <div className="absolute w-1 md:w-2 bg-gradient-to-tr from-[#2f2d71] to-[#d62c1f] h-full left-1/2 transform -translate-x-1/2"></div>
            {/* Static Event Entry */}
            <div className="mb-20 mt-20 flex items-center w-full">
              <div className="w-1/2 text-right pr-5 md:pr-12">
                <h5 className="text-lg md:text-2xl font-semibold">
                  August 2021
                </h5>
              </div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#2f2d71] z-40"></div>
              <div className="w-1/2 pl-5 md:pl-12">
                <h6 className="text-md md:text-xl font-semibold mb-3">
                  MS Degree
                </h6>
                <p>
                  Capital University of Science and Technology Islamabad (CUST)
                </p>
              </div>
            </div>
            {/* Another Static Event Entry */}
            <div className="mb-20 mt-20 flex items-center w-full">
              <div className="w-1/2 text-right pr-5 md:pr-12">
                <h5 className="text-lg md:text-2xl font-semibold">
                  September 2016
                </h5>
              </div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#2f2d71] z-40"></div>
              <div className="w-1/2 pl-5 md:pl-12">
                <h6 className="text-md md:text-xl font-semibold mb-3">
                  BE in Electronics Engineering
                </h6>
                <p>
                Capital University of
                Science and Technology Islamabad (CUST)
                </p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="relative">
            <div className="absolute w-1 md:w-2 bg-gradient-to-tr to-[#2f2d71] from-[#d62c1f] h-full left-1/2 transform -translate-x-1/2"></div>
            {/* More Static Entries */}
            <div className="mb-20 mt-20 flex items-center w-full">
              <div className="w-1/2 text-right pr-5 md:pr-12">
                <h5 className="text-lg md:text-2xl font-semibold">
                  January 2012
                </h5>
              </div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#2f2d71] z-40"></div>
              <div className="w-1/2 pl-5 md:pl-12">
                <h6 className="text-md md:text-xl font-semibold mb-3">
                  High School
                </h6>
                <p>
                  Swedish Institute of Technology Gujranwala
                </p>
              </div>
            </div>
            {/* And another one */}
            <div className="mb-20 mt-20 flex items-center w-full">
              <div className="w-1/2 text-right pr-5 md:pr-12">
                <h5 className="text-lg md:text-2xl font-semibold">May 2017</h5>
              </div>
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#2f2d71] z-40"></div>
              <div className="w-1/2 pl-5 md:pl-12">
                <h6 className="text-md md:text-xl font-semibold mb-3">
                  Matriculation
                </h6>
                <p>
                  Government Higher Secondary School Gujranwala
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
