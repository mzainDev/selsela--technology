"use client";
import { use, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Benefits from "./benefits/page";
import Testimonials from "./testimonials/page";

export default function CareersPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [locationFilter, setLocationFilter] = useState("All");
    const [typeFilter, setTypeFilter] = useState("All");

    const [showForm, setShowForm] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        // Load SweetAlert from CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("firstName", e.target.firstName.value);
        formData.append("fatherName", e.target.fatherName.value);
        formData.append("familyName", e.target.familyName.value);
        formData.append("email", e.target.email.value);
        formData.append("job", e.target.job.value);
        formData.append("message", e.target.message.value);
        formData.append("cv", e.target.cv.files[0]);

        console.log(formData);

        try {
            const response = await fetch("https://backtesting.selsla.net/api/apply", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json",
                },

            });
            // console.log(response);

            if (response.ok) {
                // Close the form
                setShowForm(false);
                // Show sweet alert success message
                window.Swal.fire({
                    title: 'Success!',
                    text: 'Your application has been submitted successfully!',
                    icon: 'success',
                    confirmButtonText: 'Great!',
                    confirmButtonColor: '#3085d6'
                });
            } else {
                window.Swal.fire({
                    title: 'Error!',
                    text: 'There was a problem submitting your application. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#d33'
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            window.Swal.fire({
                title: 'Error!',
                text: 'An unexpected error occurred. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#d33'
            });
        }
    };


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
            <section className="relative bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <svg
                        className="absolute left-0 bottom-0 h-full w-full text-white opacity-5"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <polygon points="0,0 100,0 0,100" />
                    </svg>
                    <svg
                        className="absolute right-0 top-0 h-full w-full text-white opacity-5"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <polygon points="100,100 100,0 0,100" />
                    </svg>
                </div>

                <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Join Our <span className="text-yellow-300 relative inline-block">
                                Team
                                <span className="absolute bottom-1 left-0 right-0 h-1 bg-yellow-300 opacity-40 rounded"></span>
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-xl mb-8 text-blue-100 leading-relaxed">
                            Build your career at a company that values innovation, growth, and
                            people. We're creating the future together.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a
                                href="#open-positions"
                                className="px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                View Open Positions
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative w-80 h-80">
                            <div className="absolute -top-4 -right-4 w-72 h-72 bg-indigo-800 rounded-lg transform rotate-3"></div>
                            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-yellow-400 rounded-lg transform -rotate-3"></div>
                            <div className="relative w-72 h-72 bg-white rounded-lg overflow-hidden shadow-2xl">
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
                        <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg backdrop-blur-sm shadow-lg">
                            <div className="text-2xl font-bold">500+</div>
                            <div className="text-blue-100">Employees</div>
                        </div>
                        <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg backdrop-blur-sm shadow-lg">
                            <div className="text-2xl font-bold">20+</div>
                            <div className="text-blue-100">Countries</div>
                        </div>
                        <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg backdrop-blur-sm shadow-lg">
                            <div className="text-2xl font-bold">4.8/5</div>
                            <div className="text-blue-100">Employee Rating</div>
                        </div>
                        <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg backdrop-blur-sm shadow-lg">
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
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Work With Us</h2>
                                <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
                            </div>

                            <div className="text-lg space-y-4 text-gray-600">
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
                            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full bg-indigo-100 rounded-lg transform rotate-3"></div>
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
                        <div className="bg-gray-50 p-8 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-100">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
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
                            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                                Innovation
                            </h3>
                            <p className="text-gray-600">
                                We encourage creative thinking and aren't afraid to try new
                                approaches to solve problems.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-100">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
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
                            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                                Collaboration
                            </h3>
                            <p className="text-gray-600">
                                We work together across teams, sharing knowledge and supporting
                                each other.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-100">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
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
                            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                                Growth
                            </h3>
                            <p className="text-gray-600">
                                We invest in our people and provide opportunities for personal
                                and professional development.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-100">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
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
                            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                                Impact
                            </h3>
                            <p className="text-gray-600">
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
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">
                            Open Positions
                        </h2>
                        <div className="h-1 w-24 bg-indigo-600 mx-auto rounded-full"></div>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Find your perfect role and join our team of talented professionals making a difference.
                        </p>
                    </div>

                    {/* Enhanced Filter System */}
                    <div className="bg-white rounded-xl shadow-md p-6 mb-10 border border-gray-100">
                        <h3 className="text-lg font-semibold mb-6 text-gray-800 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Filter Opportunities
                        </h3>

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
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${activeTab === dept
                                                ? "bg-indigo-600 text-white shadow-md"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${locationFilter === loc
                                                ? "bg-indigo-600 text-white shadow-md"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${typeFilter === type
                                                ? "bg-indigo-600 text-white shadow-md"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                        <div className="mt-6 text-right">
                            <button
                                onClick={resetFilters}
                                className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-center gap-1 ml-auto"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Reset Filters
                            </button>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mb-8 flex justify-between items-center">
                        <p className="text-gray-600 font-medium">
                            Showing <span className="text-indigo-600 font-bold">{filteredJobs.length}</span> of <span className="font-bold">{jobs.length}</span> positions
                        </p>
                        <div className="text-sm text-gray-500">
                            {filteredJobs.length === 0 && (
                                <p className="bg-amber-50 text-amber-700 px-4 py-2 rounded-lg inline-flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    No positions match your current filters. Try adjusting your criteria.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 group"
                            >
                                <div className="h-2 bg-indigo-600 w-full"></div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center">
                                            <svg
                                                className="w-4 h-4 mr-1 text-indigo-500"
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
                                                className="w-4 h-4 mr-1 text-indigo-500"
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
                                                className="w-4 h-4 mr-1 text-indigo-500"
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
                                    <p className="mb-6 text-gray-600">{job.description}</p>
                                    <button
                                        onClick={() => {
                                            setSelectedJob(job);
                                            setShowForm(true);
                                        }}
                                        className="inline-flex items-center justify-center px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md cursor-pointer"
                                    >
                                        <span>Apply Now</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-lg max-w-xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="h-2 bg-indigo-600 w-full rounded-t-xl"></div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    Apply for <span className="text-indigo-600">{selectedJob?.title}</span>
                                </h2>
                                <button
                                    onClick={() => setShowForm(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Father Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fatherName"
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Family Name
                                        </label>
                                        <input
                                            type="text"
                                            name="familyName"
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>

                                <input
                                    type="hidden"
                                    name="job"
                                    value={selectedJob?.title || ''}
                                />

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Cover Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        placeholder="Tell us why you're interested in this position..."
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Upload CV (PDF or Word)
                                    </label>
                                    <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-indigo-500 transition-colors bg-gray-50">
                                        <input
                                            type="file"
                                            name="cv"
                                            accept=".pdf,.doc,.docx"
                                            required
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        />
                                        <div className="text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="mt-2 text-sm text-gray-600">
                                                <span className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Click to upload
                                                </span> or drag and drop
                                            </p>
                                            <p className="mt-1 text-xs text-gray-500">
                                                PDF, DOC, or DOCX up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                        className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <Benefits />
            <Testimonials />

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-gradient-to-r from-blue-700 to-indigo-600 text-white">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-3">Ready to Join Our Team?</h2>
                    <div className="h-1 w-24 bg-yellow-300 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg max-w-2xl mx-auto mb-8 text-blue-100">
                        Explore our open positions and take the next step in your career
                        journey with us.
                    </p>
                    <a
                        href="#open-positions"
                        className="inline-flex items-center px-6 py-3 bg-white text-indigo-700 font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <span>View Positions</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </div>
            </section>
        </>
    );
}
