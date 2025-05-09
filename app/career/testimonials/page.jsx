import Image from 'next/image';
import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Employee Stories
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <p className="italic mb-6">
                                Working at YourCompany has been the highlight of my career. The
                                collaborative environment and opportunity to work on meaningful
                                projects keeps me engaged and excited to come to work every
                                day.
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <Image
                                        src="/api/placeholder/48/48"
                                        alt="Sarah Johnson"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold">Sarah Johnson</div>
                                    <div className="text-sm text-gray-500">
                                        Senior Developer, 3 years
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <p className="italic mb-6">
                                The professional growth I've experienced here has been
                                incredible. My managers have always supported my career goals
                                and helped me develop new skills.
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <Image
                                        src="/api/placeholder/48/48"
                                        alt="Michael Chen"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold">Michael Chen</div>
                                    <div className="text-sm text-gray-500">
                                        Product Manager, 2 years
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <p className="italic mb-6">
                                I appreciate how YourCompany truly values work-life balance.
                                The flexible schedule allows me to be there for my family while
                                still doing work that I'm passionate about.
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <Image
                                        src="/api/placeholder/48/48"
                                        alt="Elena Rodriguez"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold">Elena Rodriguez</div>
                                    <div className="text-sm text-gray-500">
                                        Marketing Specialist, 1 year
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonials;
