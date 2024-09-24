'use client';
import React from 'react'
import { motion } from 'framer-motion'



const Iconanimation = ({ children }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{
                scale: 0.8,
                rotate: -360,
                borderRadius: "100%"
            }}>{children}
        </motion.div>
    )
}

export default Iconanimation