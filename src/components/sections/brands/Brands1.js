"use client";
import getBrands from "@/libs/getBrands";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Brands1 = () => {
  const brands = getBrands();
  return (
    <section id="testimonials">
      <div className="lg:mt-10 pt-60px md:pt-20 lg:pt-100px">
        <div className="container">
          <div className="testimonials">
            {/* <!-- section heading --> */}
            <div className="text-center ">
              <div className="mb-5 wow fadeInUp" data-wow-delay=".3s">
                <h2
                  className="text-2xl inline-block text-primary-color leading-1.2  mb-15px wow fadeInLeft uppercase"
                  data-wow-delay=".3s"
                >
                  LEADING ENTERPRISE TEST TEAMS ACCELERATE THEIR ROADMAPS WITH
                  SPARTIFY.IO
                </h2>
              </div>
            </div>
            {/* <!-- slider --> */}

            <div className="lg:mt-16 wow fadeInUp" data-wow-delay=".3s">
              <Swiper
                spaceBetween={30}
                slidesPerView={2}
                loop={false}
                breakpoints={{
                  576: {
                    slidesPerView: 3,
                  },

                  768: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 5,
                  },
                  1024: {
                    slidesPerView: 6,
                  },
                }}
                className="brand-slider"
              >
                {brands?.length
                  ? brands?.map((brand, idx) => (
                      <SwiperSlide key={idx}>
                        <div
                          className="brand-item text-center wow fadeInUp"
                          data-wow-delay={`.${4 + idx}s`}
                        >
                          <Link href="#">
                            <img
                              className="hidden dark:block"
                              src={brand?.darkImg}
                              alt="Images"
                            />
                            <img
                              className="block dark:hidden"
                              src={brand?.lightImg}
                              alt="Images"
                            />
                          </Link>
                        </div>
                      </SwiperSlide>
                    ))
                  : ""}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands1;
