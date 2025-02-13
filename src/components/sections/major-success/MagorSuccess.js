import Image from "next/image";
import WhatsNext from "@/components/sections/whats-next/WhatsNext";
const MagorSuccess = () => {
  return (
    <section className="container">
      <div className="grid sm:grid-cols-2 sm:gap-20 py-20">
        <div className="fadeInLeft wow" data-wow-delay=".5s">
          <h1 className=" text-center sm:text-left text-size-38 xl:text-4xl 2xl:text-size-50 xl:leading-1.2 mb-15px">
            Major Success <br /> Stories & Review
          </h1>
          <hr />
          <p className="my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="wow fadeInRight" data-wow-delay=".5s">
          <Image
            width="562"
            height="312"
            alt="discover"
            src="/img/spartify/discover.png"
          />
        </div>
      </div>
      <div className="relative">
        <WhatsNext />
      </div>
    </section>
  );
};
export default MagorSuccess;
