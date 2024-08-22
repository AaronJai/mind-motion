'use client';

import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { useState } from "react";
import { fadeIn } from "@/lib/AnimationVariants";
import { motion } from "framer-motion";


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            country,
            message
        }
        // console.log(data);

        if (!data) {
            alert("Please fill all the fields");
        }
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
        setName("");
        setEmail("");
        setPhone("");
        setCountry("");
        setMessage("");
    }

    return (
        <div className='bg-heroBg flex items-center justify-center py-28 px-8' id='contact'>
            <div className='container mx-auto'>
                <div className='md:w-auto mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8 '>
                    {/* left side */}
                    <div className='space-y-8'>
                        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}}>
                            <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make an Appointment</h2>
                        </motion.div>
                        <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">

                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                    <FaUser className="text-primary"/>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-medium">24 Hours Services</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                    <FaEnvelope className="text-primary"/>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-medium">Expert Therapist</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                    <FaPhone className="text-primary"/>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-medium">High Quality Care</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                    <FaGlobe className="text-primary"/>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-medium">Trusted Clinic</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                    {/* right side */}
                    <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className="space-y-8 p-8 bg-white shadow-xl rounded-md">
                        <h3 className="text-2xl font-bold mb-4">Book Appointment</h3>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="flex sm:flex-row flex-col gap-4">
                                <input onChange={e => setName(e.target.value)} type="text" placeholder="Name" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"/>
                                <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"/>
                            </div>
                                
                            <div className="flex sm:flex-row flex-col gap-4">
                                <input onChange={e => setPhone(e.target.value)} type="text" placeholder="Contact Number" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"/>
                                <input onChange={e => setCountry(e.target.value)} type="text" placeholder="Country" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"/>
                            </div>
                            <textarea onChange={e => setMessage(e.target.value)} rows={5} placeholder="Write a message..." className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"></textarea>
                            <button type="submit" className="w-full p-3 rounded-md hover:bg-primary/80 text-white bg-primary">Send Message</button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <div>
                {
                    showModal && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-85">
                            <div className="bg-white p-8 rounded-md shadow-lg">
                                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                                <p>Thank you, {name}, for submitting your query. We will be in touch soon.</p>
                                <button onClick={closeModal} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">Close</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Contact

