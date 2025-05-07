import React from 'react'

const Benefits = () => {
    return (
        <div>
            {/* Benefits Grid */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        What We Offer
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-blue-50 p-8 rounded-lg text-center">
                            <div className="text-4xl mb-4">🏥</div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                Health & Wellness
                            </h3>
                            <p>
                                Comprehensive medical, dental, and vision coverage. Mental
                                health resources and wellness programs.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-lg text-center">
                            <div className="text-4xl mb-4">⏰</div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                Flexible Work
                            </h3>
                            <p>
                                Flexible hours and remote work options to help you maintain
                                work-life balance.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-lg text-center">
                            <div className="text-4xl mb-4">🌴</div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                Unlimited PTO
                            </h3>
                            <p>
                                Take time off when you need it, with our trust-based unlimited
                                PTO policy.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-lg text-center">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                Learning & Development
                            </h3>
                            <p>
                                Professional development budget and internal learning
                                opportunities to grow your skills.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-lg text-center">
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                Financial Benefits
                            </h3>
                            <p>
                                Competitive salary, 401(k) matching, and equity options for all
                                employees.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-lg text-center">
                            <div className="text-4xl mb-4">🎉</div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                Team Building
                            </h3>
                            <p>
                                Regular team events, retreats, and celebrations to foster
                                connections.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Benefits;    
