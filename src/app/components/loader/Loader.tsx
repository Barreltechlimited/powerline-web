import React from "react";
import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full mt-10 flex flex-row justify-center items-center mx-auto h-24 md:h-36">
      <BeatLoader color="#0752E8" size={25} speedMultiplier={1} />
    </div>
  );
};

export default Loader;
