import Link from "next/link";

const ButtonPrimary2 = ({ children, url, className }) => {
  return (
    <Link
      href={url ? url : "#"}
      className={`align-middle select-none font-sans text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none focus:outline-none text-white bg-spartify hover:bg-green-800 font-medium rounded-lg text-sm dark:bg-green-600 dark:hover:bg-green-700 ${className}`}
    >
      {children ? children : ""}
    </Link>
  );
};

export default ButtonPrimary2;
