import React from 'react'
import Image from 'next/image'

const HeroSec = () => {
  return (
    <div>
        {/* HeroSec */}
        <section className="relative bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] text-white py-16 md:py-24 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <svg className="absolute left-0 bottom-0 h-full w-full text-white opacity-3" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <polygon points="0,0 100,0 0,100" />
                            </svg>
                            <svg className="absolute right-0 top-0 h-full w-full text-white opacity-3" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <polygon points="100,100 100,0 0,100" />
                            </svg>
                        </div>
        
                        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                                    Join Our <span className="text-sky-200 relative inline-block">Team
                                        <span className="absolute bottom-1 left-0 right-0 h-1 bg-sky-200 opacity-40 rounded"></span>
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl max-w-xl mb-8 text-sky-100 leading-relaxed">
                                    Build your career at a company that values innovation, growth, and
                                    people. We're creating the future together.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <a href="#open-positions" className="px-6 py-3 bg-white text-[#1e3a8a] font-bold rounded-lg hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                        View Open Positions
                                    </a>
                                </div>
                            </div>
        
                            <div className="md:w-1/2 flex justify-center md:justify-end">
                                <div className="relative w-80 h-80">
                                    <div className="relative w-72 h-72 bg-white rounded-lg overflow-hidden shadow-2xl">
                                        <Image src="/bannerT.png" alt="Team collaboration" width={300} height={300} className="object-cover w-full h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div className="bg-[#1e3a8a] bg-opacity-60 p-4 rounded-lg backdrop-blur-sm shadow-lg">
                                    <div className="text-2xl font-bold">500+</div>
                                    <div className="text-sky-100">Employees</div>
                                </div>
                                <div className="bg-[#1e3a8a] bg-opacity-60 p-4 rounded-lg backdrop-blur-sm shadow-lg">
                                    <div className="text-2xl font-bold">20+</div>
                                    <div className="text-sky-100">Countries</div>
                                </div>
                                <div className="bg-[#1e3a8a] bg-opacity-60 p-4 rounded-lg backdrop-blur-sm shadow-lg">
                                    <div className="text-2xl font-bold">4.8/5</div>
                                    <div className="text-sky-100">Employee Rating</div>
                                </div>
                                <div className="bg-[#1e3a8a] bg-opacity-60 p-4 rounded-lg backdrop-blur-sm shadow-lg">
                                    <div className="text-2xl font-bold">92%</div>
                                    <div className="text-sky-100">Retention Rate</div>
                                </div>
                            </div>
                        </div>
                    </section>
    </div>
  )
}

export default HeroSec