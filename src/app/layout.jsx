import React from 'react';
import Navbar from '@/lib/components/Navbar';
import '@/app/globals.css';
import { ThemeProvider } from '@/lib/components/ThemeProvider';

export const metadata = {
  title: "Mantelpiece",
  description: "Description of peace",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <Navbar />
          <main className="flex-grow p-4">
            {children}
          </main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;