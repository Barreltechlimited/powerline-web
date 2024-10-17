import React from "react";
import Image from "next/image";

const whyChooseContent = [
  {
    id: 1,
    svg: "/icons/credit-card.png",
    title: "Flexible Payment Options",
    description:
      "We offer secure and easy payment options, allowing you to manage your electricity bills —whether via bank transfer, card, or mobile wallet.",
  },
  {
    id: 2,
    svg: "/icons/users-group-outline.png",
    title: "Wide Coverage Across Providers",
    description:
      "We support multiple electricity providers, giving you the flexibility to pay your bills no matter which service you use.",
  },
  {
    id: 3,
    svg: "/icons/speech-bubble.png",
    title: "Instant Bill Update",
    description:
      "Stay up-to-date with real-time notifications and immediate confirmation of payments. No delays, no hassle—just instant updates.",
  },
  {
    id: 4,
    svg: "/icons/code-bold.png",
    title: "User Friendly Interface",
    description:
      "Our platform is designed with simplicity in mind, allowing you to navigate and complete payments with ease, whether you’re a first-time user or a regular.",
  },
  {
    id: 5,
    svg: "/icons/outline-protect.png",
    title: "Reliable and Secure Transactions",
    description:
      "We prioritize top-notch security, ensuring your payments are always protected, giving you reliable and safe transactions every time.",
  },
  {
    id: 6,
    svg: "/icons/regular-clock.png",
    title: "24/7 Customer Support",
    description:
      "Experience round-the-clock customer support, ensuring your concerns are addressed promptly.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#0A102E] ">
      <div className="w-11/12 max-w-screen-xl mx-auto py-[70px] ">
        <h2 className="text-white font-semibold text-[25px] sm:text-[30px] lg:text-[40px] w-1/2 leading-none mb-[45px]">
          Why Choose PowerLine?
        </h2>

        <div className="grid gap-6 lg:gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseContent.map((item) => (
            <div key={item.id} className="flex flex-col items-left text-white">
              <div className="mb-4 ">
                <Image
                  src={item.svg}
                  alt={item.title}
                  className="w-[40px] h-[40px]"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
