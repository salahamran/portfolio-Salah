'use client';
import Image from 'next/image';
import { FaInstagram, FaGithub, FaTelegram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              {/* Light theme profile image */}
              <Image
                src="/profile.jpg"
                alt="Profile Light"
                fill
                style={{ objectFit: 'cover', display: 'var(--light-photo-display)' }}
                priority
              />
              {/* Dark theme profile image */}
              <Image
                src="/profile-dark.png"
                alt="Profile Dark"
                fill
                style={{ objectFit: 'cover', display: 'var(--dark-photo-display)' }}
                priority
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                Salah Amran
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Python Developer
              </p>
            </div>
          </div>

          <div className="flex gap-4 text-lg" style={{ color: 'var(--text-secondary)' }}>
            <a href="#" aria-label="GitHub" className="hover:text-blue-600">
              <FaGithub />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-600">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Telegram" className="hover:text-blue-600">
              <FaTelegram />
            </a>
          </div>

          <div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              contact me
            </p>
            <p className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
              salah.amran@hotmail.com
            </p>
          </div>

          <p style={{ color: 'var(--text-primary)' }}>
            Hit me up if you’re looking for a fast, reliable Python-developer who can bring your vision to life.
          </p>

          <button
            className="px-6 py-3 rounded-full flex items-center gap-3 text-sm shadow transition-transform hover:scale-105"
            style={{ backgroundColor: 'var(--accent-color)', color: 'var(--text-button)' }}
          >
            <a href="#name_input">Contact me</a>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative z-10">
          {/* floating behind */}
          <div className="absolute inset-0 pointer-events-none z-[-1]">
            <Image
              src="/3d/knot.png"
              alt="knot"
              width={1200}
              height={1200}
              style={{ objectFit: 'cover', display: 'var(--light-photo-display)' }}
              className="absolute top-[11%] right-[3.3%] animate-float"
            />
            <Image
              src="/3d/dark/sphere-dark.png"
              alt="sphere"
              width={1200}
              height={1200}
              className="absolute top-[11%] right-[3.3%] animate-float"
              style={{ objectFit: 'cover', display: 'var(--dark-photo-display)' }}
              priority
              />
          </div>

          <div className="absolute -top-10 -left-10 w-[120%] h-[120%] rounded-full blur-3xl opacity-30 z-[-1]" style={{ backgroundColor: 'var(--accent-color-light)' }} />
          
          <form
            id="contact_form"
            className="rounded-2xl shadow-lg p-8 space-y-6"
            style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}
          >
            <h3 className="text-lg font-semibold">Leave me a message</h3>

            <input
              id="name_input"
              type="text"
              placeholder="write your name"
              className="w-full px-4 py-3 rounded-lg"
              style={{
                backgroundColor: 'var(--form-input-bg)',
                color: 'var(--text-primary)',
              }}
            />
            <input
              type="email"
              placeholder="username@mail.com"
              className="w-full px-4 py-3 rounded-lg"
              style={{
                backgroundColor: 'var(--form-input-bg)',
                color: 'var(--text-primary)',
              }}
            />
            <textarea
              rows={4}
              placeholder="write your message"
              className="w-full px-4 py-3 rounded-lg resize-none"
              style={{
                backgroundColor: 'var(--form-input-bg)',
                color: 'var(--primary)',
              }}
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              style={{
                backgroundColor: 'var(--accent-color)',
                color: 'var(--text-button)',
              }}
            >
              Contact me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
