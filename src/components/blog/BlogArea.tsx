

import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import blog_img_1 from "@/assets/img/monitor-arm-11.png";
import blog_img_2 from "@/assets/img/monitor-arm-12.png";
import blog_img_3 from "@/assets/img/monitor-arm-13.png";
import blog_img_4 from "@/assets/img/monitor-arm-1.jpg";
import blog_img_5 from "@/assets/img/monitor-arm-15.png";
import blog_img_6 from "@/assets/img/monitor-arm-16.png";
import blog_img_7 from "@/assets/img/monitor-arm-17.png";
import blog_img_8 from "@/assets/img/monitor-arm-18.png";
import blog_img_9 from "@/assets/img/monitor-arm-19.png";


interface DataType {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
}

const blog_data: DataType[] = [
  {
    id: 1,
    img: blog_img_1,
    title: `Ergonomic Benefits of Monitor Arms`,
    des: `Discover how gas spring monitor arms improve posture, reduce neck strain, and boost workplace productivity with adjustable positioning.`,
  },
  {
    id: 2,
    img: blog_img_2,
    title: `Complete Guide to Monitor Mounting Solutions`,
    des: `From desk clamps to wall mounts - learn which monitor arm type suits your workspace and maximizes desk space efficiency.`,
  },
  {
    id: 3,
    img: blog_img_3,
    title: `Cable Management Best Practices`,
    des: `Professional cable organization techniques using spinal organizers to maintain clean, tangle-free workspaces that look premium.`,
  },
  {
    id: 4,
    img: blog_img_4,
    title: `Dual Monitor Setup: Productivity Guide`,
    des: `Master the art of dual-screen workflows with proper monitor arm configuration for developers, traders, and creative professionals.`,
  },
  {
    id: 5,
    img: blog_img_5,
    title: `VESA Standards Explained: 75 vs 100`,
    des: `Understanding VESA mounting patterns and compatibility ensures you choose the right monitor arm for your display setup.`,
  },
  {
    id: 6,
    img: blog_img_6,
    title: `Gas Spring Technology in Monitor Arms`,
    des: `Explore how premium gas springs enable smooth, effortless height adjustment and superior weight capacity in modern monitor arms.`,
  },
  {
    id: 7,
    img: blog_img_7,
    title: `Office Ergonomics: Setup Essentials`,
    des: `Create the perfect ergonomic workstation with monitor arms, proper desk height, and accessories that reduce workplace injuries.`,
  },
  {
    id: 8,
    img: blog_img_8,
    title: `Wall-Mounted vs Desk-Mounted Arms`,
    des: `Compare installation methods, space efficiency, and use cases for wall-mounted and desk-mounted monitor arm solutions.`,
  },
  {
    id: 9,
    img: blog_img_9,
    title: `Indalio Manufacturing Excellence`,
    des: `Behind the scenes: How Indalio engineers premium workspace accessories in Ludhiana with precision manufacturing and quality control.`,
  },
]


const BlogArea = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_heading_title">
                  Indalio Insights <br /> Workspace Innovation Hub
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="row">
            {blog_data.map((item, i) => (
              <div key={i} className={`col-md-4 ${item.id === 2 ? 'mt-0 mt-md-5' : ''} ${item.id === 5 ? 'mt-0 mt-md-5' : ''} ${item.id === 8 ? 'mt-0 mt-md-5' : ''}`}>
                <div className="anim_div_ShowDowns">
                  <Link href="/blog-details" className="cs_blog cs_style_1">
                    <div>
                      <Image src={item.img} alt="post_1" />
                    </div>
                    <div className="cs_blog_info">
                      <h6 className="cs_blog_title">
                        {item.title}
                      </h6>
                      <p className="cs_blog_subtitle">
                        {item.des}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}

          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;