import { motion } from 'framer-motion'
import React from 'react'
//variants
const stairAnimation = {
    initial: {
        top: '0%',
    },
    animate: {
        top: '100%',
    },
    exit: {
        top: ['100%', '0%'],
    },
}
//reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6;//number of steps
    return totalSteps - index - 1;
}
const Stairs = () => {
    return (
        <>
            
            {[...Array(6)].map((_, index) => {
                return <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className='h-full w-full relative bg-secondary xl:bg-gradient-to-tr from-primary via-secondary to-accent'
                />
            })}
        </>
    )
}

export default Stairs