'use client';
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { PageTransition } from './PageTransition';

const Photo = () => {
  return (
    <div className='h-full w-full relative'>

      <div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-hard-light mx-auto xl:absolute relative xl:-top-60'>
        <PageTransition>
          <Image src='/assets/photo.png' alt='photo' quality={100} fill className='object-contain' priority />

        </PageTransition>
        <motion.svg className='w-[300px] xl:w-[506px] h=[300px] xl:h-[506px] bg-transparent'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='https://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='253'
            cy='253'
            r='250'
            stroke='#A8FBFF'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: '14 10 0 0' }}
            animate={{
              strokeDasharray: ['15 200 25 25', '16,25,92,72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </div>
    </div>
  )
}

export default Photo
