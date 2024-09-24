'use client';
import { NavLinks } from '@/constant'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

const Nav = () => {
    const pathname = usePathname();
  return (
    <div className='lg:flex gap-12 items-center hidden'>
        <ul className='flex gap-10'>
            {NavLinks.map((link,index)=>(
                <Link key={index} href={link.path} className={`${pathname===link.path && 'text-accent border-b-2 border-accent'} hover:text-accent transition-all ease-in-out duration-500  text-base`}>{link.label}</Link>
            ))}
        </ul>
            <Link href='/contact'><Button  variant='outline' size='lg'>Hire</Button></Link>
    </div>
  )
}

export default Nav