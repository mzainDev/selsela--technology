"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Benefits from "./benefits/page";
import Testimonials from "./testimonials/page";

export default function CareersPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [locationFilter, setLocationFilter] = useState("All");
    const [typeFilter, setTypeFilter] = useState("All");

    // Sample job data - in a real app this would come from an API or CMS
    const jobs = [
        {
            id: 1,
            title: "Senior Software Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description:
                "We are looking for an experienced software engineer to join our team and help build innovative solutions that impact millions of users.",
        },
        {
            id: 2,
            title: "UX/UI Designer",
            department: "Design",
            location: "Hybrid",
            type: "Full-time",
            description:
                "Join our design team to create beautiful, intuitive interfaces that delight users and solve complex problems.",
        },
        {
            id: 3,
            title: "Marketing Manager",
            department: "Marketing",
            location: "On-site",
            type: "Full-time",
            description:
                "Lead our marketing efforts to build brand awareness and drive customer acquisition through creative campaigns.",
        },
        {
            id: 4,
            title: "Customer Success Specialist",
            department: "Customer Support",
            location: "Remote",
            type: "Full-time",
            description:
                "Help our customers succeed by providing exceptional support and guidance on using our products effectively.",
        },
        {
            id: 5,
            title: "DevOps Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description:
                "Build and maintain our infrastructure to ensure reliable and scalable services for our growing user base.",
        },
        {
            id: 6,
            title: "Product Manager",
            department: "Product",
            location: "Hybrid",
            type: "Full-time",
            description:
                "Drive the product vision and roadmap, working closely with engineering, design, and business teams.",
        },
        {
            id: 7,
            title: "Content Writer",
            department: "Marketing",
            location: "Remote",
            type: "Part-time",
            description:
                "Create engaging content for our blog, social media, and marketing materials to educate and inspire our audience.",
        },
        {
            id: 8,
            title: "Data Analyst",
            department: "Engineering",
            location: "Hybrid",
            type: "Contract",
            description:
                "Analyze user behavior and product performance to provide insights that drive decision-making and product improvements.",
        },
    ];

    // Get unique values for filters
    const departments = ["All", ...new Set(jobs.map((job) => job.department))];
    const locations = ["All", ...new Set(jobs.map((job) => job.location))];
    const types = ["All", ...new Set(jobs.map((job) => job.type))];

    // Filter jobs based on active filters
    const filteredJobs = jobs.filter((job) => {
        const matchesDepartment =
            activeTab === "All" || job.department === activeTab;
        const matchesLocation =
            locationFilter === "All" || job.location === locationFilter;
        const matchesType = typeFilter === "All" || job.type === typeFilter;
        return matchesDepartment && matchesLocation && matchesType;
    });

    const resetFilters = () => {
        setActiveTab("All");
        setLocationFilter("All");
        setTypeFilter("All");
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 to-sky-400 text-white py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <svg
                        className="absolute left-0 bottom-0 h-full w-full text-blue-500 opacity-10"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <polygon points="0,0 100,0 0,100" />
                    </svg>
                    <svg
                        className="absolute right-0 top-0 h-full w-full text-white opacity-10"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <polygon points="100,100 100,0 0,100" />
                    </svg>
                </div>

                <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Join Our <span className="text-yellow-300">Team</span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-xl mb-8">
                            Build your career at a company that values innovation, growth, and
                            people. We're creating the future together.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a
                                href="#open-positions"
                                className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                View Open Positions
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative w-80 h-80">
                            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-400 rounded-lg"></div>
                            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-yellow-300 rounded-lg"></div>
                            <div className="relative w-72 h-72 bg-white rounded-lg overflow-hidden">
                                <Image
                                    src="/bannerT.png"
                                    alt="Team collaboration"
                                    width={300}
                                    height={300}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-2xl font-bold">500+</div>
                            <div className="text-blue-100">Employees</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">20+</div>
                            <div className="text-blue-100">Countries</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">4.8/5</div>
                            <div className="text-blue-100">Employee Rating</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">92%</div>
                            <div className="text-blue-100">Retention Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Intro */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
                                <div className="h-1 w-20 bg-blue-600 rounded"></div>
                            </div>

                            <div className="text-lg space-y-4">
                                <p>
                                    At YourCompany, we're building the future of [industry] with a
                                    team of passionate individuals who thrive on challenges and
                                    innovation. Our mission is to [company mission], and we're
                                    looking for talented people to help us get there.
                                </p>
                                <p>
                                    Our collaborative workspace and supportive culture encourage
                                    everyone to contribute their unique perspectives and skills.
                                    We believe that diverse teams make better products and solve
                                    harder problems.
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full bg-blue-100 rounded-lg transform rotate-3"></div>
                            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full bg-yellow-100 rounded-lg transform -rotate-3"></div>
                            <div className="relative rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/aboutT1.png"
                                    alt="Our workplace culture"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-blue-50 p-8 rounded-lg text-center transform transition-transform hover:-translate-y-1 hover:shadow-md">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                Innovation
                            </h3>
                            <p>
                                We encourage creative thinking and aren't afraid to try new
                                approaches to solve problems.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg text-center transform transition-transform hover:-translate-y-1 hover:shadow-md">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                Collaboration
                            </h3>
                            <p>
                                We work together across teams, sharing knowledge and supporting
                                each other.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg text-center transform transition-transform hover:-translate-y-1 hover:shadow-md">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                Growth
                            </h3>
                            <p>
                                We invest in our people and provide opportunities for personal
                                and professional development.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg text-center transform transition-transform hover:-translate-y-1 hover:shadow-md">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                Impact
                            </h3>
                            <p>
                                We focus on work that matters and makes a difference in people's
                                lives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="open-positions" className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Open Positions
                    </h2>

                    {/* Enhanced Filter System */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                        <h3 className="text-lg font-semibold mb-4">Filter Opportunities</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Department Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Department
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {departments.map((dept) => (
                                        <button
                                            key={dept}
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeTab === dept
                                                ? "bg-blue-600 text-white"
                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                }`}
                                            onClick={() => setActiveTab(dept)}
                                        >
                                            {dept}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Location Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Location
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {locations.map((loc) => (
                                        <button
                                            key={loc}
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${locationFilter === loc
                                                ? "bg-blue-600 text-white"
                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                }`}
                                            onClick={() => setLocationFilter(loc)}
                                        >
                                            {loc}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Type Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Job Type
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {types.map((type) => (
                                        <button
                                            key={type}
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${typeFilter === type
                                                ? "bg-blue-600 text-white"
                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                }`}
                                            onClick={() => setTypeFilter(type)}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Reset Filters Button */}
                        <div className="mt-4 text-right">
                            <button
                                onClick={resetFilters}
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mb-6 flex justify-between items-center">
                        <p className="text-gray-600">
                            Showing {filteredJobs.length} of {jobs.length} positions
                        </p>
                        <div className="text-sm text-gray-500">
                            {filteredJobs.length === 0 && (
                                <p>
                                    No positions match your current filters. Try adjusting your
                                    criteria.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                            >
                                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                                    {job.title}
                                </h3>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                            />
                                        </svg>
                                        {job.department}
                                    </span>
                                    <span className="flex items-center">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        {job.location}
                                    </span>
                                    <span className="flex items-center">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        {job.type}
                                    </span>
                                </div>
                                <p className="mb-6">{job.description}</p>
                                <Link
                                    href={`/career/jobs/${job.id}`}
                                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Benefits />
            <Testimonials />

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-blue-600 text-white">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        Explore our open positions and take the next step in your career
                        journey with us.
                    </p>
                    <a
                        href="#open-positions"
                        className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                        View Positions
                    </a>
                </div>
            </section>
        </>
    );
}
