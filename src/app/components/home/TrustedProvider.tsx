import React from "react";
import Image from "next/image";

const TrustedProvider = () => {
  // Array of service providers with their image sources and alt texts
  const providers = [
    { src: "/img/dc/Aba-Electric-Payment-ABEDC.jpg", alt: "Aba Electricity Distribution Company" },
    { src: "/img/dc/Abuja-Electric.jpg", alt: "Abuja Electricity Distribution Company" },
    { src: "/img/dc/Benin-Electricity-BEDC.jpg", alt: "Benin Electricity Distribution Company" },
    { src: "/img/dc/Eko-Electric-Payment-PHCN.jpg", alt: "Eko Electricity Distribution Company" },
    { src: "/img/dc/Enugu-Electric-EEDC.jpg", alt: "Enugu Electricity Distribution Company" },
    { src: "/img/dc/IBEDC-Ibadan-Electricity-Distribution-Company.jpg", alt: "Ibadan Electricity Distribution Company" },
    { src: "/img/dc/Ikeja-Electric-Payment-PHCN.jpg", alt: "Ikeja Electricity Distribution Company" },
    { src: "/img/dc/Jos-Electric-JED.jpg", alt: "Jos Electricity Distribution Company" },
    { src: "/img/dc/Kaduna-Electric-KAEDCO.jpg", alt: "Kaduna Electricity Distribution Company" },
    { src: "/img/dc/Kano-Electric.jpg", alt: "Kano Electricity Distribution Company" },
    { src: "/img/dc/Port-Harcourt-Electric.jpg", alt: "Port Harcourt Electricity Distribution Company" },
    { src: "/img/dc/Yola-Electric-Payment-IKEDC.jpg", alt: "Yola Electricity Distribution Company" },
  ];

  return (
    <section className="bg-white">
      <div className="w-11/12 max-w-screen-xl mx-auto py-[70px]">
        <h2 className="text-center text-black font-semibold text-[25px] sm:text-[30px] lg:text-[40px] leading-none mb-[45px]">
          Trusted Service Providers
        </h2>
        <div className="mt-4 overflow-hidden">
          <div className="flex gap-12 md:gap-28 animate-scroll">
           
            {[...providers, ...providers].map((provider, index) => (
              <div key={index} className="min-w-[80px]">
                <Image
                  src={provider.src}
                  alt={provider.alt}
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedProvider;
