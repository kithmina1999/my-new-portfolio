
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { MdOutlineWeb } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

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
        "path": "https://github.com/kithmina1999"
    },
    {
        "icon": <FaLinkedinIn />,
        "path": "https://www.linkedin.com/in/kithmina-gunasinghe-6231742ba/"
    },
    {
        "icon": <FaYoutube />,
        "path": "#"
    },
    {
        "icon": <FaXTwitter />,
        "path": "https://x.com/KithGunasinghe"
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
    title:'Static Blog',
    description:"The Static Blog with Next.js project is a static blogging platform utilizing Next.js for server-side rendering and static site generation. It features Markdown support for blog posts, file-based routing, and built-in SEO optimizations. The project allows users to write blog posts in Markdown format, making it easy to manage content with metadata. It includes a clear structure with directories for components, styles, and public assets. The project is deployed in vercel.",
    stack: [
      { name: "JavaScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Git" },
      { name: "velite" }
    ],
    image:'/assets/work/work-1.png',
    live:'https://staticblog-nextjs.vercel.app',
    github:'https://github.com/kithmina1999/staticblog-nextjs.git',
  },
  {
    num: '02',
    category:'frontend',
    title:'Saas landing page',
    description:"The Light SaaS Landing Page project is a responsive landing page template created using Next.js, TypeScript, and Tailwind CSS. It is designed to showcase a software-as-a-service (SaaS) product, featuring sections for features, testimonials, and call-to-action elements. The project emphasizes clean design and user experience, making it suitable for developers looking to create a professional online presence for their SaaS offerings.",
    stack: [
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "Shadcn" },
      { name: "Tailwind CSS" },
      { name: "Git" },
      { name: "Figma" },
      { name: "Framer Motion" },
      
    ],
    image:'/assets/work/work-2.png',
    live:'https://light-saas-landing-page-three.vercel.app',
    github:'https://github.com/kithmina1999/light-saas-landing-page',
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