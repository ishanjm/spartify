import Image from "next/image";
const FramworkSlider = () => {
  return (
    <>
      <hr className="opacity-10 bg-gradient-to-r from-stone-950 mb-10" />
      <div
        className="container my-10  relative wow fadeInUp"
        data-wow-delay=".5s"
      >
        <div className="after:absolute after:top-24 after:right-[45%] after:w-322px after:h-308px after:blur-[150px] after:rounded-50% after:bg-gradient-circle after:-z-1 after:-mt-5% after:mr-5% overflow-hidden"></div>
        <div className="relative  wow fadeInLeft">
          <div className="sm:absolute grid sm:grid-cols-2 content-center p-10 place-items-center h-full">
            <div>
              <h3 className="text-center sm:text-left text-2xl inline-block text-primary-color leading-1.2  mb-15px uppercase">
                LEARN ONCE, ACT UNIVERSALLY.
              </h3>
              <h1 className="text-center sm:text-left text-size-35 md:text-size-38 lg:text-size-40 xl:leading-1.2 mb-15px">
                Reclaim engineering capacity
              </h1>
              <h4 className="text-center sm:text-left mx-auto text-xl leading-1.5 text-primary-color-light dark:text-body-color">
                Enable seamless test case creation across multiple platforms
                with a fluent hybrid mode, ensuring zero blocking and maximum
                efficiency.
              </h4>
            </div>
            <Image
              // className="absolute"
              width="1370"
              height="487"
              alt="slider"
              src="/img/spartify/acadamy.png"
            />
          </div>
          <Image
            className="hidden sm:block"
            width="1370"
            height="487"
            alt="slider"
            src="/img/spartify/background.png"
          />
        </div>
      </div>
      <hr className="opacity-10 bg-gradient-to-r from-stone-950 my-10" />
    </>
  );
};
export default FramworkSlider;
