export default function Footer() {
  return (
    <footer className="relative py-28 bg-white text-black overflow-hidden">
      {/* Big static background text */}
      <div className="absolute inset-5 flex justify-center items-center pointer-events-none">
        <h2 className="text-[14vw] font-extrabold opacity-60 leading-none select-none text-center">
          PYTHON DEVELOPER
        </h2>
      </div>

      {/* Optional content inside footer */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <p className="text-sm opacity-60">© {new Date().getFullYear()} Salah Amran. All rights reserved.</p>
      </div>
    </footer>
  );
}
