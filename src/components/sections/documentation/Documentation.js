import Image from "next/image";
const data1 = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
];
const Documentation = () => {
  return (
    <div className="container grid sm:grid-cols-2 sm:gap-10">
      <div className="bg-black p-10">
        <h1 className="text-2xl 2xl:text-size-38 xl:leading-1.2 mb-15px">
          Marektign Documentation
        </h1>
        <div className="grid grid-rows-4 gap-2 mt-5">
          {data1.map((item, id) => (
            <div key={id} className="flex bg-primary-color/[0.1] pt-2 pl-3">
              <div className="mr-5 mt-1">
                <Image
                  width="40"
                  height="25"
                  alt="check"
                  src="/img/spartify/computer.png"
                />
              </div>
              <div>
                <h2 className="text-xl text-primary-color">
                  Lorem Ipsum is simply
                </h2>
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black p-10">
        <h1 className="text-2xl 2xl:text-size-38 xl:leading-1.2 mb-15px">
          Developer Doc
        </h1>
        <div className="grid grid-rows-4 gap-2 mt-5">
          {data1.map((item, id) => (
            <div key={id} className="flex bg-primary-color/[0.1] pt-2 pl-3">
              <div className="mr-5 mt-1">
                <Image
                  width="40"
                  height="25"
                  alt="check"
                  src="/img/spartify/computer.png"
                />
              </div>
              <div>
                <h2 className="text-xl text-primary-color">
                  Lorem Ipsum is simply
                </h2>
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Documentation;
