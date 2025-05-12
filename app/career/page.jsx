"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Benefits from "./benefits/page";
import Testimonials from "./testimonials/page";
import HeroSec from "./herosec/page";
import CompanyIntro from "./companyintro/page";

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

        try {
            const response = await fetch("https://backtesting.selsla.net/api/apply", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json",
                },
            });

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
            description: "We are looking for an experienced software engineer to join our team and help build innovative solutions that impact millions of users.",
        },
        {
            id: 2,
            title: "UX/UI Designer",
            department: "Design",
            location: "Hybrid",
            type: "Full-time",
            description: "Join our design team to create beautiful, intuitive interfaces that delight users and solve complex problems.",
        },
        {
            id: 3,
            title: "Marketing Manager",
            department: "Marketing",
            location: "On-site",
            type: "Full-time",
            description: "Lead our marketing efforts to build brand awareness and drive customer acquisition through creative campaigns.",
        },
        {
            id: 4,
            title: "Customer Success Specialist",
            department: "Customer Support",
            location: "Remote",
            type: "Full-time",
            description: "Help our customers succeed by providing exceptional support and guidance on using our products effectively.",
        },
        {
            id: 5,
            title: "DevOps Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            description: "Build and maintain our infrastructure to ensure reliable and scalable services for our growing user base.",
        },
        {
            id: 6,
            title: "Product Manager",
            department: "Product",
            location: "Hybrid",
            type: "Full-time",
            description: "Drive the product vision and roadmap, working closely with engineering, design, and business teams.",
        },
        {
            id: 7,
            title: "Content Writer",
            department: "Marketing",
            location: "Remote",
            type: "Part-time",
            description: "Create engaging content for our blog, social media, and marketing materials to educate and inspire our audience.",
        },
        {
            id: 8,
            title: "Data Analyst",
            department: "Engineering",
            location: "Hybrid",
            type: "Contract",
            description: "Analyze user behavior and product performance to provide insights that drive decision-making and product improvements.",
        },
    ];

    // Get unique values for filters
    const departments = ["All", ...new Set(jobs.map((job) => job.department))];
    const locations = ["All", ...new Set(jobs.map((job) => job.location))];
    const types = ["All", ...new Set(jobs.map((job) => job.type))];

    // Filter jobs based on active filters
    const filteredJobs = jobs.filter((job) => {
        const matchesDepartment = activeTab === "All" || job.department === activeTab;
        const matchesLocation = locationFilter === "All" || job.location === locationFilter;
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
            <HeroSec />

            {/* Company Intro */}
            <CompanyIntro />

            {/* Open Positions */}
            <section id="open-positions" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#dbeafe]">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-center mb-4 text-[#0f172a]"
                    >
                        Open Positions
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 w-24 bg-[#3b82f6] mx-auto rounded-full mb-8"
                    ></motion.div>

                    {/* Enhanced Filter System */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white rounded-lg shadow-md p-6 mb-8 border border-[#bfdbfe]"
                    >
                        <h3 className="text-lg font-semibold mb-4 text-[#0f172a]">Filter Opportunities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Department Filter */}
                            <div>
                                <label className="block text-sm font-medium text-[#334155] mb-2">Department</label>
                                <div className="flex flex-wrap gap-2">
                                    {departments.map((dept) => (
                                        <button
                                            key={dept}
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeTab === dept ? "bg-[#1e3a8a] text-white" : "bg-[#f1f5f9] text-[#334155] hover:bg-[#e2e8f0]"}`}
                                            onClick={() => setActiveTab(dept)}
                                        >
                                            {dept}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Location Filter */}
                            <div>
                                <label className="block text-sm font-medium text-[#334155] mb-2">Location</label>
                                <div className="flex flex-wrap gap-2">
                                    {locations.map((loc) => (
                                        <button
                                            key={loc}
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${locationFilter === loc ? "bg-[#1e3a8a] text-white" : "bg-[#f1f5f9] text-[#334155] hover:bg-[#e2e8f0]"}`}
                                            onClick={() => setLocationFilter(loc)}
                                        >
                                            {loc}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Type Filter */}
                            <div>
                                <label className="block text-sm font-medium text-[#334155] mb-2">Job Type</label>
                                <div className="flex flex-wrap gap-2">
                                    {types.map((type) => (
                                        <button
                                            key={type}
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${typeFilter === type ? "bg-[#1e3a8a] text-white" : "bg-[#f1f5f9] text-[#334155] hover:bg-[#e2e8f0]"}`}
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
                            <button onClick={resetFilters} className="text-[#3b82f6] hover:text-[#1e40af] font-medium transition-colors">
                                Reset Filters
                            </button>
                        </div>
                    </motion.div>

                    {/* Results Count */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mb-6 flex justify-between items-center"
                    >
                        <p className="text-[#334155]">Showing {filteredJobs.length} of {jobs.length} positions</p>
                        <div className="text-sm text-[#64748b]">
                            {filteredJobs.length === 0 && (
                                <p>No positions match your current filters. Try adjusting your criteria.</p>
                            )}
                        </div>
                    </motion.div>

                    {/* Job Listings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.8 + (index * 0.1) // Staggered delay based on index
                                }}
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 border-t-4 border-[#3b82f6]"
                            >
                                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{job.title}</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-[#64748b] mb-4">
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        {job.department}
                                    </span>
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {job.location}
                                    </span>
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {job.type}
                                    </span>
                                </div>
                                <p className="mb-6 text-[#475569]">{job.description}</p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setSelectedJob(job);
                                        setShowForm(true);
                                    }}
                                    className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white rounded-lg hover:from-[#1e40af] hover:to-[#2563eb] transition-all shadow-md cursor-pointer"
                                >
                                    <span>Apply Now</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Modal */}
            {showForm && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-[#0f172a] bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-xl shadow-lg max-w-xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <div className="h-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] w-full rounded-t-xl"></div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-[#0f172a]">Apply for <span className="text-[#2563eb]">{selectedJob?.title}</span></h2>
                                <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-[#334155] mb-1">First Name</label>
                                        <input type="text" name="firstName" required className="w-full px-3 py-2 border border-[#cbd5e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#334155] mb-1">Father Name</label>
                                        <input type="text" name="fatherName" required className="w-full px-3 py-2 border border-[#cbd5e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#334155] mb-1">Family Name</label>
                                        <input type="text" name="familyName" required className="w-full px-3 py-2 border border-[#cbd5e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#334155] mb-1">Email Address</label>
                                    <input type="email" name="email" required className="w-full px-3 py-2 border border-[#cbd5e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent" />
                                </div>

                                <input type="hidden" name="job" value={selectedJob?.title || ''} />

                                <div>
                                    <label className="block text-sm font-medium text-[#334155] mb-1">Cover Message</label>
                                    <textarea name="message" rows="4" className="w-full px-3 py-2 border border-[#cbd5e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent" placeholder="Tell us why you're interested in this position..."></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#334155] mb-1">Upload CV (PDF or Word)</label>
                                    <div className="relative border-2 border-dashed border-[#cbd5e1] rounded-lg p-6 hover:border-[#3b82f6] transition-colors bg-[#f8fafc]">
                                        <input type="file" name="cv" accept=".pdf,.doc,.docx" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                                        <div className="text-center">
                                            <svg className="mx-auto h-12 w-12 text-[#94a3b8]" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="mt-2 text-sm text-[#475569]">
                                                <span className="font-medium text-[#3b82f6] hover:text-[#2563eb]">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="mt-1 text-xs text-[#64748b]">PDF, DOC, or DOCX up to 10MB</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6 gap-3">
                                    <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-[#475569] bg-[#f1f5f9] rounded-lg hover:bg-[#e2e8f0] transition-colors">Cancel</button>
                                    <button type="submit" className="px-6 py-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white rounded-lg hover:from-[#1e40af] hover:to-[#2563eb] transition-all shadow-md flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            <Benefits />
            <Testimonials />

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#2563eb] text-white">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold mb-3"
                    >
                        Ready to Join Our Team?
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 w-24 bg-[#93c5fd] mx-auto rounded-full mb-6"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg max-w-2xl mx-auto mb-8 text-[#bfdbfe]"
                    >
                        Explore our open positions and take the next step in your career journey with us.
                    </motion.p>
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)" }}
                        href="#open-positions"
                        className="inline-flex items-center px-6 py-3 bg-white text-[#1e3a8a] font-bold rounded-lg hover:bg-[#f1f5f9] transition-all shadow-lg transform"
                    >
                        <span>View Positions</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </motion.a>
                </div>
            </section>
        </>
    );
}
