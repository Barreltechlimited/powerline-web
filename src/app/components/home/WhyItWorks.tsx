import React from "react";

const WhyItWorks = React.forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section ref={ref} className="my-60">
      Why It Works Section
    </section>
  );
});

export default WhyItWorks;
