import Image from "next/image";
import FramworkSlider from "@/components/sections/generative-framework/FrameworkSlider";
const Partners = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center mt-16 wow fadeInUp" data-wow-delay=".5s">
          <h1 className="text-size-35 md:text-size-38 lg:text-size-46 xl:text-6xl 2xl:text-size-55 xl:leading-1.2 mb-15px uppercase">
            spartify Development
          </h1>
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-7 justify-items-center mt-16 mb-16">
            <Image
              alt="react"
              width="85"
              height="85"
              src="/img/spartify/partner-6.png"
            />
            <Image
              alt="react"
              width="85"
              height="85"
              src="/img/spartify/partner-4.png"
            />
            <Image
              alt="react"
              width="85"
              height="85"
              src="/img/spartify/partner-1.png"
            />
            <Image
              alt="react"
              width="85"
              height="85"
              src="/img/spartify/partner-2.png"
            />
            <Image
              alt="react"
              width="85"
              height="85"
              src="/img/spartify/partner-3.png"
            />
            <Image
              alt="react"
              width="85"
              height="85"
              src="/img/spartify/partner-5.png"
            />
            <Image
              alt="react"
              width="85"
              height="85"
              src="/img/spartify/partner-7.png"
            />
          </div>
        </div>
      </div>
      <FramworkSlider />
    </section>
  );
};
export default Partners;
