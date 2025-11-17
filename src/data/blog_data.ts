
import blog_img_1 from "@/assets/img/monitor-arm-11.png";
import blog_img_2 from "@/assets/img/monitor-arm-13.png";
import blog_img_3 from "@/assets/img/monitor-arm-15.png"; 
import { StaticImageData } from "next/image";


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
    des: `Discover how gas spring monitor arms improve posture, reduce neck strain, and boost workplace productivity.`,
  },
  {
    id: 2,
    img: blog_img_2,
    title: `Complete Guide to Monitor Mounting Solutions`,
    des: `From desk clamps to wall mounts - learn which monitor arm type suits your workspace best.`,
  },
  {
    id: 3,
    img: blog_img_3,
    title: `Cable Management Best Practices`,
    des: `Professional cable organization techniques using spinal organizers for clean, tangle-free workspaces.`,
  },
  {
    id: 4,
    img: blog_img_1,
    title: `Dual Monitor Setup: Productivity Guide`,
    des: `Master dual-screen workflows with proper monitor arm configuration for professionals.`,
  },
  {
    id: 5,
    img: blog_img_2,
    title: `Gas Spring Technology Explained`,
    des: `Explore how premium gas springs enable smooth, effortless height adjustment in monitor arms.`,
  },
  {
    id: 6,
    img: blog_img_3,
    title: `Indalio Manufacturing Excellence`,
    des: `Behind the scenes: How Indalio engineers premium workspace accessories with precision manufacturing.`,
  },
]

export default blog_data