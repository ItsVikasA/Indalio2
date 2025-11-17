'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";

interface DataType {
  img: string;
  title: string;
  category: string;
}[]

const portfolio_slider: DataType[] = [
  {
    img: '/assets/img/monitor-arm-7.jpg',
    title: `Gas Spring Monitor Arm - Single`,
    category: `Ergonomic Solutions / Monitor Arms`,
  },
  {
    img: '/assets/img/monitor-arm-4.jpg',
    title: `Dual Monitor Arm System`,
    category: `Workspace Solutions / Multi-Monitor`,
  },
  {
    img: '/assets/img/monitor-arm-5.jpg',
    title: `Premium Adjustable Monitor Stand`,
    category: `Office Accessories / Ergonomic Design`,
  },
  {
    img: '/assets/img/monitor-arm-1.jpg',
    title: `Professional Monitor Mounting Solution`,
    category: `Cable Management / Monitor Arms`,
  },
]


const PortfolioHomeOne = () => {
  return (
    <>
      <div className="cs_horizontal_scroll_wrap">
        <div className="cs_height_145 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Our Products
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Premium Monitor Arms & Workspace Solutions
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
        <Swiper
          loop={true}
          speed={1000}
          slidesPerView="auto" 
          pagination={{
            el: ".cs_pagination",
            clickable: true,
          }}
          className="cs_horizontal_scrolls anim_div_ShowDowns">
          {portfolio_slider.map((item, i) =>
            <SwiperSlide key={i} className="swiper-slide">
              <div className="cs_horizontal_scroll">
                <Link href="/portfolio-details" className="cs_portfolio cs_style_1">
                  <div className="cs_portfolio_img">
                    <Image src={item.img} alt="Thumb" width={800} height={600} />
                  </div>
                  <div className="cs_portfolio_overlay"></div>
                  <div className="cs_portfolio_info">
                    <h2 className="cs_portfolio_title">
                      {item.title}
                    </h2>
                    <div className="cs_portfolio_subtitle">
                      {item.category}
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          )} 

        </Swiper>
      </div>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default PortfolioHomeOne;