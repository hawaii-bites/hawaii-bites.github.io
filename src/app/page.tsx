// src/app/page.tsx
"use client";  // This tells Next.js this is a client component

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');  // Redirect to login page
  }, [router]);

  return <div>Redirecting to login...</div>;
}
