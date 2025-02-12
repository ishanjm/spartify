import Image from "next/image";
const FramworkSlider = () => {
  return (
    <>
      <hr className="opacity-10 bg-gradient-to-r from-stone-950 mb-10" />
      <div className="container mt-10 relative">
        <div className=""></div>
        <Image
          width="1370"
          height="487"
          alt="slider"
          src="/img/spartify/background.png"
        />
      </div>
    </>
  );
};
export default FramworkSlider;
