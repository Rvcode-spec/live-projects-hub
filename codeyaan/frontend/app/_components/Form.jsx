import React, { useState, useEffect } from "react";

export default function Form({ initialMode = "login" }) {
    const [isSignUp, setIsSignUp] = useState(initialMode === "signup");

    // Update form mode when Navbar changes the prop
    useEffect(() => {
        setIsSignUp(initialMode === "signup");
    }, [initialMode]);

    const toggleMode = () => setIsSignUp(!isSignUp);

    return (
        <div className=" w-full flex flex-col md:flex-row items-center justify-center p-6 md:p-10 gap-10">
            {/* Left Side — Image */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center ">
                {/* Overlay Text */}
                <div className="absolute  left-1/2 transform -translate-x-1/2 text-center px-6 w-[90%] md:w-2/2 lg:w-2/2 rounded-lg p-4">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                        Welcome to <span className="text-blue-600">Codeyaan</span>
                    </h2>
                    <p className="text-gray-800 mt-2 text-sm md:text-base">
                        A cloud-based Learning Management System (LMS) built with Node.js, Next.js, MongoDB, and AWS.
                        Secure dashboards for Admins, Staff, and Students.
                    </p>
                </div>

                {/* Image */}
                <img
                    src="/student.svg"
                    width={500}
                    height={500}
                    alt="Student with books"
                    className="w-full max-w-md object-contain"
                />
            </div>


            {/* Right Side — Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <form className="flex flex-col gap-5 w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {isSignUp ? "Create Account" : "Welcome Back"}
                    </h2>

                    {isSignUp && (
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {isSignUp && (
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    )}

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        {isSignUp ? "Sign Up" : "Login"}
                    </button>

                    <p className="text-sm text-center text-gray-600">
                        {isSignUp ? "Already have an account? " : "Don’t have an account? "}
                        <span
                            onClick={toggleMode}
                            className="text-blue-600 font-medium cursor-pointer hover:underline"
                        >
                            {isSignUp ? "Login" : "Sign Up"}
                        </span>
                    </p>
                </form>
            </div>

        </div>
    );
}
