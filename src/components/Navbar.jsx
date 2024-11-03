import React from 'react';
import Link from "next/link";
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center p-4">
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;