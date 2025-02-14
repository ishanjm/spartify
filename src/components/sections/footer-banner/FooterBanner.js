import Image from "next/image";
const FooterBanner = () => {
  return (
    <div className="container after:absolute after:top-10 after:right-[45%] after:w-[222px] after:h-[350px] after:blur-[160px] after:rounded-60% after:bg-gradient-circle after:-z-1 after:-mt-5% after:mr-5% overflow-hidden">
      <div className="pt-10 relative">
        <Image
          className=""
          width="1266"
          height="387"
          alt="footer"
          src="/img/spartify/footer.png"
        />
        <div className="absolute top-40 right-20">
          <h1
            className=" text-3xl xl:leading-1.2 mb-15px wow fadeInRight"
            data-wow-delay=".5s"
          >
            Public PaaS with AI <br /> Orchestration <br /> Optimized for
            Testers
          </h1>
        </div>
      </div>
    </div>
  );
};
export default FooterBanner;
