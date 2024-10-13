import React from "react";

const Testimonials  = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section ref={ref} className="my-60">
      Testimonials Section
    </section>
  );
});

export default Testimonials;
