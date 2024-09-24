'use client';
import React, { useEffect } from 'react'
import {animate, motion, useMotionTemplate, useMotionValue} from 'framer-motion'
import { Colors } from '@/constant'
import { PageTransition } from './PageTransition';


const AuroraEffect = ({ children }) => {
    const color = useMotionValue(Colors[0])
    const backgroundImage= useMotionTemplate `radial-gradient(125% 184% at 50% 0%, #0f0b1b 45%, ${color} )`


    useEffect(()=>{
        animate(color,Colors,{
            ease:'easeInOut',
            duration:10,
            repeat:Infinity,
            repeatType:'mirror  '
        })
    })

    return (
        <motion.div 
        style={{backgroundImage,}}
        className='relative min-h-[80vh]'>
            <PageTransition>
              {children}  
            </PageTransition>
        </motion.div>
    )
}

export default AuroraEffect