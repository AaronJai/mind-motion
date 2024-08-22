'use client';
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FaCircleArrowRight } from "react-icons/fa6";
import {motion} from "framer-motion";
import { fadeIn } from '@/lib/AnimationVariants';

const Hero = () => {
    return (
        <section id='home' className='bg-heroBg text-white flex items-center pt-28 md:h-screen'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
                {/* left side */}
                <motion.div variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='md:w-1/2'>
                    <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Start Your Jorney to Mental Wellness</h1>
                    <p className='text-lg mb-12 md:pr-8'>By calming our minds, we deepen our understanding of our challenges, strengthen our connections, sharpen our focus, and cultivate self-compassion. Explore our mindful guide to meditation and start your journey to inner peace.</p>
                    
                    <button>

                        <Link href="#contact" className='text-white bg-primary hover:bg-primary/90 px-8 py-3.5 rounded cursor-pointer'>
                            Get Started →
                        </Link>
                    </button>
                </motion.div>
                
            
                {/* right side */}
                <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='md:w-1/2 h-full'>
                    <Image 
                        src='/assets/hero.webp'
                        alt='hero'
                        width={500}
                        height={500}
                        className='w-full object-cover'
                    />
                </motion.div>

            </div>
        </section>
    )
}

export default Hero