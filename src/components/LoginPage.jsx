import { useState } from "react";
import "./LoginPage.css"; // Create this CSS file next

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (username === "root" && password === "root123") {
      onLogin({ username, role: "root" });
    } else if (username === "admin" && password === "admin123") {
      onLogin({ username, role: "admin" });
    } else if (username === "user" && password === "user123") {
      onLogin({ username, role: "user" });
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>MAHALE INDUSTRIES</h2>
        <p className="subtitle">Sign in to your account</p>
        
        {error && <p className="error-message">{error}</p>}

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter username"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="login-btn">
          Sign In
        </button>
        
        <div className="credentials-hint">
          <p>Test Credentials:</p>
          <small>root / root123</small><br />
          <small>admin / admin123</small><br />
          <small>user / user123</small>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;