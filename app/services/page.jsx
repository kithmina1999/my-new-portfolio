'use client';
import Iconanimation from '@/components/Iconanimation'
import { ServicesList } from '@/constant'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.section className='min-h-[88vh] w-full flex items-center'
    initial={{opacity:0}} 
      animate={{
        opacity:1, 
        transition:{delay:1.8, duration:0.4, ease:"easeIn"}
      }}>
      
      
    <div className='container'>
        <div className='grid lg:grid-cols-2 gap-8 md:py-32'>
          {ServicesList.map((item) => (
            <div className='col-span-1 w-[90%] mx-auto pt-5  m-5 border-b pb-5 border-slate-500 hover:text-accent transition-all ease-in-out duration-100' key={item.id}>
              <div className='h-full '>
                <div className='flex justify-between pb-5'>
                  <h2 className='text-5xl font-extrabold text-outline group-hover:text-outline-hover text-transparent'>
                    {item.id}
                    </h2>
                  <h2 className='h2 hover:text-accent transition-all ease-in-out duration-500'>
                    <Iconanimation>{item.icon}</Iconanimation>
                    </h2>
                </div>
                <div className='px- lg:text-start text-center w-auto'>
                  <h2 className='text-3xl font-semibold hover:text-accent transition-all ease-in-out duration-500'>{item.name}</h2>
                  <p className='leading-6 pt-3 font-extralight text-slate-400 hover:text-white  transition-all ease-in-out duration-500'>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
    </motion.section>
  )
}

export default Services