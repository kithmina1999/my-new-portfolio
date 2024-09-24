'use client';
import Image from 'next/image'
import { IoMdClose } from "react-icons/io";
import React, { useState } from 'react'
import { NavLinks } from '@/constant';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import {  usePathname } from 'next/navigation';

const MobileNav = () => {
    const pathname=usePathname();
    
    return (
        <div className='lg:hidden flex'>
                <Sheet>
                    <SheetTrigger className='flex justify-center items-center'>
                        {/* <IoMdClose className='text-[32px] text-accent' /> */}<Image src='/assets/menu-1.svg' alt='menu' width={34} height={34} className='cursor-pointer'/>
                    </SheetTrigger>
                    <SheetContent className='flex flex-col'>
                        {/* Logo */}
                        <div className='mt-32 mb-40 text-center text-2xl'>
                            <Link href='/'>
                                <h1 className='text-4xl font-semibold'>Kith<span className='text-accent'>.</span></h1>
                            </Link>
                        </div>
                        {/* Nav */}
                        <nav className='flex flex-col justify-center items-center gap-8'>
                            {NavLinks.map((link, index) => (
                                <Link
                                    href={link.path}
                                    key={index}
                                    className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} 
                            text-xl capitalize hover:text-accent transition-all `}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            

        </div>
    )
}

export default MobileNav