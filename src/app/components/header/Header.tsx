import React from "react";


interface FooterProps {
    handleNavigation: (section: string) => void;
  }

const Header = ({ handleNavigation }: FooterProps) => {
  return (
    <header>
      <div onClick={() => handleNavigation("contactUsRef")}> 1 </div>

      <div onClick={() => handleNavigation("contactUsRef")}>2</div>

      <div onClick={() => handleNavigation("contactUsRef")}>3</div>

      <div onClick={() => handleNavigation("contactUsRef")}>4</div>
    </header>
  );
};

export default Header;
