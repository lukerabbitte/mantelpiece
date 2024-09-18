import React from 'react';
import Navbar from '@/lib/components/Navbar';
import '@/app/globals.css';

export const metadata = {
  title: "Mantelpiece",
  description: "Description of peace",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-4">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

export default RootLayout;