"use client";
import { useFooterContext } from "@/context_api/FooterContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonPrimary from "@/components/shared/spartify/ButtonPrimary";

const footerLinks = [
  {
    Title: "Platforms",
    SubMenu: [
      {
        text: "Spartify Agent",
        url: "#",
      },
      {
        text: "Spartify On-Premise",
        url: "#",
      },
      {
        text: "Spartify Cloud",
        url: "#",
      },
    ],
  },
  {
    Title: "Community",
    SubMenu: [
      {
        text: "Spartan Community",
        url: "#",
      },
      {
        text: "Case Studies",
        url: "#",
      },
      {
        text: "Events & News",
        url: "#",
      },
    ],
  },
  {
    Title: "Developer",
    SubMenu: [
      {
        text: "Documentation",
        url: "#",
      },
      {
        text: "DevPortal",
        url: "#",
      },
      {
        text: "Case Studies",
        url: "#",
      },
    ],
  },
  {
    Title: "Solutions",
    SubMenu: [
      {
        text: "Transform",
        url: "#",
      },
      {
        text: "Control",
        url: "#",
      },
      {
        text: "Compliance",
        url: "#",
      },
    ],
  },
  {
    Title: "Contact",
    SubMenu: [
      {
        text: "Contact Sales",
        url: "#",
      },
      {
        text: "Support & FAQs",
        url: "#",
      },
      {
        text: "Blogs",
        url: "#",
      },
    ],
  },
];

const Footer = () => {
  const { footerType } = useFooterContext();
  return (
    <footer className="mt-10">
      <div
        className={`footer-inner !bg-[#1f2636] ${
          footerType === 2 ? "dark:bg-seondary-color" : "dark:bg-dark-color"
        }`}
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between pt-50px pb-5 md:pt-60px">
            <div className="footer-logo h-75px mb-6">
              <Link href="/">
                <Image
                  src="/img/spartify/logo-white.png"
                  alt=""
                  width={230}
                  height={60}
                />
              </Link>
            </div>
            {/* <!-- nav --> */}
            <div>
              <ul className="nav flex  justify-center items-center gap-x-35px">
                {footerLinks.map((item, index) => (
                  <li key={index} className="nav_item group relative">
                    <Link
                      href="#about"
                      className="text-xl font-medium text-white-color capitalize py-10px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[10px] after:transition-all after:duration-500 group-hover:after:w-full"
                    >
                      {item.Title}
                    </Link>
                    <ul>
                      {item.SubMenu.map((itemSub, index2) => (
                        <li key={index2} className="text-gray-400">
                          <Link href={itemSub.url}>{itemSub.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between pt-50px pb-5 md:pt-60px">
            <div className="flex flex-col">
              <div>
                <h3 className="text-2xl">Follow Us</h3>
                <div className="mt-5 flex gap-5">
                  <Image
                    className="rounded-full bg-white"
                    src="/img/spartify/facebook.png"
                    width={40}
                    height={40}
                    alt="facebook"
                  />
                  <Image
                    className="rounded-full bg-white"
                    src="/img/spartify/youtube.png"
                    width={40}
                    height={40}
                    alt="facebook"
                  />
                  <Image
                    className="rounded-full bg-white"
                    src="/img/spartify/instagram.png"
                    width={40}
                    height={40}
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
            <div>
              <p>Get exclusive deals and early access to fresh sales</p>
              <div className="mt-5 flex justify-end">
                <input type="text" className="leading-10 rounded mr-1 w-full" />
                <ButtonPrimary className="py-[10px] wow fadeInRight">
                  Submit
                </ButtonPrimary>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col sm:flex-row justify-between ">
            <div
              className={`copyright whitespace-nowrap text-sm md:text-base my-5`}
            >
              © 2025 All rights reserved by{" "}
              <Link
                href="/"
                className={`${
                  footerType === 2 ? "text-primary-color " : "text-white-color"
                } hover:text-primary-color`}
              >
                Spartify.io
              </Link>
            </div>
            <div className="flex gap-2 my-5">
              <h5>Terms of Service</h5>
              <span>|</span>
              <h5>Privacy Policy</h5>
              <span>|</span>
              <h5>Compliance standards</h5>
              <span>|</span>
              <h5>Cookie Policy</h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
