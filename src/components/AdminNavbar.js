import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminNavbar.css';

const AdminNavbar = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>Side Navbar</h3>
      </div>
      <ul className="list-unstyled components">
        <li>
          <a href="#settings">Settings</a>
        </li>
        <li>
          <a href="#messages">Messages</a>
        </li>
        <li>
          <a href="#logout">Logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
