"use client";
import PriceCard from "@/components/shared/spartify/PriceCard";
import ButtonGroup from "@/components/shared/spartify/ButtonGroup";
import filter from "@/libs/filter";
import getPortfolio from "@/libs/getPortfolio";
import React, { useEffect } from "react";
const portfolio = [
  {
    dataFilter: "monthly",
    data: [
      {
        title: "Starter",
        description: "For teams to learn and grow in the direction of QAOps.",
        annualPrice: 799,
        price: 67,
        facts: [
          {
            iconPath: "/img/spartify/user.png",
            description: "Users",
            count: 1,
          },
          {
            iconPath: "/img/spartify/play.png",
            description: "Test results",
            count: "120,000",
          },
          {
            iconPath: "/img/spartify/users.png",
            description: "Teams",
          },
          {
            iconPath: "/img/spartify/edit.png",
            description: "Unliited tests",
          },
        ],
      },
      {
        title: "Teams",
        description: "For teams to learn and grow in the direction of QAOps.",
        annualPrice: 799,
        price: 67,
        facts: [
          {
            iconPath: "/img/spartify/user.png",
            description: "Users",
            count: 1,
          },
          {
            iconPath: "/img/spartify/play.png",
            description: "Test results",
            count: "120,000",
          },
          {
            iconPath: "/img/spartify/users.png",
            description: "Teams",
          },
          {
            iconPath: "/img/spartify/edit.png",
            description: "Unliited tests",
          },
        ],
      },
      {
        title: "Business",
        description: "For teams to learn and grow in the direction of QAOps.",
        annualPrice: 799,
        price: 67,
        facts: [
          {
            iconPath: "/img/spartify/user.png",
            description: "Users",
            count: 1,
          },
          {
            iconPath: "/img/spartify/play.png",
            description: "Test results",
            count: "120,000",
          },
          {
            iconPath: "/img/spartify/users.png",
            description: "Teams",
          },
          {
            iconPath: "/img/spartify/edit.png",
            description: "Unliited tests",
          },
        ],
      },
      {
        title: "Enterprice",
        description: "For teams to learn and grow in the direction of QAOps.",
        annualPrice: 799,
        price: 67,
        facts: [
          {
            iconPath: "/img/spartify/user.png",
            description: "Users",
            count: 1,
          },
          {
            iconPath: "/img/spartify/play.png",
            description: "Test results",
            count: "120,000",
          },
          {
            iconPath: "/img/spartify/users.png",
            description: "Teams",
          },
          {
            iconPath: "/img/spartify/edit.png",
            description: "Unliited tests",
          },
        ],
      },
    ],
  },
  {
    dataFilter: "uxui",
    data: [
      {
        title: "Starter Annual",
        description: "For teams to learn and grow in the direction of QAOps.",
        annualPrice: 799,
        price: 67,
        facts: [
          {
            iconPath: "/img/spartify/user.png",
            description: "Users",
            count: 1,
          },
          {
            iconPath: "/img/spartify/play.png",
            description: "Test results",
            count: "120,000",
          },
          {
            iconPath: "/img/spartify/users.png",
            description: "Teams",
          },
          {
            iconPath: "/img/spartify/edit.png",
            description: "Unliited tests",
          },
        ],
      },
      {
        title: "Teams Annual",
        description: "For teams to learn and grow in the direction of QAOps.",
        annualPrice: 799,
        price: 67,
        facts: [
          {
            iconPath: "/img/spartify/user.png",
            description: "Users",
            count: 1,
          },
          {
            iconPath: "/img/spartify/play.png",
            description: "Test results",
            count: "120,000",
          },
          {
            iconPath: "/img/spartify/users.png",
            description: "Teams",
          },
          {
            iconPath: "/img/spartify/edit.png",
            description: "Unliited tests",
          },
        ],
      },
      {
        title: "Business Annual",
        description: "For teams to learn and grow in the direction of QAOps.",
        annualPrice: 799,
        price: 67,
        facts: [
          {
            iconPath: "/img/spartify/user.png",
            description: "Users",
            count: 1,
          },
          {
            iconPath: "/img/spartify/play.png",
            description: "Test results",
            count: "120,000",
          },
          {
            iconPath: "/img/spartify/users.png",
            description: "Teams",
          },
          {
            iconPath: "/img/spartify/edit.png",
            description: "Unliited tests",
          },
        ],
      },
      {
        title: "Enterprice Annual",
        description: "For teams to learn and grow in the direction of QAOps.",
        annualPrice: 799,
        price: 67,
        facts: [
          {
            iconPath: "/img/spartify/user.png",
            description: "Users",
            count: 1,
          },
          {
            iconPath: "/img/spartify/play.png",
            description: "Test results",
            count: "120,000",
          },
          {
            iconPath: "/img/spartify/users.png",
            description: "Teams",
          },
          {
            iconPath: "/img/spartify/edit.png",
            description: "Unliited tests",
          },
        ],
      },
    ],
  },
];
const Plans = () => {
  // const portfolio = getPortfolio();
  useEffect(() => {
    filter();
  }, []);
  return (
    <section className="container pricing">
      <div className="my-10 relative">
        <div className="portfolio-filter after:absolute after:top-36 after:right-[45%] after:w-222px after:h-308px after:blur-[150px] after:rounded-50% after:bg-gradient-circle after:-z-1 after:-mt-5% after:mr-5% overflow-hidden">
          <ButtonGroup />
          <div
            className="portfolio-box wow fadeInUp mt-30px md:mt-10 lg:mt-50px wow fadeInUp w-full "
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
