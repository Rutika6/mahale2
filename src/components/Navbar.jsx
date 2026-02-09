import "./Navbar.css"; // We will create this CSS file next

const Navbar = ({ setShowAdmin }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MAHALE INDUSTRIES</div>
      <div className="navbar-links">
        <button className="nav-btn" onClick={() => setShowAdmin(false)}>
          Dashboard
        </button>
        <button className="nav-btn" onClick={() => setShowAdmin(true)}>
          Admin Console
        </button>
      </div>
    </nav>
  );
};

export default Navbar;