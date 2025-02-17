"use client";
import PriceCard from "@/components/shared/spartify/PriceCard";
import ButtonGroup from "@/components/shared/spartify/ButtonGroup";
import filter from "@/libs/filter";
import getPortfolio from "@/libs/getPortfolio";
import React, { useEffect } from "react";
const portfolio = [
  {
    dataFilter: "monthly",
    text: "testq",
  },
  {
    dataFilter: "uxui",
    text: "testddcdd",
  },
];
const Plans = () => {
  // const portfolio = getPortfolio();
  useEffect(() => {
    filter();
  }, []);
  return (
    <section className="container">
      <div className="my-10">
        <div className="portfolio-filter">
          <ButtonGroup />
          <div
            className="portfolio-box wow fadeInUp mt-30px md:mt-10 lg:mt-50px wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="portfolio-sizer"></div>
            <div className="gutter-sizer"></div>
            {portfolio?.length
              ? portfolio?.map((portfolioSingle, idx) => (
                  <PriceCard key={idx} portfolio={portfolioSingle} />
                ))
              : ""}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Plans;
