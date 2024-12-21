import img1 from "../../images/medicine.svg";
import img2 from "../../images/medical_care_movn.svg";
import img3 from "../../images/fitness_stats.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTestDesc: true,
  topLine: "The Body Refinery Grym",
  headLine: "Lorem ipsum dolor sit amet.",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quae saepe molestias cumque provident ut numquam dolores quam. Et?",
  buttonLabel: "Get Started",
  buttonLink: "about",
  imgStart: false,
  img: img1,
  alt: "tree",
  dark: true,
  primary: true,
  darkText: false,
};
export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTestDesc: false,
  topLine: "Unlimited Access",
  headLine: "Lorem ipsum dolor sit amet.",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quae saepe molestias cumque provident ut numquam dolores quam. Et?",
  buttonLabel: "Learn More",
  buttonLink: "/discover",
  imgStart: true,
  img: img2,
  alt: "tree",
  dark: false,
  primary: false,
  darkText: true,
};
export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTestDesc: false,
  topLine: "Lorem ipsum...",
  headLine: "Lorem ipsum dolor sit amet.",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quae saepe molestias cumque provident ut numquam dolores quam. Et?",
  buttonLabel: "Start Now",
  buttonLink: '/register',
  imgStart: false,
  img: img3,
  alt: "tree",
  dark: false,
  primary: false,
  darkText: true,
};
