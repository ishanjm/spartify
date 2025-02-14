const WhatsNext = () => {
  return (
    <div className="text-center my-20 after:absolute after:top-20 after:right-[45%] after:w-[222px] after:h-[350px] after:blur-[160px] after:rounded-60% after:bg-gradient-circle after:-z-1 after:-mt-5% after:mr-5% overflow-hidden">
      <div className="bg-black py-10">
        <h1
          className="text-size-38 xl:text-4xl 2xl:text-size-50 xl:leading-1.2 mb-15px wow fadeInLeft"
          data-wow-delay=".5s"
        >
          What is next
        </h1>
        <h1
          className="text-2xl xl:leading-1.2 mb-15px wow fadeInRight"
          data-wow-delay=".5s"
        >
          below we should list down related products <br /> something extend
          customer experience
        </h1>
      </div>
    </div>
  );
};
export default WhatsNext;
