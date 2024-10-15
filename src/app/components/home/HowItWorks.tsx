import React from "react";
import Image from "next/image";

const HowItWorksContent = [
  {
    id: 1,
    svg: "/icons/hiw1.svg",
    title: "Enter details",
    description:
      "Input your meter number and phone number to retrieve your current bill or prepaid balance.",
  },
  {
    id: 2,
    svg: "/icons/hiw2.svg",
    title: "Choose your providers",
    description:
      "We support multiple electricity providers, giving you the flexibility to pay your bills no matter which service you use.",
  },
  {
    id: 3,
    svg: "/icons/hiw3.svg",
    title: "Select your preferred payment options",
    description:
      "Choose from multiple secure payment options, such as bank transfer, debit/credit card, or mobile wallet, and confirm the amount.",
  },
];

const HowItWorks = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section ref={ref} className="">
      <div className="w-11/12 max-w-screen-xl mx-auto py-[70px]">
        <h2 className="text-black font-semibold text-[25px] sm:text-[30px] lg:text-[40px] leading-none mb-[45px] text-center">
          How it Works
        </h2>

        <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 items-center">
          {/* Image Section */}
          <div className="w-full hidden sm:block ">
            <Image
              src="/img/howitworks.png"
              alt="How It Works Image"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>

          {/* Steps Section */}
          <div className=" flex flex-col gap-6 sm:gap-14">
            {HowItWorksContent.map((item) => (
              <div key={item.id} className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <Image
                    src={item.svg}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="w-14 sm:w-24 h-14 sm:h-24"
                  />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default HowItWorks;
