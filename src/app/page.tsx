"use client";
import React, { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Testimonials from "./components/home/Testimonials";
import PowerAgain from "./components/home/PowerAgain";
import TrustedProvider from "./components/home/TrustedProvider";
import WhyChoose from "./components/home/WhyChoose";
import WhyItWorks from "./components/home/WhyItWorks";
import Hero from "./components/home/Hero";

import LenisSmoothScroll from "./utils/LenisSmoothScrool";

const Home = () => {
  const searchParams = useSearchParams();
  const sectionFromUrl = searchParams.get("section");
  const router = useRouter();
  const pathname = usePathname();

  const heroRef = useRef<HTMLElement | null>(null);
  const howItWorksRef = useRef<HTMLElement | null>(null);
  const testimonialRef = useRef<HTMLElement | null>(null);
  const contactUsRef = useRef<HTMLElement | null>(null);

  const [currentSection, setCurrentSection] = useState<string>("");

  const scrollToRef = (ref: React.RefObject<HTMLElement>, section: string) => {
    const navbarHeight = 108;
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - navbarHeight,
        behavior: "smooth",
      });
      setCurrentSection(section);
    }
  };

  useEffect(() => {
    if (sectionFromUrl) {
      switch (sectionFromUrl) {
        case "heroRef":
          scrollToRef(heroRef, sectionFromUrl);
          break;
        case "howItWorksRef":
          scrollToRef(howItWorksRef, sectionFromUrl);
          break;
        case "testimonialRef":
          scrollToRef(testimonialRef, sectionFromUrl);
          break;
        case "contactUsRef":
          scrollToRef(contactUsRef, sectionFromUrl);
          break;
        default:
          break;
      }
    }
  }, [sectionFromUrl]);

  const handleNavigation = (section: string) => {
    if (
      section === "heroRef" ||
      "howItWorksRef" ||
      "testimonialRef" ||
      "contactUsRef"
    ) {
      switch (section) {
        case "heroRef":
          scrollToRef(heroRef, section);
          break;
        case "howItWorksRef":
          scrollToRef(howItWorksRef, section);
          break;
        case "testimonialRef":
          scrollToRef(testimonialRef, section);
          break;
        case "contactUsRef":
          scrollToRef(contactUsRef, section);
          break;
        default:
          break;
      }
    } else if (
      section === "privacyPolicyRef" ||
      "termsServiceRef" ||
      "cookiesPolicyRef"
    ) {
      // If not on the home page, navigate to the home page with the section query
      alert("section");
      router.push(`/legal?section=${section}`);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <LenisSmoothScroll>
          <Header handleNavigation={handleNavigation} />

          <Hero ref={heroRef} />
          <TrustedProvider />
          <WhyChoose />
          <WhyItWorks ref={howItWorksRef} />
          <Testimonials ref={testimonialRef} />

          <PowerAgain />

          <Footer
            ref={contactUsRef}
            handleNavigation={handleNavigation}
          />
        </LenisSmoothScroll>
      </div>
    </Suspense>
  );
};

export default Home;
