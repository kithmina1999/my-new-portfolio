import { Socialslink } from '@/constant'
import Link from 'next/link'
import React from 'react'
import FramerMagentIcon from './FramerMagentIcon'

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {Socialslink.map((item,index) => (
                <FramerMagentIcon key={index}>
                  <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>  
                </FramerMagentIcon>
            ))}
        </div>
    )
}

export default Socials