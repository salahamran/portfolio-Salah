'use client';
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Disable on small screens
    if (window.innerWidth < 768 || !cursor) {
      cursor?.remove();
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const addGrow = () => cursor?.classList.add('scale-150');
    const removeGrow = () => cursor?.classList.remove('scale-150');

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
      className="fixed top-0 left-0 w-5 h-5 bg-blue-500 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  );
};

export default CustomCursor;
