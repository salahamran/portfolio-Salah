export default function Footer() {
  return (
    <footer
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)' }}
    >
      {/* Big static background text */}
      <div className="absolute inset-5 flex justify-center items-center pointer-events-none">
        <h2
          className="text-[14vw] font-extrabold  leading-none select-none text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          PYTHON DEVELOPER
        </h2>
      </div>

      {/* Footer content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <p className="text-sm " style={{ color: 'var(--text-primary)' }}>
          © {new Date().getFullYear()} Salah Amran. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
