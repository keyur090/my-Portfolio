import { DiReact } from "react-icons/di";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { chatapp, weather } from "./images";
import { gemini } from "./images";
import contact from "./images/contact.png";

export const menu = [
  { name: "About" },
  { name: "Education" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Certificates" },
  { name: "Contact" },
];

export const projects = [
  {
    id: 1,
    title: "Weather App",
    demoLink: "https://weather-app-black-one-48.vercel.app/",
    image: weather,
    category: "UI/UX",
    data: {
      description: `A weather app built with React uses the Fetch API to retrieve weather data. It features a responsive UI displaying current conditions, forecasts, and temperatures with intuitive search and location functionality. The design includes weather icons and user-friendly data presentation.`,
    },
  },
  {
    id: 2,
    title: "Contact Manager",
    demoLink: "https://github.com/keyur090/Contact-manager",
    image: contact,
    category: "Web",
    data: {
      description: `A contact manager app in React enables users to create, read, update, and delete contacts. It features a user-friendly interface to manage contact details, including names, emails, and phone numbers, with dynamic forms and real-time updates using CRUD operations.`,
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 3,
    title: "Chat App",
    demoLink: "https://keyur-git-main-chat-app.netlify.app/",
    image: chatapp,
    category: "Web",
    data: {
      description: `A real-time chat app built with React and Socket.IO uses Firebase for authentication. Users log in with Firebase Authentication, and chat messages are exchanged instantly via Socket.IO. The UI includes a chat interface, user lists, and real-time message updates.`,
    },

    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
    ],
  },
  {
    id: 4,
    title: "Google Gemini Clone",
    demoLink: "https://gemini-clone-keyur-vaghasiyas-projects.vercel.app/",
    image: gemini,
    category: "Web",
    data: {
      description: `A Gemini clone involves developing an AI language model replicating Google's Gemini, integrating multimodal learning, advanced NLP, and human-like interaction capabilities for various applications.`,
    },
  },
];

export const experience = [
  // {
  //   title: "UI/UX",
  //   data: [
  //     {
  //       skill: "Figma",
  //       level: "Experienced",
  //     },
  //     {
  //       skill: "Sketch",
  //       level: "Intermediate",
  //     },
  //     {
  //       skill: "XD",
  //       level: "Intermediate",
  //     },
  //   ],
  // },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "C++",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
      },
      {
        skill: "React",
        level: "Experienced",
      },
      {
        skill: "Typescript",
        level: "Intermediate",
      },
    ],
  },
  // {
  //   title: "Backend Development",
  //   data: [
  //     {
  //       skill: "Node JS",
  //       level: "Experienced",
  //     },
  //     {
  //       skill: "MangoDB",
  //       level: "Intermediate",
  //     },
  //     {
  //       skill: "PHP",
  //       level: "Experienced",
  //     },
  //     {
  //       skill: "Python",
  //       level: "Intermediate",
  //     },
  //     {
  //       skill: "MySQL",
  //       level: "Experienced",
  //     },
  //   ],
  // },
];

export const socialHandles = [
  {
    name: "Instagram",
    icon: <GrInstagram />,
    link: "https://www.instagram.com/keyur_vaghasiyaa",
  },
  {
    name: "Whatsapp",
    icon: <BsWhatsapp />,
    link: "https://wa.me/919313147262",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/keyur-vaghasiya-50338b215",
  },
  {
    name: "Gmail",
    icon: <MdOutlineEmail />,
    link: "mailto:vaghasiyakeyur825@gmail.com",
  },
];
