'use client';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle({ fixed = true }: { fixed?: boolean }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      setIsDark(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      setIsDark(prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.setAttribute('data-theme', newIsDark ? 'dark' : 'light');
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <div className={fixed ? 'fixed md:top-6 md:right-6 z-50' : ''}>
      <button
        onClick={toggleTheme}
        className={`w-18 h-9 flex items-center rounded-full px-1 transition-colors ${
          isDark ? 'bg-[#A8FC5A]' : 'bg-blue-600'
        }`}
      >
        <div
          className={`bg-white w-7 h-7 rounded-full shadow-md flex items-center justify-center transform transition-transform duration-500 delay-100 ${
            isDark ? 'translate-x-9' : 'translate-x-0'
          }`}
        >
          {isDark ? (
            <MoonIcon className="h-4 w-4 text-[#A8FC5A]" />
          ) : (
            <SunIcon className="h-4 w-4 text-blue-600" />
          )}
        </div>
      </button>
    </div>
  );
}
