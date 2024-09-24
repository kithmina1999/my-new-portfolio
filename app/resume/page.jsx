'use client';

import { FaHtml5, FaCss3, FaJs, FaJava, FaPython, FaReact, FaNodeJs, FaFigma, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress, SiPhp, SiMysql, SiMongodb, SiGit } from 'react-icons/si';
import React from 'react'
import Image from 'next/image';

const about = {
  title: 'About me',
  description: "Enthusiastic and self-motivated aspiring web developer with a strong foundation in front-end technologies and a passion for creating clean, efficient code. Seeking an opportunity as an Associate Web Developer to apply skills and continue learning in a professional environment.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kithmina Gunasinghe"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 717 675 278"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years"
    },
    {
      fieldName: "Whatsapp",
      fieldValue: "/KithminaG"
    },
    {
      fieldName: "Email",
      fieldValue: "rkksgunasinghe@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala"
    },
  ]
}
const experience = {
  title: "My experience",
  description: "In excepteur eiusmod laborum aliquip nisi ea qui in ex id ullamco reprehenderit dolore. Laboris aliquip occaecat reprehenderit consectetur in culpa labore sunt incididunt. Commodo elit ullamco in id consectetur deserunt minim dolore pariatur labore velit. Do reprehenderit nostrud anim sunt consequat cupidatat nostrud minim duis non eu voluptate."
}

const education = {
  icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD80lEQVR4nO3aXYhVVRTA8WOEaVQkZEFCRB9YUJZlJhhk0IeG9SZEvUQwalT00EP01lP05WClSUSUvRS9Bj00mT2MDeL0oVSSZSlJRDYVYaZl/mIzWxguc+6ce84+955L9w8DA3ez18c+e++111pZNmDAgAEDBtQKrsB6bME27Mev+Dv+hf+/jb+9jHVYmPUzuBbDOKQ8P2ADrsn6AczCXRiTno+xOsjImgiWYpf62YklWVPAXLyEf3WPIOsFzOm18QuxW+/4DJf3yvgb8YveE26Qm7pt/Coc1Rz+xMpuGb8MRzSPo7V/CSb3/G+ay0RtZwLm4FPNJxzKc+twwCb9w8bUxi/BCf1DiBOWpgxvd+k/xpKEzbhb/7IqhQPGEiv1M97GEC7BhfEB9STexY8JZe2oavziREHKCB7H9TitgNx54U7Ho3gTX1aQv6iKA4ZLCAyH5Tiexq04o7QCaZzyXBWhhwoIOInPY+LiTpyVwuCC+hXZPgerpLHyCILewVosyBoCVuToe1mZydbnms+KrIFge46+a8tMtqWNA7ZnDSKeDeGgzWNTmUk/1J7xuAXOrMWqNIafYqTM5N8rfq8/hYtqsXJ63W7GR4qzv4yQCZ3H3yPxVJ7V4xVv5XAZYccLTJy3Cl/hIZzdoxVv5VgtDshmXpU/8Aqu7vKKJ3HARBEHTBk/E6NYg9MrGH4yBjz3dWMLfFfSAWtinSBka6fjIJ7A/A4+9fA1voYr47j7O3RAqUNwW0kHPDIlhXYP3s8pmhzD1lhRyjP8dzwTQt4WWa936ICR1IFQO96bZq4F8TUYqsJF+CnG9/MqXtGVAqF1yqenp01KhqcwbsNb+Cvn9ngAs9vodXEJnYbKpsDbEfblg7gF58WAqHAmJj5vH46Z5tGYeSqSK+h0/5d7DAVifT6P3Vn+Q+TFrCZK7P8DVYRtaDPx1paxm6f8ti+FsYn2/7NVuzzyeKxlbIj8prIshcEtMpbrZkosEDszpuP2rH0yYg/OyRKBc/FFh8aPphC8OmfyC1rGzZ9mTMjbXZVAh/Al7tU5K1MVRnYqzz94tcyniBvwRsnuk2op8ZpKY3viwRrC5UXxKpwdMsc4H9fh3hhKf11BTtB1cZYSkz05/cJwUuMDcZU+8X8tjwdC80GJTFE3CT1Ll2ZdaI46onmEN8jyWo0/RbheYs2vKQRd7si6icl3/OFeWx4TL91Z+ZwzoZd9Q+O17/mZiJmfjV1uoTkRK9dJKs9JiEFMHV3irexIHuSkJJbIg5KpGe1aN2gKYqj7fMwCl+VAaHAoW1doDCYPy6GYNPkA38SA6nj8C//vi7WAzXFsuTTWgAEDBgwYkBXlPzaMjGdznQc9AAAAAElFTkSuQmCC",
  title: "My education",
  description: "Laboris id veniam consequat id consectetur ullamco in dolore cillum nisi. Esse labore ad laborum proident mollit duis ullamco officia. Ea labore enim occaecat ea in commodo et pariatur excepteur amet ullamco dolore ad.",
  items: [
    {
      institute: "Java Institute",
      degree: "Bachelor of science in Software Engineering",
      duration: "2023-2027"
    },
    {
      institute: "University of Plymouth",
      degree: "Higher National Diploma in  science",
      duration: "2018-2021"
    }
  ]
}

const skills = {
  title: "My skills",
  description: "Magna ad ex occaecat enim nostrud.",
  skillList:
  {
    frontend: [
      {
        "label": "HTML",
        "icon": <FaHtml5 />
      },
      {
        "label": "CSS",
        "icon": <FaCss3 />
      },
      {
        "label": "JavaScript",
        "icon": <FaJs />
      },
      {
        "label": "React",
        "icon": <FaReact />
      },
      {
        "label": "Tailwind CSS",
        "icon": <SiTailwindcss />
      },
      {
        "label": "Bootstrap",
        "icon": <FaBootstrap />
      }
    ],
    backend: [
      {
        "label": "Node.js",
        "icon": <FaNodeJs />
      },
      {
        "label": "Express.js",
        "icon": <SiExpress />
      },
      {
        "label": "PHP",
        "icon": <SiPhp />
      }
    ],
    dbms: [
      {
        "label": "MySQL",
        "icon": <SiMysql />
      },
      {
        "label": "MongoDB",
        "icon": <SiMongodb />
      },
    ],
    others: [
      {
        "label": "Git",
        "icon": <SiGit />
      },
      {
        "label": "Figma",
        "icon": <FaFigma />
      }
    ]
  }

}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.8, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='mx-auto w-[80%] flex items-center'>
        <Tabs
          defaultValue='education'
          className='flex flex-col xl:flex-row gap-[60px] w-full  items-start'
        >
          <TabsList className="flex flex-col w-full max-w-[380px]  mx-auto xl:mx-0 gap-8">
            <TabsTrigger value="experience" disabled>Experices</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full '>
            <TabsContent value="experience" className="w-full">
              <div >
                <h3 className='text-4xl font-bold text-center'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto text-center'>{experience.description}</p>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]' >
                    {education.items.map((item, index) => {
                      return <li
                        key={index}
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
                          flex flex-col justify-center items-center lg:items-start gap-1'
                      >
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w[260px] min-h-[60px] text-center lg:text-left'>
                          {item.degree}
                        </h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent' />
                          <p className='text-white/60'>{item.institute}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ScrollArea className='h-[400px] '>
                  <ul className='grid grid-cols-1 gap-4 xl:gap-[30px]'>
                    {Object.entries(skills.skillList).map(([category, skills], index) =>

                    (<li key={index}>
                      <h3 className="text-2xl font-bold capitalize pb-8">{category}</h3>
                      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[30px]'>

                        {skills.map((skill, index) => {
                          return <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                  <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className='capitalize'>{skill.label}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        })}

                      </ul>

                    </li>)
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-32 max-w-[820px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-xl'>{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume