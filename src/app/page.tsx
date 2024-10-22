"use client";
import React, { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Testimonials from "./components/home/Testimonials";
import PowerAgain from "./components/home/PowerAgain";
import TrustedProvider from "./components/home/TrustedProvider";
import WhyChoose from "./components/home/WhyChoose";
import HowItWorks from "./components/home/HowItWorks";
import Hero from "./components/home/Hero";
import Loader from "./components/loader/Loader";
import LenisSmoothScroll from "./utils/LenisSmoothScrool";

const Home = () => {
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

  return (
    <Suspense fallback={<Loader />}>
      <HomeContent
        heroRef={heroRef}
        howItWorksRef={howItWorksRef}
        testimonialRef={testimonialRef}
        contactUsRef={contactUsRef}
        currentSection={currentSection}
        scrollToRef={scrollToRef}
      />
    </Suspense>
  );
};

const HomeContent = ({
  heroRef,
  howItWorksRef,
  testimonialRef,
  contactUsRef,
  currentSection,
  scrollToRef,
}: {
  heroRef: React.RefObject<HTMLElement>;
  howItWorksRef: React.RefObject<HTMLElement>;
  testimonialRef: React.RefObject<HTMLElement>;
  contactUsRef: React.RefObject<HTMLElement>;
  currentSection: string;
  scrollToRef: (ref: React.RefObject<HTMLElement>, section: string) => void;
}) => {
  const searchParams = useSearchParams();
  const sectionFromUrl = searchParams.get("section");
  const router = useRouter();

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
  }, [sectionFromUrl, currentSection]);

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
    <div>
      <LenisSmoothScroll>
        <Header handleNavigation={handleNavigation} />

        <Hero ref={heroRef} />
        <TrustedProvider />
        <WhyChoose />
        <HowItWorks ref={howItWorksRef} />
        <Testimonials ref={testimonialRef} />

        <PowerAgain />

        <Footer ref={contactUsRef} handleNavigation={handleNavigation} />
      </LenisSmoothScroll>
    </div>
  );
};

export default Home;
