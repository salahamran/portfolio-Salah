'use client';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage on first mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  // Toggle theme and store it
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className={`w-25 h-12 flex items-center rounded-full px-1 transition-colors ${
          isDark ? 'bg-blue-600' : 'bg-gray-300'
        }`}
      >
        
        <div    
          className={`bg-white w-11 h-10 rounded-full shadow-md transform transition-transform flex items-center justify-center  transition-transform duration-500 delay-100 ${
            isDark ? 'translate-x-12' : 'translate-x-0'
          }`}
        >
          {isDark ? (
            <SunIcon className="h-4 w-4 text-yellow-500" />
          ) : (
            <MoonIcon className="h-4 w-4 text-blue-500" />
          )}
        </div>
      </button>
    </div>
  );
}
