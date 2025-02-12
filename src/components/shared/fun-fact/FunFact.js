"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => 0,
});

const FunFact = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValue(175000);
      setValue2(500);
      setValue3(2500);
      setValue4(50);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <div className="funfact-area mt-60px xl:mt-70px 2xl:mt-40 relative after:absolute after:top-0 after:right-[45%] after:w-322px after:h-308px after:blur-[200px] after:rounded-50% after:bg-gradient-circle after:-z-1 after:-mt-5% after:mr-5%">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-30px text-primary-color dark:text-body-color lg:mx-48">
            <div className="border-r-0 sm:border-r-2 funfact-item text-center flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-15px">
              <div className="text">NPM Installs</div>
              <div className="number text-size-38 font-medium inline-flex items-cener">
                <Odometer
                  className="!font-sora tracking-[0.04em] inline-flex items-end"
                  value={value}
                />{" "}
                <span className="symbol"> +</span>
              </div>
            </div>

            <div className="border-r-0 sm:border-r-2 funfact-item text-center flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-15px">
              <div className="text">Live Projects</div>
              <div className="number text-size-38 font-medium inline-flex items-cener">
                <Odometer
                  className="!font-sora tracking-[0.04em] inline-flex items-end"
                  value={value2}
                />{" "}
                <span className="symbol"> +</span>
              </div>
            </div>

            <div className="border-r-0 sm:border-r-2 funfact-item text-center flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-15px">
              <div className="text">Github Stars</div>
              <div className="number text-size-38 font-medium inline-flex items-cener">
                <Odometer
                  className="!font-sora tracking-[0.04em] inline-flex items-end"
                  value={value3}
                />{" "}
                <span className="symbol"> +</span>
              </div>
            </div>

            <div className="funfact-item text-center flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-15px">
              <div className="text">Components</div>
              <div className="number text-size-38 font-medium inline-flex items-cener">
                <Odometer
                  className="!font-sora tracking-[0.04em] inline-flex items-end"
                  value={value4}
                />{" "}
                <span className="symbol"> +</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFact;
