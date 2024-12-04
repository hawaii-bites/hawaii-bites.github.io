"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Hard-coded email and password for temporary access
    const allowedEmail = "dkb25@hawaii.edu";
    const allowedPassword = "SpaceCadet88";

    if (email === allowedEmail && password === allowedPassword) {
      alert("Login successful!");
      router.push("/home"); // Redirect to home page
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Hawaii Bites Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-black">UH Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 bg-white text-black border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:border-green-500"
              placeholder="name@hawaii.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 bg-white text-black border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:border-green-500"
              placeholder="Enter your UH password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-green-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
