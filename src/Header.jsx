export default function Header({ currentPath }) {
  const isHome = currentPath === "/" || currentPath === "";
  return (
    <header className="site-header">
      <h1>🇮🇳 SkillSwap India</h1>
      <p>{isHome ? "Connect. Learn. Grow — Together." : "Get in Touch with Us"}</p>
      <nav className="nav">
        <a href="/" className={isHome ? "active" : ""}>🏠 Home</a>
        <a href="/contact" className={!isHome ? "active" : ""}>📩 Contact</a>
      </nav>
    </header>
  );
}
