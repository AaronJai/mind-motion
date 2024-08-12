'use client';

import Image from 'next/image';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Services = () => {
    return (
        <div id='services' className='bg-[#f7f8fc]'>
            <div className='pt-28 px-4 container mx-auto'>
                <div className='text-center space-y-5'>
                    <h2 className='text-4xl font-bold font-secondary text-heroBg'>What Can We Do Together?</h2>
                    <p className='md:w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur fugit dignissimos, inventore accusamus culpa debitis sequi nobis non error, consectetur eveniet modi facilis dolorum animi omnis placeat quam laborum.</p>
                </div>

                {/* Service categories */}
                <div className='py-12 md:w-auto mx-auto'>
                    <Tabs>
                        <TabList className='flex flex-auto justify-center items-center md:gap-8 gap-4'>
                            <Tab>Couple Counseling</Tab>
                            <Tab>Parenting Skills</Tab>
                            <Tab>Feeling Stuck</Tab>
                            <Tab>Self-Confidence</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='flex flex-col md:flex-row gap-8 mt-8'>
                                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>Couple Counseling</h3>
                                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non facilis aliquid facere rerum repudiandae vero fuga molestiae, beatae tempora? Ut quam obcaecati maxime ducimus doloremque, fugiat minima laudantium accusantium?</p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                                    <ul className='list-disc list-inside space-y-3'>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Effective Communication Techniques</li>
                                        <li>Conflict Resolution Strategies</li>
                                    </ul>
                                </div>

                                <div className='md:w-1/2'>
                                    <Image
                                        src='/assets/service1.webp'
                                        alt='service1'
                                        width={500}
                                        height={500}
                                        className='w-full md:h-[446px] h-auto rounded-2xl object-cover'
                                    />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className='flex flex-col md:flex-row gap-8 mt-8'>
                                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>Parenting Skills</h3>
                                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non facilis aliquid facere rerum repudiandae vero fuga molestiae, beatae tempora? Ut quam obcaecati maxime ducimus doloremque, fugiat minima laudantium accusantium?</p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                                    <ul className='list-disc list-inside space-y-3'>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Effective Communication Techniques</li>
                                        <li>Conflict Resolution Strategies</li>
                                    </ul>
                                </div>

                                <div className='md:w-1/2'>
                                    <Image
                                        src='/assets/service2.webp'
                                        alt='service2'
                                        width={500}
                                        height={500}
                                        className='w-full md:h-[446px] h-auto rounded-2xl object-cover'
                                    />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className='flex flex-col md:flex-row gap-8 mt-8'>
                                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
                                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non facilis aliquid facere rerum repudiandae vero fuga molestiae, beatae tempora? Ut quam obcaecati maxime ducimus doloremque, fugiat minima laudantium accusantium?</p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                                    <ul className='list-disc list-inside space-y-3'>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Effective Communication Techniques</li>
                                        <li>Conflict Resolution Strategies</li>
                                    </ul>
                                </div>

                                <div className='md:w-1/2'>
                                    <Image
                                        src='/assets/service3.webp'
                                        alt='service3'
                                        width={500}
                                        height={500}
                                        className='w-full md:h-[446px] h-auto rounded-2xl object-cover'
                                    />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className='flex flex-col md:flex-row gap-8 mt-8'>
                                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                                    <h3 className='text-3xl font-semibold text-primary mb-4'>Self-Confidence</h3>
                                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non facilis aliquid facere rerum repudiandae vero fuga molestiae, beatae tempora? Ut quam obcaecati maxime ducimus doloremque, fugiat minima laudantium accusantium?</p>
                                    <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                                    <ul className='list-disc list-inside space-y-3'>
                                        <li>Understanding Relationship Dynamics</li>
                                        <li>Effective Communication Techniques</li>
                                        <li>Conflict Resolution Strategies</li>
                                    </ul>
                                </div>

                                <div className='md:w-1/2'>
                                    <Image
                                        src='/assets/service4.webp'
                                        alt='service4'
                                        width={500}
                                        height={500}
                                        className='w-full md:h-[446px] h-auto rounded-2xl object-cover'
                                    />
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Services;