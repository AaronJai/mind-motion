'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RiMenu4Fill } from "react-icons/ri";
import { Button } from './ui/button';
import { motion } from "framer-motion"


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    const handleScroll = () => {
        const sections = ['home', 'services', 'about', 'pricing', 'testimonials'];
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop;
                const height = element.offsetHeight;

                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = (
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
            <li>
                <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault(); 
                        handleCloseMenu(); 
                        handleScrollTo('home')
                    }}
                    href="#home" 
                    className={`text-white ${activeSection === 'home' ? 'isActive' : ''}`}>
                    Home
                </motion.a>
            </li>
            <li>
                <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault(); 
                        handleCloseMenu(); 
                        handleScrollTo('services')
                    }}
                    href='#services'
                    className={`text-white ${activeSection === 'services' ? 'isActive' : ''}`}>
                    Services
                </motion.a>
            </li>
            <li>
                <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault(); 
                        handleCloseMenu(); 
                        handleScrollTo('about')
                    }}
                    href="#about" 
                    className={`text-white ${activeSection === 'about' ? 'isActive' : ''}`}>
                    About Us
                </motion.a>
            </li>
            <li>
                <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault(); 
                        handleCloseMenu(); 
                        handleScrollTo('pricing')
                    }}
                    href="#pricing" 
                    className={`text-white ${activeSection === 'pricing' ? 'isActive' : ''}`}>
                    Pricing
                </motion.a>
            </li>
            <li>
                <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault(); 
                        handleCloseMenu(); 
                        handleScrollTo('testimonials')
                    }}
                    href="#testimonials" 
                    className={`text-white ${activeSection === 'testimonials' ? 'isActive' : ''}`}>
                    Testimonials
                </motion.a>
            </li>
        </ul>
    )

    return (
        <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                {/* Logo */}
                <div>
                    <Link href="/">
                        <Image 
                            src="/assets/logo.svg"
                            alt="logo"
                            width={140}
                            height={140}
                        />
                    </Link>
                    
                </div>

                {/* Navitems */}
                <div className='hidden md:flex flex-grow justify-center'>
                    <nav>
                        {navLinks}
                    </nav>
                </div>

                {/* Contact Button */}
                <div className='hidden md:block'>
                    <Link href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded cursor-pointer'>
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className='block md:hidden'>
                    <Button 
                        onClick={handleToggle}
                        className={`text-white focus:outline-none bg-heroBg hover:bg-heroBg ${isOpen ? "border border-white" : ""}`}>
                        <RiMenu4Fill className='size-6'/>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Items */}
            {
                isOpen && (
                    <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden'>
                        <ul className='flex flex-col p-4 space-y-3'>
                            {navLinks.props.children}

                            <li className='py-2'>
                                <Link href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </header>
    )
}

export default Navbar