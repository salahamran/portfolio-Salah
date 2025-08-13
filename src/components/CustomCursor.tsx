'use client';
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Read theme changes from attribute
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
      if (currentTheme) setTheme(currentTheme);
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.innerWidth < 768) {
      cursor?.remove();
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      // offset so it's always centered under pointer
      const x = e.clientX - cursor.offsetWidth / 2;
      const y = e.clientY - cursor.offsetHeight / 2;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const addGrow = () => cursor?.classList.add('scale-100');
    const removeGrow = () => cursor?.classList.remove('scale-100');

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, .hover-target').forEach((el) => {
      el.addEventListener('mouseenter', addGrow);
      el.addEventListener('mouseleave', removeGrow);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button, .hover-target').forEach((el) => {
        el.removeEventListener('mouseenter', addGrow);
        el.removeEventListener('mouseleave', removeGrow);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{
        backgroundColor: theme === 'dark' ? '#A8FC5A' : 'var(--accent-color)',
      }}
    />
  );
};

export default CustomCursor;
