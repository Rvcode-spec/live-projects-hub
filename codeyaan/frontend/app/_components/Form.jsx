'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Form({ initialMode = "login" }) {
  const [isSignUp, setIsSignUp] = useState(initialMode === "signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 🧭 Update title dynamically
  useEffect(() => {
    document.title = isSignUp ? "Sign Up - Codeyaan" : "Login - Codeyaan";
  }, [isSignUp]);

  // 🔥 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!email || !password || (isSignUp && !name)) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);

    const endpoint = isSignUp
      ? "http://localhost:5000/api/users/register"
      : "http://localhost:5000/api/users/login";

    const payload = isSignUp
      ? { username: name, email, password }
      : { email, password };

    try {
      console.log("🔹 Sending:", payload);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Log the entire response for debugging
      console.log("🔸 Response Status:", response.status);
      const data = await response.json().catch(() => ({}));
      console.log("🔸 Response Data:", data);

      if (response.ok) {
        console.log(isSignUp ? "✅ Signup success:" : "✅ Login success:", data);

        if (data.token) localStorage.setItem("token", data.token);

        // ✅ Redirect to Student Dashboard
        router.push("/student/dashboard");
      } else {
        console.error("❌ Server responded with error:", data);
        alert(data.message || `Failed: ${response.status}`);
      }
    } catch (error) {
      console.error("🚨 Network/Server error:", error);
      alert("Server not reachable — check backend port or CORS settings");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => setIsSignUp(!isSignUp);

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center p-2 md:p-10 gap-5">
      {/* Left Side — Image */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center">
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center px-6 w-[90%] md:w-2/2 lg:w-2/2 rounded-lg p-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Welcome to <span className="text-blue-600">Codeyaan</span>
          </h2>
          <p className="text-gray-800 mt-2 text-sm md:text-base">
                      Codeyaan is your personalized online learning platform where you can master coding, explore new technologies, and build your dream career with expert guidance.

          </p>
        </div>
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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full sm:max-w-sm bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>

          {isSignUp && (
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-700 to-blue-500 hover:shadow-lg hover:scale-105"
            } text-white py-3 rounded-lg transition-all duration-300`}
          >
            {loading ? "Please wait..." : isSignUp ? "Sign Up" : "Login"}
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
