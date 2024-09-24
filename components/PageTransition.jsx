"use client";
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';



export const PageTransition = ({ children }) => {
    const pathname = usePathname();
    const pageVar ={
        initial:{
            opacity:1,
        },
        animate:{
            opacity:0,
            transition:{
                delay:0.2,
                duration:0.4,
                ease:"easeInOut"
            },
        }
        
    }

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div 
                variants={pageVar}
                initial='initial'
                animate='animate'
                className='h-screen w-screen fixed bg-background top-0 pointer-events-none z-50'
                />
                {children}
            </div>
        </AnimatePresence>
    )
}