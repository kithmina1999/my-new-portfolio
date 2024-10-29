
'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

import { projects } from '@/constant';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

import { useFloating, useHover, useInteractions } from '@floating-ui/react';

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const[isOpen,setIsOpen] = useState(false)
  const handleSlideChange = (swiper) => {
    const currentindex = swiper.activeIndex;
    setProject(projects[currentindex]);
  };

  const handleImage = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-8'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='space-y-[30px] h-[50%]'>
              {/* Project Number */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* Project Title */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent
                  transition-all duration-500 capitalize'>
                {project.title} project
              </h2>
              {/* Project Description */}
              <p className='text-white/60'>
                {project.description}
              </p>
              {/* Project Tech Stack */}
              <ul className='flex gap-4 max-w-[400px]'>
                {project.stack.map((item, index) => {
                  return <li key={index} className='font-mono text-accent'>
                    {item.name}{index !== project.stack.length - 1 && ','}
                  </li>;
                })}
              </ul>
              <div className='border border-white/20' />
              {/* Buttons */}
              <div className='flex items-center gap-4'>
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent className='bg-slate-50 rounded-sm px-2'>
                        <p className='text-slate-900'>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
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
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              <div className='w-full z-20'>
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className='w-full'>
                    <SwiperImage imgHref={project.image} imgLabel={project.title} clickEvent={handleImage}/>
                  </SwiperSlide>
                ))}
              </div>

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20%)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-slate-900 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className='absolute z-10 w-full h-full rounded-md overflow-hidden shadow-lg top-0 left-0 backdrop-blur-lg '
            onClick={handleImage}
          >
            <div className='w-[1150px] h-[750px]'>
              <Image
              src={project.image}
              fill
              className='object-contain'
              alt={`${project.title} enlarged`}
            />
            </div>
            
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const SwiperImage = ({ imgHref, imgLabel,clickEvent }) => {


  return (
    <>
      <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
        {/* Overlay */}
        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-1'></div>
        {/* Image */}
        <div>
          <Image
            src={imgHref}
            fill
            className='object-cover cursor-pointer'
            alt={imgLabel}
            onClick={clickEvent}
          />
        </div>
      </div>
    </>

  );
};

export default Work;
