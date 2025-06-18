'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="scroll-mt-20 min-h-screen py-20 bg-white z-20 relative"
      style={{ backgroundColor: "black", padding: "0rem 0", overflow: "hidden", backgroundImage: "url('/about-bg.jpg')" }}
    >
      <motion.div
         initial={{ opacity: 0, scale: 0.8 }}
         animate={inView ? { opacity: 0.15, scale: 1.2 } : {}}
         transition={{ duration: 1.5, ease: 'easeOut' }}
         className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-20 z-0"
      />

      <div className="container">
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
            className="about-grid"
          >
          
              {/* Image Column */}
              <div className="image-column-container">
                <div className="image-column-inner framed-photo hover:animate-photo-wiggle transition-transform duration-500">
                  <div className="image-overlay"></div>
                </div>
                <div className="image-glow"></div>
              </div>

            {/* Content Column */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    width: "0.5rem",
                    height: "0.5rem",
                    backgroundColor: "#ffffff",
                    borderRadius: "50%",
                  }}
                ></span>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  About Me
                </span>
              </div>

              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  color: "#ffffff",
                  marginBottom: "0.5rem",
                  lineHeight: "1.2",
                }}
              >
                Hi! Friend
              </h2>

              <h3
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "500",
                  color: "#9ca3af",
                  marginBottom: "1.5rem",
                  lineHeight: "1.2",
                }}
              >
                My name is Salah Amran!
              </h3>

              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                  maxWidth: "600px",
                }}
              >
                Egypt is where i born, I'ms Passionate Python Developer, Former Street-photographer willing to create
                technology and make better future.
              </p>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  margin: "2rem 0",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    borderRadius: "50%",
                    backgroundColor: "#0066ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                >
                  Skills And Technologies
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                }}
              >
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#d1d5db",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    fontSize: "0.875rem",
                  }}
                >
                  Enhanced UX
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#d1d5db",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    fontSize: "0.875rem",
                  }}
                >
                  Boosted Conversions
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#d1d5db",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    fontSize: "0.875rem",
                  }}
                >
                  Fast Loading
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#d1d5db",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    fontSize: "0.875rem",
                  }}
                >
                  SEO Optimized
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#d1d5db",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    fontSize: "0.875rem",
                  }}
                >
                  Customizable
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#d1d5db",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    fontSize: "0.875rem",
                  }}
                >
                  Increased Engagement
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#d1d5db",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    fontSize: "0.875rem",
                  }}
                >
                  Expandable
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#d1d5db",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    fontSize: "0.875rem",
                  }}
                >
                  Secure
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#d1d5db",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    fontSize: "0.875rem",
                  }}
                >
                  User-Friendly
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <a
                  href="#contact"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0.375rem",
                    fontWeight: "500",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Contact Now
                </a>
                <a
                  href="#projects"
                  style={{
                    backgroundColor: "#0066ff",
                    color: "#ffffff",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0.375rem",
                    fontWeight: "500",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  View Projects
                </a>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginLeft: "1rem",
                  }}
                >
                  

                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    
  );
};

export default About;
