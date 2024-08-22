'use client';

import { fadeIn } from '@/lib/AnimationVariants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { GiPlayButton } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";


const About = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
    }

    const handleCloseVideo = () => {
        setIsVideoPlaying(false);
    }

    return (
        <div id='about' className='bg-[#f7f8fc] pb-16 pt-20'>
            <motion.div variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='container mx-auto'>
                <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
                    {/* left side */}
                    <div className='md:w-1/2 w-full mb-8 md:mb-0'>
                        {
                            !isVideoPlaying ? (
                                <div className='relative'>
                                    <Image
                                        src='/assets/video-thumbnail.webp'
                                        alt='video-thumbnail'
                                        width={500}
                                        height={500}
                                        className='w-full md:h-[446px] h-auto rounded-lg object-cover cursor-pointer'
                                    />
                                    <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer' onClick={handleVideoPlay}><GiPlayButton className='size-12 text-white'/></button>
                                </div>
                            ) : (null)
                        }
                    </div>

                    {/* right side */}
                    <div className='md:w-1/2 w-full'>
                        <h2 className='text-4xl font-secondary font-bold mb-4 leading-snug'>Individual Consult and Therapy</h2>
                        <p className='text-lg mb-12 md:pr-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore voluptates debitis vitae inventore similique nesciunt consequuntur saepe non quia dolorem aliquid, corporis quos tenetur ab corrupti animi necessitatibus illo aliquam.</p>
                        
                        <button>
                            <Link href="#contact" className='text-white bg-primary hover:bg-primary/90 px-8 py-3.5 rounded cursor-pointer'>
                                Get Started →
                            </Link>
                        </button>
                    </div>
                </div>

                {
                    isVideoPlaying && (
                        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
                            <div className='relative w-full h-full flex items-center justify-center z-50'> 
                                <iframe 
                                    width="560" 
                                    height="315" 
                                    src="https://www.youtube.com/embed/bvh2nlqpTYw?si=XvQ0iv09s6tjdwd-&autoplay=1" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
                                    allowfullscreen>
                                </iframe>

                                <button onClick={handleCloseVideo} className='absolute top-4 right-4 text-white text-2xl cursor-pointer'>
                                    <TfiClose />
                                </button>
                            </div>
                        </div>
                    )
                }
            </motion.div>
        </div>
    )
}

export default About