"use client";
import { useState } from "react";
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full my-10">
      {items.map((item, index) => (
        <div key={index} className="">
          <button
            className="border m-1 w-full flex justify-between items-center p-4 text-left text-lg font-medium hover:bg-primary-color transition group"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <i
              className={`${
                openIndex === index ? "rotate-180" : ""
              } flaticon-up-right-arrow text-size-15 md:text-xl text-primary-color group-hover:text-white-color lg:right-[55px] rotate-[-360deg] group-hover:rotate-0 transition-all duration-300`}
            ></i>
            {/* <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              /> */}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="p-4">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
const FAQ = () => {
  const accordionItems = [
    {
      title: "What is Tailwind CSS?",
      content:
        "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    },
    {
      title: "How does React work?",
      content:
        "React creates a virtual DOM and updates only the changed parts efficiently.",
    },
    {
      title: "What is an accordion?",
      content:
        "An accordion is a UI component that expands/collapses sections of content.",
    },
  ];
  return (
    <section className="container">
      <div className="text-center mb-10 mt-36">
        <h1 className="text-size-35 md:text-size-38 lg:text-size-46 xl:text-6xl 2xl:text-size-60 xl:leading-1.2 mb-15px">
          Frequently Asked Questions
        </h1>
      </div>
      <Accordion items={accordionItems} />
    </section>
  );
};
export default FAQ;
