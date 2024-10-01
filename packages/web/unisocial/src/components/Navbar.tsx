'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export function Navbar({ className = '' }) {
  return (
    <nav className={`py-4 px-6 ${className} fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Unisocial
          </span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-colors">
            Home
          </Link>
          <Link href="/features" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-colors">
            Contact
          </Link>
          <a 
            href="https://github.com/yourusername/yourrepository" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-colors"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}