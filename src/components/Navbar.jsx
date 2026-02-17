import "./Navbar.css";

const Navbar = ({ setShowAdmin, user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
    setShowAdmin(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MAHALE INDUSTRIES</div>
      <div className="navbar-links">
        <button className="nav-btn" onClick={() => setShowAdmin(false)}>
          Dashboard
        </button>
        
        {/* RESTRICTION: Only Admin and Root see this button */}
        {(user.role === 'admin' || user.role === 'root') && (
          <button className="nav-btn" onClick={() => setShowAdmin(true)}>
            Admin Console
          </button>
        )}
        
        <div className="user-info">
          <span>({user.role})</span>
          <button className="nav-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;