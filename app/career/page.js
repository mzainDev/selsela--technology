"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CompanyIntro from "./companyintro/page";
import ExportedImage from "next-image-export-optimizer";

// import Navbar2 from "../components/Navbar2";
// import Footer from "../components/Footer";
// import GoTopButton from "../components/GoTopButton";

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Load SweetAlert from CDN
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
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
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Close the form
        setShowForm(false);
        // Show sweet alert success message
        window.Swal.fire({
          title: "Success!",
          text: "Your application has been submitted successfully!",
          icon: "success",
          confirmButtonText: "Great!",
          confirmButtonColor: "#3085d6",
        });
      } else {
        window.Swal.fire({
          title: "Error!",
          text: "There was a problem submitting your application. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      window.Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#d33",
      });
    }
  };

  // Sample job data - in a real app this would come from an API or CMS
  const jobs = [
    {
      id: 1,
      title: "Next.js Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Join our engineering team to build scalable and performant web applications using Next.js and React.",
            requirements: [
        "3+ years experience with React",
        "Experience with Next.js",
        "Strong JavaScript/TypeScript skills",
        "Understanding of SEO principles"
      ]
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description:
        "Join our design team to create beautiful, intuitive interfaces that delight users and solve complex problems.",
           requirements: [
        "5+ years of UX/UI design experience",
        "Proficiency in Figma and Adobe Creative Suite",
        "Portfolio demonstrating user-centered design",
        "Experience with design systems"
      ]
    },
    {
      id: 3,
      title: "Marketing Manager",
      department: "Marketing",
      location: "remote",
      type: "Full-time",
      description:
        "Lead our marketing efforts to build brand awareness and drive customer acquisition through creative campaigns.",
      requirements: [
        "5+ years of marketing experience",
        "Strong analytical skills",
        "Experience with digital marketing tools",
        "Excellent communication skills"
      ]
    },
    {
      id: 4,
      title: "Graphic Designer",
      department: "graphics",
      location: "Remote",
      type: "Full-time",
      description:
        "Create visually stunning graphics and layouts for our marketing materials, website, and social media channels.",
      requirements: [
        "3+ years of graphic design experience",
        "Proficiency in Adobe Creative Suite",
        "Strong portfolio showcasing design skills",
        "Ability to work under tight deadlines"
      ]
    },
    {
      id: 5,
      title: "SEO Specialist",
      department: "Marketing",
    
      location: "Remote",
      type: "Full-time",
      description:
        "Optimize our website and content for search engines to improve visibility and drive organic traffic.",
      requirements: [
        "3+ years of SEO experience",
        "Proficiency in SEO tools (e.g., Google Analytics, SEMrush)",
        "Strong understanding of on-page and off-page SEO",
        "Excellent analytical skills"
      ]
    },
    {
      id: 6,
      title: "Content Writer",
      department: "Content",
   
      location: "Remote",
      type: "Full-time",
      description:
        "Create engaging and informative content for our blog, website, and social media channels to attract and retain customers.",
      requirements: [
        "3+ years of content writing experience",
        "Strong writing and editing skills",
        "Ability to write for different audiences",
        "Familiarity with SEO best practices"
      ]
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
      {/* <Navbar2 /> */}

      {/* Company Intro */}
      <CompanyIntro />

      {/* Open Positions */}
      



            <section id="open-positions" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#dbeafe]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                }}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 border-t-4 border-[#3b82f6]"
              >
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-[#64748b] mb-4">
                  {/* ... existing department, location, type spans ... */}
                </div>
                <p className="mb-4 text-[#475569]">{job.description}</p>
                
                {/* Requirements Link */}
                <div className="mb-4">
                  <button
                    onClick={() => {
                      window.Swal.fire({
                        title: 'Job Requirements',
                        html: `
                          <ul class="text-left list-disc pl-6">
                            ${job.requirements.map(req => `<li>${req}</li>`).join('')}
                          </ul>
                        `,
                        confirmButtonText: 'Close',
                        confirmButtonColor: '#3b82f6',
                      });
                    }}
                    className="text-[#3b82f6] hover:text-[#2563eb] underline text-sm"
                  >
                    View Requirements
                  </button>
                </div>

                {/* Requirements Checkbox */}
                <div className="mb-4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`requirements-${job.id}`}
                    className="rounded border-gray-300 text-[#3b82f6] focus:ring-[#3b82f6]"
                    onChange={(e) => {
                      if (!e.target.checked) {
                        window.Swal.fire({
                          title: 'Requirements',
                          text: 'Please confirm that you meet all requirements before applying',
                          icon: 'warning',
                          confirmButtonColor: '#3b82f6',
                        });
                      }
                    }}
                  />
                  <label htmlFor={`requirements-${job.id}`} className="text-sm text-[#64748b]">
                    I confirm that I meet all requirements
                  </label>
                </div>

                {/* Apply Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const checkbox = document.getElementById(`requirements-${job.id}`);
                    if (!checkbox.checked) {
                      window.Swal.fire({
                        title: 'Requirements',
                        text: 'Please confirm that you meet all requirements before applying',
                        icon: 'warning',
                        confirmButtonColor: '#3b82f6',
                      });
                      return;
                    }
                    setSelectedJob(job);
                    setShowForm(true);
                  }}
                  className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white rounded-lg hover:from-[#1e40af] hover:to-[#2563eb] transition-all shadow-md cursor-pointer"
                >
                  <span>Apply Now</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
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
                <h2 className="text-2xl font-bold text-[#0f172a]">
                  Apply for{" "}
                  <span className="text-[#2563eb]">{selectedJob?.title}</span>
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-[#cbd5e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-1">
                      Father Name
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      required
                      className="w-full px-3 py-2 border border-[#cbd5e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-1">
                      Family Name
                    </label>
                    <input
                      type="text"
                      name="familyName"
                      required
                      className="w-full px-3 py-2 border border-[#cbd5e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-[#cbd5e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  />
                </div>

                <input
                  type="hidden"
                  name="job"
                  value={selectedJob?.title || ""}
                />

                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-1">
                    Cover Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full px-3 py-2 border border-[#cbd5e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    placeholder="Tell us why you're interested in this position..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-1">
                    Upload CV (PDF or Word)
                  </label>
                  <div className="relative border-2 border-dashed border-[#cbd5e1] rounded-lg p-6 hover:border-[#3b82f6] transition-colors bg-[#f8fafc]">
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-[#94a3b8]"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="mt-2 text-sm text-[#475569]">
                        <span className="font-medium text-[#3b82f6] hover:text-[#2563eb]">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className="mt-1 text-xs text-[#64748b]">
                        PDF, DOC, or DOCX up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6 gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-[#475569] bg-[#f1f5f9] rounded-lg hover:bg-[#e2e8f0] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white rounded-lg hover:from-[#1e40af] hover:to-[#2563eb] transition-all shadow-md flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}

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
                  Competitive salary, 401(k) matching, and equity options for
                  all employees.
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

      {/* <Testimonials /> */}

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
                  Working at YourCompany has been the highlight of my career.
                  The collaborative environment and opportunity to work on
                  meaningful projects keeps me engaged and excited to come to
                  work every day.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <ExportedImage
                      unoptimized={true}
                      src="images/sarahjackson.jpg"
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
                    <ExportedImage
                      unoptimized={true}
                      src="images/michaelchen.jpg"
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
                  The flexible schedule allows me to be there for my family
                  while still doing work that I'm passionate about.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <ExportedImage
                      src="images/elena.jpg"
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

      {/* CTA Section */}
      {/* <section className="py-16 md:py-20 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#2563eb] text-white">
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
            Explore our open positions and take the next step in your career
            journey with us.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)",
            }}
            href="#open-positions"
            className="inline-flex items-center px-6 py-3 bg-white text-[#1e3a8a] font-bold rounded-lg hover:bg-[#f1f5f9] transition-all shadow-lg transform"
          >
            <span>View Positions</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.a>
        </div>
      </section> */}


    </>
  );
}
