import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-6">
      <div className="container mx-auto text-center space-y-2">
        <p className="text-sm">
          © {new Date().getFullYear()} Muhammad Umer Ahmed. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 text-sm">
          <a
            href="https://github.com/xorkho"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            GitHub
          </a>
          <span className="text-gray-600">|</span>
          <a
          href="https://www.linkedin.com/in/muhammad-umer-ahmed-65440225a"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          LinkedIn
        </a>

        </div>
      </div>
    </footer>
  );
}
