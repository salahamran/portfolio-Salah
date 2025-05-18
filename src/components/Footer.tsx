const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <p>© {new Date().getFullYear()} Salah Amran. All rights reserved.</p>
          <p style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.5rem" }}>
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    );
};

export default Footer;
