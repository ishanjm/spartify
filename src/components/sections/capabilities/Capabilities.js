import Image from "next/image";
const data1 = [
  "Granular Roles & Permissions",
  "Integrations & Plugins",
  "Supports Major Test Tools",
  "Fluent & Fast Development",
  "Remote Cloud Connectivity",
  "CLI Control at Test Level",
  "Ideal for Micro-Frontend Projects",
];
const data2 = [
  "Cross-Platform Support",
  "Easily Convertible Cross Tools",
  "Supports Global Distributed Teams",
  "Low Maintenance & Easy Adoption",
  "Native Framework  lib. Access",
  "Connected with Full SDET Ecosystem",
  "Connected with Static IP - Device Farm",
];
const Capabilities = () => {
  return (
    <section className="container">
      <div className="grid sm:grid-cols-3 place-items-center sm:gap-10 mb-20">
        <div className="bounceInLeft wow" data-wow-delay=".5s">
          <h2 className="wow fadeInUp text-center sm:text-left text-2xl inline-block text-primary-color leading-1.2  mb-15px uppercase">
            ENTERPRISE
          </h2>
          <h1 className=" text-center sm:text-left text-size-38 xl:text-4xl 2xl:text-size-50 xl:leading-1.2 mb-15px">
            Engineered for <br /> Your Enterprise
          </h1>
        </div>
        <div className="wow bounceIn" data-wow-delay=".5s">
          <ul>
            {data1.map((item, id) => (
              <li key={id} className="flex my-3">
                <Image
                  className="h-[20px]"
                  width="21"
                  height="21"
                  alt="check"
                  src="/img/spartify/check.png"
                />
                <h4 className="ml-2">{item}</h4>
              </li>
            ))}
          </ul>
        </div>
        <div className="bounceInRight wow" data-wow-delay=".5s">
          <ul>
            {data2.map((item, id) => (
              <li key={id} className="flex my-3">
                <Image
                  className="h-[20px]"
                  width="21"
                  height="21"
                  alt="check"
                  src="/img/spartify/check.png"
                />
                <h4 className="ml-2">{item}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Capabilities;
