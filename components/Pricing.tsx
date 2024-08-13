'use client';

import { packages } from '@/constants'
import React from 'react'

const Pricing = () => {

    const handleScrollToContact = () => {
        const targetElement = document.getElementById('contact');
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div id='pricing' className='bg-[#f7f8fc] pt-32'>
            <div className='container mx-auto px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold font-secondary mb-3'>Perfect for Small & Large Brands</h2>
                    <p className='text-lg mb-12 md:w-2/3 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat sed aspernatur a, excepturi laborum porro delectus voluptates impedit tempora cupiditate laboriosam</p>
                </div>

                {/* packages */}
                <div className='flex flex-col md:flex-row mx-auto gap-8 pb-12'>
                    {
                        packages.map((pkg, index) => (
                            <div key={index} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
                                <h3 className='text-2xl font-semibold mb-4'>{pkg.name}</h3>
                                <hr className='w-24 border text-primary border-primary'/>
                                <p className='text-3xl font-bold mb-4'>{pkg.price} <span className='text-lg font-mono'>/month</span></p>
                                <p className='text-lg mb-4'>{pkg.description}</p>
                                <ul className='list-disc list-inside space-y-2 mb-6'>
                                    {
                                        pkg.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))
                                    }
                                </ul>

                                <button className='bg-primary text-white px-4 py-2 rounded' onClick={handleScrollToContact}>Get Started</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Pricing