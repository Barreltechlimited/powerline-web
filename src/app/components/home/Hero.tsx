import React from "react";
import Image from "next/image";

const Hero = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section ref={ref} className="relative">
      {/* Image as background */}
      <div className="top-0 left-0 absolute inset-0 -z-10">
        <Image
          src="/img/hero-bg.jpg"
          alt="PowerLine Background Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      {/* Content over the image */}
      <div className="w-11/12 max-w-screen-xl mx-auto py-[70px] relative z-10 text-white text-center ">
        <h1 className="text-4xl font-bold">Welcome to Power Line</h1>
        <p className="mt-4">Your journey starts here</p>
      </div>
    </section>
  );
});

export default Hero;
