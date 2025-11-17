
import React from 'react';

interface DataType {
  id: string;
  title: string;
  description: string;
}
const service_data: DataType[] = [
  {
    id: 'one',
    title: "Design Engineering",
    description: `Ergonomic design focused on user comfort and workspace optimization with precision CAD modeling`,
  },
  {
    id: 'Two',
    title: "Material Selection",
    description: `High-grade aluminum and steel components ensuring durability and long-lasting performance`,
  },
  {
    id: 'Three',
    title: "Manufacturing",
    description: `State-of-the-art production facility in Ludhiana with strict quality control measures`,
  },
  {
    id: 'Four',
    title: "Quality Testing",
    description: `Rigorous load testing and movement validation to ensure product reliability and safety`,
  },
]


const ServiceAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Specialization & Manufacturing Process
            </h4>
            <p className="cs_mp0 anim_text">
              Indalio specializes in manufacturing premium ergonomic monitor arms and cable management solutions.
              From initial design and material selection to precision manufacturing and quality testing, we ensure
              every product meets international standards for workspace ergonomics.
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {service_data.map((item, i) => (
                  <div key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                    </div>

                    <h6 className="cs_work_title">{item.title}</h6>
                    <p className="cs_work_subtitle">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaDetails;