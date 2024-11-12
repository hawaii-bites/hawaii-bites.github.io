"use client";  // This tells Next.js this is a client component

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const validEmail = 'dkb25@hawaii.edu';
    const validPassword = 'MoonWalker769*';
    const validEmail2 = 'sethi3@hawaii.edu';
    const validPassword2 = 'Sword23';

    // Validate email and password
    if ((email === validEmail && password === validPassword) || (email === validEmail2 && password === validPassword2)) {
      alert('Login successful!');
      router.push('/home');
    } else {
      alert('Invalid UH email or password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Manoa Munchies Login</h2>
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
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
