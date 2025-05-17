'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [hide, setHide] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        setHide(top < window.innerHeight / 1.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden z-10">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          hide ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {isMounted && (
          <iframe
            title="3D background"
            src="https://my.spline.design/hellodistortingintro-3vcDxCJeUdhQ6vQaiIhzMrhA/"
            frameBorder="0"
            className="w-full h-full absolute top-0 left-0"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default Hero;
