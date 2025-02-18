"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import ButtonPrimary from "@/components/shared/spartify/ButtonPrimary";

const PriceCard = ({ portfolio, index }) => {
  const themeMode = useSearchParams()?.get("theme_mode");
  const { title, img, shortDesc, id, dataFilter, data } = portfolio
    ? portfolio
    : {};
  const isLight = themeMode === "light" ? true : false;
  return (
    <div
      className={`portfolio-item ${dataFilter} grid grid-rows-1 lg:grid-cols-4 gap-10 p-2 w-full`}
    >
      {data.map(({ title, description, price, annualPrice, facts }, idx) => (
        <div
          key={idx}
          className={`bg-gray-color-3 py-10 px-5 ${
            idx === 0 ? "-my-5 !pt-0" : ""
          }`}
        >
          {idx === 0 && (
            <div className="p-2 bg-[#373737] -mx-5 mb-2 text-center">
              <h4>Try Spartify</h4>
            </div>
          )}
          <h3 className="text-xl text-primary-color mb-5">{title}</h3>
          <p>{description}</p>
          <p className="mt-5">Starting at</p>
          <div className="flex items-end">
            <h2 className="text-5xl">${price}</h2>
            <h2 className="mb-2">/month</h2>
          </div>
          <p className="mb-2">Billed annualy at ${annualPrice}</p>
          <ButtonPrimary className="py-[10px] w-full">
            Get Started
          </ButtonPrimary>
          <div className="my-3">
            {facts.map(({ iconPath, description, count }, idy) => (
              <div key={idy} className="flex gap-2 my-3">
                <Image width={25} height={20} alt="users" src={iconPath} />
                <p className="text-gray-400">
                  {count ? count : ""} {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
