'use client'
import Link from 'next/link';
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import Image from 'next/image';


interface DataType {
  id: number;
  img: string;
  title: string;
  des: string;
}[]
const blog_data: DataType[] = [
  {
    id: 1,
    img: '/assets/img/monitor-arm-8.png',
    title: `Benefits of Ergonomic Monitor Arms`,
    des: `Discover how gas spring monitor arms can improve workplace ergonomics and boost productivity in modern offices.`,
  },
  {
    id: 2,
    img: '/assets/img/monitor-arm-10.png',
    title: `Cable Management Solutions Guide`,
    des: `Learn effective cable management strategies to maintain a clean, organized, and professional workspace environment.`,
  },
  {
    id: 3,
    img: '/assets/img/monitor-arm-12.png',
    title: `Choosing the Right Monitor Arm`,
    des: `A comprehensive guide to selecting the perfect monitor arm for your workspace requirements and setup configuration.`,
  },

]



const BlogHomeOne = ({ style_2, style_3 }: any) => {
  return (
    <>
      <section>
        <div className="container">
          {style_3 ?
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_heading_title">
                  Related News <br /> New Day New Inspiration
                </h2>
              </div>
            </div>
            :
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <div className="cs_section_subtitle anim_div_ShowZoom">
                  Resources & Insights
                </div>
                <h2 className="cs_section_title anim_heading_title">
                  Ergonomic Solutions <br />& Workspace Tips
                </h2>
              </div>
              <div className="cs_section_heading_right cs_btn_anim">
                <Link href="/blog" className="cs_btn cs_style_1">
                  <span>View All Resources</span>
                  <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                      fill="currentColor"></path>
                  </svg>
                </Link>
              </div>
            </div>
          }
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="row">
            {blog_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="cs_post cs_style_1">
                  <Link href="/blog-details" className="cs_post_thumb">
                    <Image src={item.img} alt="image-here" width={800} height={600} style={{width: '100%', height: 'auto', objectFit: 'cover'}} />
                  </Link>
                  <div className="cs_post_info">
                    <h2 className="cs_post_title">
                      <Link href="/blog-details">{item.title}</Link>
                    </h2>
                    <p className="cs_m0">
                      {item.des}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {style_2 ? null : style_3 ? null : <div className="cs_height_150 cs_height_lg_60"></div>}


    </>
  );
};

export default BlogHomeOne;