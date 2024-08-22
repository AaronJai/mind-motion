import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='py-12 bg-gray-100 px-8'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
                {/* logos and images */}
                <div className='space-y-6 mr-14'>
                    <div className='flex items-center space-x-2'>
                        <Image src='/assets/footer-logo.svg' width={120} height={40} alt='logo'/>
                    </div>
                    <p className='text-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic quaerat, assumenda iusto nisi nihil id voluptatum!</p>
                    <div className='flex space-x-4'>
                        <Link href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                            <FaFacebookF className='text-xl'/>
                        </Link>

                        <Link href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                            <FaTwitter className='text-xl'/>
                        </Link>

                        <Link href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                            <FaInstagram className='text-xl'/>
                        </Link>

                        <Link href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                            <FaLinkedin className='text-xl'/>
                        </Link>
                    </div>
                </div>

                {/* quick links */}
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
                    <ul className='space-y-3 '>
                        <li>
                            <Link href="#home" className='hover:underline text-gray-700'>Home</Link>
                        </li>
                        <li>
                            <Link href="#services" className='hover:underline text-gray-700'>Services</Link>
                        </li>
                        <li>
                            <Link href="#about" className='hover:underline text-gray-700'>About</Link>
                        </li>
                        <li>
                            <Link href="#contact" className='hover:underline text-gray-700'>Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* support */}
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4'>Support</h3>
                    <ul className='space-y-3 '>
                        <li>
                            <Link href="#" className='hover:underline text-gray-700'>FAQ</Link>
                        </li>
                        <li>
                            <Link href="#" className='hover:underline text-gray-700'>Terms of Service</Link>
                        </li>
                        <li>
                            <Link href="#" className='hover:underline text-gray-700'>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#contact" className='hover:underline text-gray-700'>Support Center</Link>
                        </li>
                    </ul>
                </div>

                {/* contact us */}
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
                    <ul className='space-y-3 '>
                        <li className='flex items-center gap-2'>
                            <FaMapMarkerAlt className='text-primary'/>
                            <p className='text-gray-700'>123 Street, City, Country</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaPhoneAlt className='text-primary'/>
                            <p className='text-gray-700'>+61 234 567 890</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaEnvelope className='text-primary'/>
                            <p className='text-gray-700'>info@mindleap.com</p>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer