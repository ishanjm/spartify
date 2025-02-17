import React from "react";

const Hero = () => {
  return (
    <section className="pt-60  -mt-20 bg-no-repeat bg-center h-100 relative pt-130px lg:pt-40 xl:pt-200px pb-10 md:pb-30px lg:pb-50px after:absolute after:top-28 after:right-[45%] after:w-322px after:h-308px after:blur-[150px] after:rounded-50% after:bg-gradient-circle after:-z-1 after:-mt-5% after:mr-5% overflow-hidden">
      <div className="intro_text"></div>
      <div className="container">
        <div className="lg:pt-[7rem] ">
          <div className="text-center">
            <h1 className="text-size-35 md:text-size-38 lg:text-size-46 xl:text-6xl 2xl:text-size-60 xl:leading-1.2 mb-15px">
              Straight forward SDET
              <span className="text-primary-color"> iPasS</span> pricing.
            </h1>

            <h4 className="mx-auto text-xl leading-1.5 text-primary-color-light dark:text-body-color">
              Plans designed to fit any B2B software company,
              <br />
              any integration scenario, at any scale.
            </h4>
            {/* <!-- action and social --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
