import React from "react";

interface FooterProps {
  handleNavigation: (section: string) => void;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ handleNavigation }, ref) => {
    return (
      <footer ref={ref} className="my-20">
        Footer Here
        <button onClick={() => handleNavigation("contactUsRef")}>
          Go to Contact Us
        </button>
      </footer>
    );
  }
);

export default Footer;
