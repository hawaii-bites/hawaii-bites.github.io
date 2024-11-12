
"use client";

import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#005C39] text-black">
      <Navbar />            {/* Render the Navbar component */}
      <Home />       {/* Render the MainContent component */}
      <Footer />            {/* Render the Footer component */}
    </div>
  );
}
