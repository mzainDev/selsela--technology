"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CareerLayout({children}
){
    const pathname = usePathname();

    const isActive = (path) => {
        return pathname === path;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Career Navigation */}
            <div className="bg-white shadow">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between py-4">
                        <h1 className="text-xl font-bold text-blue-600">Career</h1>
                        <nav className="flex space-x-1 overflow-x-auto py-2 max-w-full md:space-x-4">
                            <Link
                                href="/career"
                                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${isActive("/career")
                                        ? "bg-blue-100 text-blue-700"
                                        : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                Jobs
                            </Link>
                            <Link
                                href="/career/hiring-process"
                                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${isActive("/career/hiring-process")
                                        ? "bg-blue-100 text-blue-700"
                                        : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                Hiring Process
                            </Link>
                            <Link
                                href="/career/diversity"
                                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${isActive("/career/diversity")
                                        ? "bg-blue-100 text-blue-700"
                                        : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                Diversity & FAQ
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            {children}
        </div>
    );
}
