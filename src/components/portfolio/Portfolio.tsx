'use client'

import React, { useState } from 'react';
// import portfolio_data from '@/data/portfolio_data';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import portfolio_img_6 from "@/assets/img/monitor-arm-10.png";
import portfolio_img_7 from "@/assets/img/monitor-arm-12.png";
import portfolio_img_8 from "@/assets/img/monitor-arm-13.png";
import portfolio_img_9 from "@/assets/img/monitor-arm-15.png";
import portfolio_img_10 from "@/assets/img/monitor-arm-16.png";
import portfolio_img_11 from "@/assets/img/monitor-arm-17.png";
import portfolio_img_12 from "@/assets/img/monitor-arm-18.png";
import portfolio_img_13 from "@/assets/img/monitor-arm-19.png"; 


interface DataType {
  id: number;
  category: string;
  img: StaticImageData;
  title: string;
  des: string;
}

const portfolio_data: DataType[] = [
  // portfolio pages
	{
		id: 1,
		category: 'Single Arm',
		img: portfolio_img_6,
		title: "Gas Spring Single Monitor Arm",
		des: "Ergonomic Solutions / Office Setup",
	},
	{
		id: 2,
		category: 'Dual Arm',
		img: portfolio_img_7,
		title: "Dual Monitor Workstation",
		des: "Professional Setup / Multi-Screen",
	},
	{
		id: 3,
		category: 'Wall Mount',
		img: portfolio_img_8,
		title: "Wall-Mounted Monitor Solution",
		des: "Space Saving / CCTV Setup",
	},
	{
		id: 4,
		category: 'Single Arm',
		img: portfolio_img_9,
		title: "Premium Gas Spring Arm",
		des: "Corporate Office / Ergonomic",
	},
	{
		id: 5,
		category: 'Dual Arm',
		img: portfolio_img_10,
		title: "Trading Desk Setup",
		des: "Multi-Monitor / Professional",
	},
	{
		id: 6,
		category: 'Wall Mount',
		img: portfolio_img_11,
		title: "Wall-Mounted Display Arm",
		des: "Retail / Compact Workspace",
	},
	{
		id: 7,
		category: 'Single Arm',
		img: portfolio_img_12,
		title: "Adjustable Monitor Arm",
		des: "Home Office / WFH Setup",
	},
	{
		id: 8,
		category: 'Cable Management',
		img: portfolio_img_13,
		title: "Spinal Cable Organizer",
		des: "Cable Management / Clean Desk",
	},
]

// data
const categories = ["All", ...new Set(portfolio_data.map((item) => item.category))];

const Portfolio = () => {

  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };


  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                Indalio Product Portfolio - Premium Workspace Solutions
              </h2>
            </div>
          </div>
        </div>
      </section>


      <div className="cs_height_50 cs_height_lg_25"></div>
      <section className="cs_ui_design">
        <div className="container">
          <div>
            <div className="row">
              <div className="cs_isotop_item_menu col-md-12">
                <ul className="anim_div_ShowZoom style_active">
                  {categories.map((cate, i) => (
                    <React.Fragment key={i}>
                      <li
                        onClick={() => filterItems(cate)}
                        className={`${cate === activeCategory ? "active" : ""}`}
                      >
                        {cate}
                      </li>  {' '}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs_isotop_items_details row">
              {items.map((item, i) => (
                <div key={i} className="col-md-4 cs_item cs_ui_design cs_development">
                  <Link href="/portfolio-details" className="cs_portfolio cs_style_1">
                    <div className="cs_portfolio_img">
                      <Image src={item.img} className="img-fluid" alt="Thumb" />
                    </div>
                    <div className="cs_portfolio_overlay"></div>
                    <div className="cs_portfolio_info">
                      <h2 className="cs_portfolio_title">
                        {item.title}
                      </h2>
                      <div className="cs_portfolio_subtitle">
                        {item.des}
                      </div>
                    </div>
                  </Link>
                </div>
              ))} 

            </div>
          </div>
          <div className="cs_height_70 cs_height_lg_30"></div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;