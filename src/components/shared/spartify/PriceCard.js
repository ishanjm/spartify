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
    <div className={`portfolio-item ${dataFilter}`}>
      <h1>{text}</h1>
    </div>
  );
};

export default PriceCard;
