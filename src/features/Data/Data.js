// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilGlassTea,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { FaShoePrints, FaBolt } from "react-icons/fa";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Home",
  },
  {
    icon: UilClipboardAlt,
    heading: "Tasks",
  },
  {
    icon: UilPackage,
    heading: "Appointments",
  },
  {
    icon: UilChart,
    heading: "Weight",
  },
  {
    icon: UilUsersAlt,
    heading: "Lorem",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Steps",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "5,970",
    png: FaShoePrints,
    series: [
      {
        name: "Steps",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Calories",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "1,427",
    png: FaBolt,
    series: [
      {
        name: "Calories",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Water",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "2.70L",
    png: UilGlassTea,
    series: [
      {
        name: "Water",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: UilUsersAlt,
    name: "You Missed",
    noti: "your last doctor's appointment!",
    time: "25 seconds ago",
  },
  {
    img: UilUsersAlt,
    name: "Drink Water!",
    noti: "",
    time: "30 minutes ago",
  },
  {
    img: UilUsersAlt,
    name: "You've reached",
    noti: "Your daily step count!",
    time: "2 hours ago",
  },
];
