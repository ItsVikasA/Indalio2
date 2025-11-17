'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}[]

const about_slider: DataType[] = [
  {
    img: "/assets/img/monitor-arm-15.png",
    sub_title: "About Indalio",
    title: `Engineered in Ludhiana for Modern Workspaces`,
    des: `Indalio specializes in premium workspace accessories engineered in Ludhiana. We design and manufacture high-quality gas spring monitor arms, wall-mounted solutions, and cable management systems. Trusted by corporate offices, IT companies, and traders nationwide for ergonomic excellence.`,
  },
  {
    img: "/assets/img/monitor-arm-13.png",
    sub_title: "Our Mission",
    title: `Transforming Workspaces with Ergonomic Innovation`,
    des: `Our mission is to enhance workspace productivity and comfort through innovative ergonomic solutions. Every product is designed with precision engineering to provide smooth adjustability, durability, and modern aesthetics for professional environments.`,
  },
  {
    img: "/assets/img/monitor-arm-19.png",
    sub_title: "Quality Commitment",
    title: `Premium Engineering for Professional Excellence`,
    des: `From design to manufacturing, we maintain the highest standards of quality. Our products undergo rigorous testing to ensure reliability, smooth operation, and long-lasting performance in demanding professional environments.`,
  },
]

const AboutHomeOne = () => {
  return (
    <>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        pagination={{
          el: ".cs_pagination",
          clickable: true,
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> 
             ${' / '}
             <span class="${totalClass}"></span>`;
          },

        }}
        className="cs_slider cs_slider_2">
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_about cs_style_1">
              <div className="cs_about_bg cs_bg" style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="container">
                <div className="cs_about_text">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <div className="cs_section_subtitle">{item.sub_title}</div>
                      <h2 className="cs_section_title">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <div className="cs_height_40 cs_height_lg_30"></div>
                  <p className="cs_m0">
                    {item.des}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">

              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_prev">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_next">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutHomeOne;