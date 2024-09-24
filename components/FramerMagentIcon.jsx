'use client';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react'

const FramerMagentIcon = ({ children }) => {

    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    //logic for mouse movements
    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({x,y});
    }
    const mouseLeave = (e) => {
        setPosition({x:0,y:0});
    }
    const {x,y} = position;

    return (
        <motion.div
        ref={ref}
        animate={{x,y}}
        transition={{type:'spring', stiffness: 150, damping:15 , mass:0.1}}
        onTouchMove={mouseMove}
        onTouchCancel={mouseLeave}
        onMouseMove={mouseMove}
        onMouseLeave={mouseLeave}
        >
            {children}
        </motion.div>
    )
}

export default FramerMagentIcon