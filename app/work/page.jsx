'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

import { projects } from '@/constant';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    const currentindex = swiper.activeIndex;
    setProject(projects[currentindex])
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 ,trasition: {delay:2.4,duration:0.4,ease:'easeIn'}}}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-8'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px] '>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='space-y-[30px] h-[50%]'>
              {/** project number */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/** project title */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent
                  transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              {/** project description */}
              <p className='text-white/60'>
                {project.description}
              </p>
              {/* project tech */}
              <ul className='flex gap-4 max-w-[400px]'>
                {project.stack.map((item, index) => {
                  return <li key={index} className='font-mono text-accent'>
                    {item.name}{index !== project.stack.length - 1 && ','}
                  </li>
                })}
              </ul>
              <div className='border border-white/20' />
              {/* buttons */}
              <div className='flex items-center gap-4'>

                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center
                        group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent className='bg-slate-50 rounded-sm px-2'>
                        <p className='text-slate-900'>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center
                        group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent className='bg-slate-50 rounded-sm px-2'>
                        <p className='text-slate-900'>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidespreview={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                  {/* overlay */}
                  <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                  {/* image */}
                  <div>
                    <Image src={project.image} fill className='object-cover' alt={project.title}/>
                  </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20%)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-slate-900 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Work