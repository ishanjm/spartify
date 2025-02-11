"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import stickyHeader from "@/libs/stickyHeader";
import { useHeaderContext } from "@/context_api/HeaderContext";

const Header = ({ isSticky }) => {
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);
  const { isInnerPage } = useHeaderContext();
  useEffect(() => {
    stickyHeader();
  }, []);

  return (
    <header
      className={`header-area  ${
        isSticky ? "header-2 header-sticky" : "header-absolute"
      }`}
    >
      <div
        className={`${
          isSticky ? "py-10px" : "pt-15px xl:pt-5 pb-5 md:pb-30px xl:pb-5"
        } relative`}
      >
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            {/* <!-- logo and contact email --> */}
            <Logo isSticky={isSticky} />
            {/* <!-- main menu --> */}
            <Navbar
              isActiveMobileMenu={isActiveMobileMenu}
              setIsActiveMobileMenu={setIsActiveMobileMenu}
              isSticky={isSticky}
            />
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        <MobileMenu isActiveMobileMenu={isActiveMobileMenu} />
      </div>
    </header>
  );
};

export default Header;
