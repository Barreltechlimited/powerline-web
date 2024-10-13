"use client"
import { ReactLenis } from "@studio-freight/react-lenis";


function LenisSmoothScroll({ children }: { children?: React.ReactNode }) {
  const lenisOption = {
    lerp: 0.1,
    duration: 4,
    smoothTouch: false,
    smooth: true,
  };
  return (
    <ReactLenis root options={lenisOption}>
      {/* <Toaster /> */}
      {children}
    </ReactLenis>
  );
}

export default LenisSmoothScroll;
