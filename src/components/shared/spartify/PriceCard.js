"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const PriceCard = ({ portfolio, index }) => {
  const themeMode = useSearchParams()?.get("theme_mode");
  const { title, img, shortDesc, id, dataFilter, text } = portfolio
    ? portfolio
    : {};
  const isLight = themeMode === "light" ? true : false;
  return (
    <div
      className={`portfolio-item ${dataFilter} grid grid-cols-4 gap-2 p-2 w-full`}
    >
      <div>
        <h1>{text}</h1>
      </div>
      <div>
        <h1>{text}</h1>
      </div>
      <div>
        <h1>{text}</h1>
      </div>
      <div>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default PriceCard;
