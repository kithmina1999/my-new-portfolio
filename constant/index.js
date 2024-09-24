
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { MdOutlineWeb } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";

export const NavLinks =[
    {
      "path": "/",
      "label": "Home"
    },
    {
      "path": "/services",
      "label": "Services"
    },
    {
      "path": "/resume",
      "label": "Resume"
    },
    {
      "path": "/work",
      "label": "Work"
    },
    {
      "path": "/contact",
      "label": "Contact"
    }
  ]

  export const Socialslink = [
    {
        "icon": <FaGithub />,
        "path": "https://github.com/yourusername"
    },
    {
        "icon": <FaLinkedinIn />,
        "path": "https://linkedin.com/in/yourusername"
    },
    {
        "icon": <FaYoutube />,
        "path": "https://youtube.com/c/yourchannel"
    },
    {
        "icon": <FaTwitter />,
        "path": "https://twitter.com/yourusername"
    }
]

export const Colors = ['#7df9ff','#77feeb','#88ffcf','#ff9c51','#a7ffae','#7df9ff']


export const ServicesList = [
  {
    "id": 1,
    "name": "Web Development",
    "description": "Building responsive and modern websites using the latest technologies.",
    "icon": <SiNextdotjs />,
  },
  {
    "id": 2,
    "name": "UI/UX Design",
    "description": "Designing intuitive and visually appealing user interfaces with a focus on user experience.",
    "icon": <MdOutlineWeb />,
  },
  {
    "id": 3,
    "name": "Backend Development",
    "description": "Creating robust and scalable backend systems to support web and mobile applications.",
    "icon": <FaServer />,
  },
  {
    "id": 4,
    "name": "SEO Optimization",
    "description": "Improving website visibility and ranking on search engines through effective SEO strategies.",
    "icon": <TbSeo />,
  }
]


export const projects =[
  {
    num: '01',
    category:'frontend',
    title:'Prject 01',
    description:"This is a responsive web developer portfolio designed to showcase my skills, experience, and education as an aspiring full-stack developer. The portfolio provides a comprehensive overview of my journey, from front-end to back-end development, highlighting my abilities through interactive elements, sleek design, and user-friendly navigation.",
    stack: [
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Git" },
      { name: "Figma" },
      { name: "Framer Motion" },
      { name: "Next.js" }
    ],
    image:'/assets/work/work-1.png',
    live:'/',
    github:'/',
  },
  {
    num: '02',
    category:'frontend',
    title:'Prject 01',
    description:"This is a responsive web developer portfolio designed to showcase my skills, experience, and education as an aspiring full-stack developer. The portfolio provides a comprehensive overview of my journey, from front-end to back-end development, highlighting my abilities through interactive elements, sleek design, and user-friendly navigation.",
    stack: [
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Git" },
      { name: "Figma" },
      { name: "Framer Motion" },
      { name: "Next.js" }
    ],
    image:'/assets/work/work-2.png',
    live:'/',
    github:'/',
  },
  {
    num: '03',
    category:'frontend',
    title:'Prject 01',
    description:"This is a responsive web developer portfolio designed to showcase my skills, experience, and education as an aspiring full-stack developer. The portfolio provides a comprehensive overview of my journey, from front-end to back-end development, highlighting my abilities through interactive elements, sleek design, and user-friendly navigation.",
    stack: [
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Git" },
      { name: "Figma" },
      { name: "Framer Motion" },
      { name: "Next.js" }
    ],
    image:'/assets/work/work-3.png',
    live:'/',
    github:'/',
  }
]

export const ContactInfo = [
  {
    icon:<FaPhoneAlt />,
    title:'Phone',
    description: '(+94) 717 576 278',
  },
  {
    icon:<FaEnvelope />,
    title:'Email',
    description: 'rkksgunasinghe@gmail.com',
  },
  {
    icon:<FaMapMarkerAlt />,
    title:'Address',
    description: '80/3, NaranUyana, Wellandura, Kahawatte, Sri Lanka',
  },
]