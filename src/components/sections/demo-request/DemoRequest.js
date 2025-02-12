import Image from "next/image";
import ButtonPrimary from "@/components/shared/spartify/ButtonPrimary";

const DemoRequest = () => {
  return (
    <section id="demorequest">
      <div className="lg:mt-5 pt-30px md:pt-10 lg:pt-50px">
        <hr className="opacity-10 bg-gradient-to-r from-stone-950" />
        <div className="lg:mt-5 pt-30px md:pt-10 lg:pt-50px">
          <div className="container text-center">
            <div className="mb-5 wow fadeInUp" data-wow-delay=".3s">
              <h2 className="text-2xl inline-block text-primary-color leading-1.2  mb-15px uppercase">
                Revolutionize Your test Automation
              </h2>
            </div>
            <div className="mb-5 wow fadeInUp" data-wow-delay=".3s">
              <h1 className="text-size-38 xl:text-5xl 2xl:text-size-60 xl:leading-1.2 mb-15px">
                Create,code,test and optimized <br />
                faster than you thought possible
              </h1>
            </div>
            <div className=" mt-10 ">
              <div className="flex justify-center sm:gap-2 flex-col sm:flex-row wow fadeInUp">
                <ButtonPrimary className="py-[10px] wow fadeInLeft">
                  View Platform
                </ButtonPrimary>
                <ButtonPrimary className="py-[10px] wow fadeInRight">
                  Dequest Demo
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DemoRequest;
