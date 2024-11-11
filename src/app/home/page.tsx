// src/app/home/page.tsx
"use client";

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#005C39] text-black">
      {/* Navbar */}
      <header className="bg-[#004A32] text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manoa Munchies</h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/menu" className="hover:underline">Menu</Link>
            <Link href="/profile" className="hover:underline">Profile</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-4">Welcome to Manoa Munchies!</h2>
        <p>Discover your favorite campus meals and check out what’s available today.</p>
      </main>

      {/* Footer */}
      <footer className="bg-[#004A32] text-white py-4 text-center">
        <p>© 2024 Manoa Munchies. All rights reserved.</p>
      </footer>
    </div>
  );
}
