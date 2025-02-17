"use client";
import { useHeaderContext } from "@/context_api/HeaderContext";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ isSticky }) => {
  const { isInnerPage } = useHeaderContext();
  return (
    <Link href="/" className="logo w-[175px] sm:w-[230px]">
      <Image
        className={`${
          isInnerPage && !isSticky
            ? "inline-block   "
            : " hidden dark:inline-block"
        } `}
        src="/img/spartify/logo-white.png"
        alt=""
        width={230}
        height={60}
      />
      <Image
        className={`${
          isInnerPage && !isSticky ? "hidden" : "inlin-block dark:hidden"
        }`}
        src="/img/spartify/logo-white.png"
        alt=""
        width={230}
        height={60}
      />
    </Link>
  );
};

export default Logo;
