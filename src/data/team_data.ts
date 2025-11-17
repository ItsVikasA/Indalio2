import team_avatar_1 from "@/assets/img/teamsimg1.jpg";
import team_avatar_2 from "@/assets/img/teamsimg2.jpg";
import team_avatar_3 from "@/assets/img/teamsimg3.jpg";
import team_avatar_4 from "@/assets/img/teamsimg4.jpg";
import team_avatar_5 from "@/assets/img/teamsimg5.jpg";
import team_avatar_6 from "@/assets/img/teamsimg6.jpg";
import team_avatar_7 from "@/assets/img/teamsimg7.jpg";
import team_avatar_8 from "@/assets/img/teamsimg8.jpg";

import { StaticImageData } from "next/image";


interface DataType {
	id: number;
	img: StaticImageData;
	avatar_name: string;
	designation: string;
}

const team_data: DataType[] = [
	{
		id: 1,
		img: team_avatar_1,
		avatar_name: "Rajesh Kumar",
		designation: "Manufacturing Lead",
	},
	{
		id: 2,
		img: team_avatar_2,
		avatar_name: "Priya Sharma",
		designation: "Product Designer",
	},
	{
		id: 3,
		img: team_avatar_3,
		avatar_name: "Amit Singh",
		designation: "Quality Control Manager",
	},
	{
		id: 4,
		img: team_avatar_4,
		avatar_name: "Vikram Patel",
		designation: "Engineering Head",
	},
	// team data
	{
		id: 5,
		img: team_avatar_5,
		avatar_name: "Suresh Reddy",
		designation: "Production Supervisor",
	},
	{
		id: 6,
		img: team_avatar_6,
		avatar_name: "Neha Gupta",
		designation: "Sales Manager",
	},
	{
		id: 7,
		img: team_avatar_7,
		avatar_name: "Arjun Mehta",
		designation: "Assembly Engineer",
	},
	{
		id: 8,
		img: team_avatar_8,
		avatar_name: "Rohit Verma",
		designation: "Technical Support Lead",
	},
];

export default team_data;
