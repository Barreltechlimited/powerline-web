import React from "react";
import Image from "next/image"; 

const PowerAgain = () => {
  return (
    <section className="">
      <div className="w-11/12 max-w-screen-xl mx-auto p-[56px] bg-[#F2F2F2] rounded-xl">
        <h2 className="text-black font-semibold text-[25px] sm:text-[30px] lg:text-[40px] leading-none mb-[45px] text-center">
          Hear What Our Customer Have To Say
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">
              Never run out of power again!
            </h2>
            <p className="mb-4">
              Stay connected with ease using our secure bill payment service.
              Pay your electricity bills and enjoy continuous service anytime,
              anywhere.
            </p>
            <div className="flex">
              <input
                type="text"
                // value={token}
                // onChange={(e) => setToken(e.target.value)}
                placeholder="XXXXX-XXXXX"
                className="border rounded-l px-4 py-2 w-full md:w-64"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition duration-200">
                Get token
              </button>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Light bulb"
              className="w-32 h-32 md:w-48 md:h-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerAgain;
