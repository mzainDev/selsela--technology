import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const CompanyIntro = () => {
    // Define animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const textBlockVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    }

    const imageBlockVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.9 }
        },
        hover: {
            scale: 1.03,
            transition: { duration: 0.3 }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: i * 0.1
            }
        }),
        hover: {
            y: -10,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.2 }
        }
    }

    return (
        <div>
            {/* Comapnay Intro */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-[#dbeafe] to-white">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="order-2 lg:order-1"
                            variants={textBlockVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-6 text-[#0f172a]">Why Work With Us</h2>
                                <div className="h-1 w-20 bg-[#3b82f6] rounded-full"></div>
                            </div>

                            <div className="text-lg space-y-4 text-[#334155]">
                                <p>At YourCompany, we're building the future of [industry] with a team of passionate individuals who thrive on challenges and innovation. Our mission is to [company mission], and we're looking for talented people to help us get there.</p>
                                <p>Our collaborative workspace and supportive culture encourage everyone to contribute their unique perspectives and skills. We believe that diverse teams make better products and solve harder problems.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="order-1 lg:order-2 relative"
                            variants={imageBlockVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                        >
                            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full bg-[#bfdbfe] rounded-lg transform rotate-3"></div>
                            <div className="relative rounded-lg overflow-hidden shadow-xl">
                                <Image src="/aboutT1.png" alt="Our workplace culture" width={400} height={300} className="w-full h-auto" />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="bg-white p-8 rounded-lg text-center border-t-4 border-[#3b82f6]"
                            variants={cardVariants}
                            custom={0}
                            whileHover="hover"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#dbeafe] text-[#1e40af] mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Innovation</h3>
                            <p className="text-[#475569]">We encourage creative thinking and aren't afraid to try new approaches to solve problems.</p>
                        </motion.div>
                        <motion.div
                            className="bg-white p-8 rounded-lg text-center border-t-4 border-[#3b82f6]"
                            variants={cardVariants}
                            custom={1}
                            whileHover="hover"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#dbeafe] text-[#1e40af] mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Collaboration</h3>
                            <p className="text-[#475569]">We work together across teams, sharing knowledge and supporting each other.</p>
                        </motion.div>
                        <motion.div
                            className="bg-white p-8 rounded-lg text-center border-t-4 border-[#3b82f6]"
                            variants={cardVariants}
                            custom={2}
                            whileHover="hover"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#dbeafe] text-[#1e40af] mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Growth</h3>
                            <p className="text-[#475569]">We invest in our people and provide opportunities for personal and professional development.</p>
                        </motion.div>
                        <motion.div
                            className="bg-white p-8 rounded-lg text-center border-t-4 border-[#3b82f6]"
                            variants={cardVariants}
                            custom={3}
                            whileHover="hover"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#dbeafe] text-[#1e40af] mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">Impact</h3>
                            <p className="text-[#475569]">We focus on work that matters and makes a difference in people's lives.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default CompanyIntro