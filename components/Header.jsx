
import React from 'react'
import Nav from './Nav'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <header
        >
      
            <div className='container p-6 xl:p-8 flex justify-between items-center'>
                <Link href='/' className='text-4xl font-semibold'>Kith<span className='text-accent'> .</span></Link>
                <Nav />
                <MobileNav />
            </div>
        </header>
    )
}

export default Header