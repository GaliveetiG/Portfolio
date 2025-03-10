export const Header = () => {
  return <div className="flex justify-center items-center fixed top-3 w-full z-10 overflow-hidden">
    <nav className="flex gap-1 p-0.5 Font-serif border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#Home" className="nav-item">Home</a>
      <a href="#About" className="nav-item">About</a>
      <a href="#Projects" className="nav-item">Projects</a>
      <a href="#Experience" className="nav-item">Experience</a>
    </nav>

  </div>;
};
