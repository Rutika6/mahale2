import { useState } from "react";
import "./AdminPage.css"; // We will update this next

const AdminPage = ({ onClose }) => {
  const [admins, setAdmins] = useState([]);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin");

  const resetForm = () => {
    setName("");
    setEmail("");
    setRole("admin");
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const entry = { id: Date.now(), name: name.trim(), email: email.trim() };

    if (role === "admin") setAdmins((s) => [...s, entry]);
    else setUsers((s) => [...s, entry]);

    resetForm();
  };

  const removeAdmin = (id) => setAdmins((s) => s.filter((a) => a.id !== id));
  const removeUser = (id) => setUsers((s) => s.filter((u) => u.id !== id));

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Administrative Console</h2>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>

      <div className="admin-grid">
        {/* Form Panel */}
        <form className="admin-form-box" onSubmit={handleAdd}>
          <h3>Add New Member</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button type="submit" className="add-btn">
            Add Member
          </button>
        </form>

        {/* Lists Panel */}
        <div className="members-list-box">
          <div className="list-section">
            <h3>Admins ({admins.length})</h3>
            {admins.length === 0 ? (
              <div className="empty-state">No admins added</div>
            ) : (
              <ul className="member-list">
                {admins.map((a) => (
                  <li key={a.id} className="member-item">
                    <div>
                      <span className="member-name">{a.name}</span>
                      <span className="member-email">{a.email}</span>
                    </div>
                    <button onClick={() => removeAdmin(a.id)} className="delete-btn">Remove</button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="list-section">
            <h3>Users ({users.length})</h3>
            {users.length === 0 ? (
              <div className="empty-state">No users added</div>
            ) : (
              <ul className="member-list">
                {users.map((u) => (
                  <li key={u.id} className="member-item">
                    <div>
                      <span className="member-name">{u.name}</span>
                      <span className="member-email">{u.email}</span>
                    </div>
                    <button onClick={() => removeUser(u.id)} className="delete-btn">Remove</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;