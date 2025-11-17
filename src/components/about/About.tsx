 

import React from 'react';
import agency_story_1 from "@/assets/img/monitor-arm-15.png"
import agency_story_2 from "@/assets/img/monitor-arm-13.png"
import agency_story_4 from "@/assets/img/monitor-arm-19.png"
import agency_story_3 from "@/assets/img/monitor-arm-1.jpg"
import Image from 'next/image';


interface DataType {
  subtitle: string;
  title: string;
  des: string;
  des2?: string;
}
const about_content: DataType = {
  subtitle: `Our Story`,
  title: `Building India's Most Trusted Brand for Workspace Accessories`,
  des: `INDALIO was created with a simple purpose — to build workspace products that are strong, functional, and designed for everyday use. The journey began in Ludhiana, Punjab, where our parent company had been supplying precision-fabricated parts to local industries. Recognizing the need for durable, ergonomic, and affordable desk accessories made in India, we created a dedicated brand focused entirely on modern workstation solutions.`,
  des2: `Starting with small batches of monitor arms and cable organizers, INDALIO quickly gained trust among e-commerce sellers, office furniture manufacturers, and corporate buyers. Today, we stand for strong build quality, smooth ergonomics, modern engineering, and long-lasting performance. Our mission remains unchanged: to design workspace accessories that combine strength, comfort, and innovation — built proudly in India.`,
}
const { subtitle, title, des } = about_content

const About = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="cs_primary_bg">
          <div className="container">
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_section_heading_hr cs_style_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">
                    {subtitle}
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text">
                      <h3 className="cs_section_title_3 anim_div_ShowLeftSide">
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="anim_div_ShowRightSide">
                    <p className="cs_ternary_color">
                      {des}
                    </p>
                    <p className="cs_ternary_color">
                      {about_content.des2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_385 cs_height_lg_120"></div>
          </div>
        </div>
        <div className="container">
          <div className="cs_agency agency_about_images_posation">
            <div className="cs_img_section_1">
              <Image src={agency_story_1} alt="image-here" className="w-100" />
            </div>
            <div className="cs_img_section_2">
              <Image src={agency_story_2} alt="image-here" className="w-100" />
            </div>
            <div className="cs_img_section_3">
              <div className="text-end">
                <Image src={agency_story_4} alt="image-here" />
                <Image src={agency_story_3} className="w-100" alt="image-here" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;