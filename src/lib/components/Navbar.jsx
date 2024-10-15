import React from 'react';
import ThemeToggle from '@/lib/components/ThemeToggle';

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center p-4">
        <h2>Caroline Kelly</h2>
        <ThemeToggle />
    </div>
  );
};

export default Navbar;