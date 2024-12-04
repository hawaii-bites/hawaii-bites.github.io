"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import supabase from '@/lib/supabaseClient';



export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate UH Email
    if (!formData.email.endsWith("@hawaii.edu")) {
      setErrorMessage("You must use a UH Manoa email (e.g., name@hawaii.edu).");
      return;
    }

    try {
      // Insert into Supabase Users Table
      const { data, error } = await supabase
        .from("Users")
        .insert([
          {
            email: formData.email,
            password: formData.password, // Use hashed passwords in production.
            firstname: formData.firstName, // Ensure column name matches schema
            lastname: formData.lastName, // Ensure column name matches schema
          },
        ]);

      if (error) {
        setErrorMessage("Error creating account. Please try again.");
        console.error("Supabase Error:", error.message);
      } else {
        alert("Account created successfully! Redirecting to login...");
        router.push("/login");
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
      setErrorMessage("Unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Hawaii Bites Sign-Up
        </h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-black"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 block w-full p-2 bg-white text-black border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:border-green-500"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-black"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 block w-full p-2 bg-white text-black border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:border-green-500"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              UH Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2 bg-white text-black border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:border-green-500"
              placeholder="name@hawaii.edu"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full p-2 bg-white text-black border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:border-green-500"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
