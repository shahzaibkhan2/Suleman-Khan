import Title from "./Title";

const Contact = () => {
  return (
    <section className="pt-20 text-[#112269]">
      <Title title="CONTACT" subTitle="LET'S CONNECT" />
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-3xl">
            {/* Title */}
            <h2 className="mb-2 text-3xl font-bold md:text-5xl">
              Connect with me and find more about me!
            </h2>
            <p className="my-4 max-w-lg pb-4 text-sm sm:text-base md:mb-6 lg:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            {/* Testimonial */}
            <p className="mb-8 max-w-lg text-sm sm:text-base">
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis
            </p>
            <div className="flex">
              <img
                src="./me.png"
                alt=""
                className="mr-4 inline-block h-16 w-16 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h6 className="text-base font-bold">Suleman Khan</h6>
                <p className="text-sm text-gray-500">Research Associate</p>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-xl bg-[rgba(214,44,31,0.2)] p-8 text-center rounded-xl">
            <h3 className="text-2xl font-bold md:text-3xl">
              Send me a message
            </h3>
            <p className="mx-auto mb-6 mt-4 max-w-lg text-sm lg:mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut
              aliquam,purus sit amet luctus magna fringilla urna
            </p>
            {/* Form */}
            <form
              className="mx-auto mb-4 max-w-sm text-left"
              name="wf-form-password"
              method="get"
            >
              <div>
                <label htmlFor="name-2" className="mb-1 font-medium">
                  Your Name
                </label>
                <input
                  placeholder="Type your name here"
                  type="text"
                  className="outline-none mb-4 block h-9 w-full rounded-xl px-3 py-6 pl-4 text-sm text-[#112269]"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="name-2" className="mb-1 font-medium">
                  Email Address
                </label>
                <input
                  placeholder="Type your email here"
                  type="text"
                  className="outline-none mb-4 block h-9 w-full rounded-xl px-3 py-6 pl-4 text-sm text-[#112269]"
                />
              </div>
              <div className="mb-5 md:mb-6 lg:mb-8">
                <label htmlFor="field-3" className="mb-1 font-medium">
                  Your Message
                </label>
                <textarea
                  placeholder="Type your message here"
                  name="field"
                  className="outline-none mb-2.5 block h-auto min-h-32 w-full p-3 text-sm text-[#112269] rounded-xl resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-block w-full cursor-pointer rounded-md bg-[#112269] hover:bg-transparent hover:text-[#112269] hover:ring-2 hover:ring-[#112269] transition duration-300 px-6 py-3 text-center font-semibold text-white"
              >
                Send now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
