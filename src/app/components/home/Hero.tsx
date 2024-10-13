import React from "react";

const Hero = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section ref={ref} className="my-60">
      Hero Page
    </section>
  );
});

export default Hero;
