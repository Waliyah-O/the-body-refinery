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

// images
import yogaMat  from '../../images/yoga mat.webpb'
import gymShorts  from '../../images/gym shorts.webpb'

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

export const mockClasses = [
  {
    id: 1,
    name: "Yoga for Beginners",
    time: "8:00 AM - 9:00 AM",
    days: ["Monday", "Wednesday"],
    type: "Yoga",
    trainer: "Sarah Lee",
  },
  {
    id: 2,
    name: "Zumba Dance Party",
    time: "10:00 AM - 11:00 AM",
    days: ["Tuesday", "Thursday"],
    type: "Dance",
    trainer: "Maria Gonzalez",
  },
  {
    id: 3,
    name: "Strength Training 101",
    time: "6:00 PM - 7:00 PM",
    days: ["Monday", "Friday"],
    type: "Strength",
    trainer: "Michael Brown",
  },
  {
    id: 4,
    name: "Yoga Flow",
    time: "7:00 AM - 8:00 AM",
    days: ["Tuesday", "Thursday"],
    type: "Yoga",
    trainer: "Emily Davis",
  },
  {
    id: 5,
    name: "HIIT Blast",
    time: "9:30 AM - 10:30 AM",
    days: ["Wednesday", "Saturday"],
    type: "Strength Training",
    trainer: "John Smith",
  },
  {
    id: 6,
    name: "Pilates Core",
    time: "11:00 AM - 12:00 PM",
    days: ["Monday", "Thursday"],
    type: "Pilates",
    trainer: "Jane Doe",
  },
  {
    id: 7,
    name: "Power Lifting",
    time: "3:00 PM - 4:00 PM",
    days: ["Wednesday", "Friday"],
    type: "Strength Training",
    trainer: "Chris Johnson",
  },
  {
    id: 8,
    name: "Mindful Meditation",
    time: "5:00 PM - 6:00 PM",
    days: ["Monday", "Friday"],
    type: "Yoga",
    trainer: "Laura Adams",
  },
  {
    id: 9,
    name: "Cardio Burn",
    time: "6:30 PM - 7:30 PM",
    days: ["Tuesday", "Thursday"],
    type: "Cardio",
    trainer: "Chris Johnson",
  },
  {
    id: 10,
    name: "Barre Sculpt",
    time: "8:00 PM - 9:00 PM",
    days: ["Monday", "Wednesday"],
    type: "Pilates",
    trainer: "Laura Adams",
  },
  {
    id: 11,
    name: "Spin Class",
    time: "6:00 AM - 7:00 AM",
    days: ["Tuesday", "Saturday"],
    type: "Cardio",
    trainer: "Tom Anderson",
  },
  {
    id: 12,
    name: "Dance Fusion",
    time: "2:00 PM - 3:00 PM",
    days: ["Thursday", "Saturday"],
    type: "Dance",
    trainer: "Maria Gonzalez",
  },
];


export const mockTrainers = [
  {
    id: 1,
    name: "Alex Johnson",
    image: "https://via.placeholder.com/300",
    bio: "Certified strength trainer with 10 years of experience.",
    specialties: ["Strength Training", "Bodybuilding"],
    certifications: ["CPT", "Nutrition Specialist"],
  },
  {
    id: 2,
    name: "Emily Stone",
    image: "https://via.placeholder.com/300",
    bio: "Expert yoga and pilates instructor.",
    specialties: ["Yoga", "Pilates"],
    certifications: ["RYT 200", "ACE"],
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    image: "https://via.placeholder.com/300",
    bio: "Energetic dance and Zumba instructor with a passion for movement.",
    specialties: ["Zumba", "Dance Fitness"],
    certifications: ["Zumba Certified", "Group Fitness Trainer"],
  },
  {
    id: 4,
    name: "John Smith",
    image: "https://via.placeholder.com/300",
    bio: "High-intensity interval training expert and motivational coach.",
    specialties: ["HIIT", "Functional Training"],
    certifications: ["NASM", "Certified Strength and Conditioning Specialist"],
  },
  {
    id: 5,
    name: "Jane Doe",
    image: "https://via.placeholder.com/300",
    bio: "Dedicated pilates coach helping clients achieve core strength and flexibility.",
    specialties: ["Pilates", "Core Stability"],
    certifications: ["STOTT Pilates", "Balanced Body"],
  },
  {
    id: 6,
    name: "Michael Brown",
    image: "https://via.placeholder.com/300",
    bio: "Powerlifting and strength coach with a focus on form and progress.",
    specialties: ["Powerlifting", "Strength Training"],
    certifications: ["Certified Powerlifting Coach", "NSCA"],
  },
  {
    id: 7,
    name: "Chris Johnson",
    image: "https://via.placeholder.com/300",
    bio: "Cardio and endurance specialist with a dynamic approach to fitness.",
    specialties: ["Cardio", "Endurance Training"],
    certifications: ["ACE", "CPR Certified"],
  },
  {
    id: 8,
    name: "Laura Adams",
    image: "https://via.placeholder.com/300",
    bio: "Barre instructor with a focus on toning and mindful movements.",
    specialties: ["Barre", "Yoga"],
    certifications: ["Barre Certified", "RYT 200"],
  },
  {
    id: 9,
    name: "Tom Anderson",
    image: "https://via.placeholder.com/300",
    bio: "Spin instructor passionate about cycling and cardio workouts.",
    specialties: ["Spinning", "Cardio"],
    certifications: ["Spinning Certified", "Group Fitness Instructor"],
  },
  {
    id: 10,
    name: "Sarah Lee",
    image: "https://via.placeholder.com/300",
    bio: "Yoga instructor dedicated to creating a relaxing and transformative experience.",
    specialties: ["Yoga", "Meditation"],
    certifications: ["RYT 500", "Meditation Guide"],
  },
];



export const mockProducts = [
  {
    id: 1,
    name: "Premium Yoga Mat",
    image: "https://via.placeholder.com/400x300",
    price: 29.99,
    category: "Gear",
    description: "A non-slip yoga mat designed for comfort and stability during your yoga sessions.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Body Refinery Gym Shorts",
    image: "https://via.placeholder.com/400x300",
    price: 24.99,
    category: "Clothing",
    description: "Comfortable, breathable gym shorts for maximum flexibility and performance.",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Protein Shake Blender Bottle",
    image: "https://via.placeholder.com/400x300",
    price: 14.99,
    category: "Accessories",
    description: "A durable shaker bottle for mixing your protein shakes or pre-workout drinks.",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Resistance Bands Set",
    image: "https://via.placeholder.com/400x300",
    price: 19.99,
    category: "Gear",
    description: "Set of high-quality resistance bands for strength training and flexibility exercises.",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Body Refinery Sweatshirt",
    image: "https://via.placeholder.com/400x300",
    price: 39.99,
    category: "Clothing",
    description: "Soft, cozy sweatshirt with The Body Refinery logo, perfect for warm-ups or lounging.",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Pre-Workout Supplement",
    image: "https://via.placeholder.com/400x300",
    price: 29.99,
    category: "Supplements",
    description: "Boost your energy and endurance with our pre-workout supplement.",
    rating: 4.2,
  },
  {
    id: 7,
    name: "Yoga Block Set",
    image: "https://via.placeholder.com/400x300",
    price: 12.99,
    category: "Gear",
    description: "Set of two high-density foam yoga blocks to help with balance and alignment.",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Body Refinery Water Bottle",
    image: "https://via.placeholder.com/400x300",
    price: 15.99,
    category: "Accessories",
    description: "A durable, BPA-free water bottle to keep you hydrated during your workouts.",
    rating: 4.4,
  },
  {
    id: 9,
    name: "Gym Gloves",
    image: "https://via.placeholder.com/400x300",
    price: 19.99,
    category: "Accessories",
    description: "Protect your hands with high-quality gym gloves designed for heavy lifting.",
    rating: 4.6,
  },
  {
    id: 10,
    name: "Yoga Mat Cleaner Spray",
    image: "https://via.placeholder.com/400x300",
    price: 8.99,
    category: "Accessories",
    description: "A gentle spray to clean and maintain your yoga mat’s freshness and durability.",
    rating: 4.1,
  },
];
