import ButtonSeondary from "@/components/shared/buttons/ButtonSeondary";
import FunFact from "@/components/shared/fun-fact/FunFact";
import ButtonPrimary from "@/components/shared/spartify/ButtonPrimary";
import Socials from "@/components/shared/socials/Socials";
import Brands1 from "@/components/sections/brands/Brands1";
import PortfolioDetailsPrimary from "@/components/sections/portfolio-details/PortfolioDetailsPrimary";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-60 bg-[url(/img/spartify/react-icons.png)] -mt-20 bg-no-repeat bg-center h-100 relative pt-130px lg:pt-40 xl:pt-200px pb-10 md:pb-30px lg:pb-50px after:absolute after:top-0 after:right-[45%] after:w-322px after:h-308px after:blur-[150px] after:rounded-50% after:bg-gradient-circle after:-z-1 after:-mt-5% after:mr-5% overflow-hidden">
      {/* <!-- intro tex --> */}

      <div className="intro_text"></div>
      <div className="container">
        <div className="lg:pt-[7rem] ">
          <div className="text-center">
            <h1 className="text-size-35 md:text-size-38 lg:text-size-50 xl:text-6xl 2xl:text-size-60 xl:leading-1.2 mb-15px">
              Revolutionizing Test Platform <br />
              with
              <span className="text-primary-color"> AI-Powered</span> iPaaS
            </h1>

            <h4 className="mx-auto text-xl leading-1.5 text-primary-color-light dark:text-body-color">
              The leading iPaaS for SDET teams, modernizing test automation and
              <br />
              enabling QAOps. Boost efficiency with AI-driven modularization,
              <br />
              enhancing scalability and ensuring seamless integration for modern
              <br />
              enterprises.
            </h4>
            {/* <!-- action and social --> */}
            <div className=" mt-10 md:mt-30px lg:mt-50px">
              <div className="flex justify-center flex-col sm:flex-row">
                <div className="mb-2 sm:mb-0 grayscale justify-between flex sm:w-[400px] h-[40px] bg-white rounded mx-2 py-2 px-2">
                  <span className="text-gray-color">
                    npm i -g @spartify/cli
                  </span>
                  <div className="flex gap-1">
                    <Image
                      alt="react"
                      width="25"
                      height="25"
                      src="/img/spartify/images.png"
                    />
                    <Image
                      alt="react"
                      width="25"
                      height="25"
                      src="/img/spartify/react.png"
                    />
                    <Image
                      alt="react"
                      width="25"
                      height="25"
                      src="/img/spartify/HTML5.png"
                    />
                  </div>
                </div>
                <ButtonPrimary className="py-[10px]">Get Started</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- fanfact --> */}
      <FunFact />
      <PortfolioDetailsPrimary />
    </section>
  );
};

export default Hero;
