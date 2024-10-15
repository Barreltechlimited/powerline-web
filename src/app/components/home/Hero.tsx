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
      <div className="relative z-10 text-white text-center pt-40  py-10">
        <h1 className="text-4xl font-bold">Welcome to Hivenify</h1>
        <p className="mt-4">Your journey starts here</p>
      </div>
    </section>
  );
});

export default Hero;
