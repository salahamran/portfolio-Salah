'use client';
import Image from 'next/image';
import { FaInstagram, FaGithub, FaTelegram } from 'react-icons/fa';
export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={64}
              height={64}
              className="rounded-full ring-4 "
            />
            <div>
              <h3 className="text-xl font-semibold">Salah Amran</h3>
              <p className="text-sm text-neutral-600">Python Developer</p>
            </div>
          </div>

          <div className="flex gap-4 text-lg text-neutral-700">
            <a href="#" className="hover:text-blue-600"><FaGithub /></a>
            <a href="#" className="hover:text-blue-600"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-600"><FaTelegram /></a>
          </div>

          <div>
            <p className="text-sm text-neutral-400">contact me</p>
            <p className="text-lg font-bold">salah.amran@hotmail.com</p>
          </div>

          <p className="text-neutral-700">
            Hit me up if you’re looking for a fast, reliable Python-developer who can bring your vision to life.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 text-sm shadow">
             <span className="text-lg"></span>
            <a href="#name_input">Contact me</a>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative z-10">
      {/* floating behind */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        <Image src="/3d/knot.png" alt="knot" width={1200} height={1200} className="absolute top-2/90 right-2/60 animate-float " />
      </div>
      
          <div className="absolute -top-10 -left-10 w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl opacity-30 z-[-1]" />
          <form id='contact_form' className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <h3 className="text-lg font-semibold">Leave me a message</h3>

            <input
            id='name_input'
              type="text"
              placeholder="write your name"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200"
            />
            <input
              type="email"
              placeholder="username@mail.com"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200"
            />
            <textarea
              rows={4}
              placeholder="write your message"
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
