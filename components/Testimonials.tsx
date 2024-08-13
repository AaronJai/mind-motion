import { testimonials } from '@/constants'
import Image from 'next/image';
import React from 'react'
import { BsChatQuoteFill } from "react-icons/bs";


const Testimonials = () => {
    return (
        <div id='testimonials' className='bg-[#f7f8fc] py-12'>
            <div className='container mx-auto'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold font-secondary mb-3'>What Our Clients Say</h2>
                    <p className='text-lg mb-12 md:w-1/2 mx-auto'>Hear from some of our satisfied customers about how our services have positively impacted their lives and well-being</p>
                </div>

                <div className='flex flex-col md:flex-row mx-auto md:gap-12 gap-8'>
                    {
                        testimonials.map((testimonial, index) => (
                            <div key={index} className='relative bg-white rounded-lg p-6 flex-1'>
                                <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                                    <BsChatQuoteFill className='size-12 text-primary'/>
                                </div>

                                <div className='flex flex-col space-y-3 mb-4'>
                                    <p className='text-lg mb-2'>{testimonial.review}</p>
                                    <div className='flex gap-1'>
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={60}
                                            height={60}
                                            className='size-16 rounded-full mr-4'
                                        />
                                        <div>
                                            <p className='font-semibold'>{testimonial.name}</p>
                                            <p className='text-gray-500'>{testimonial.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonials