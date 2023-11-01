import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminNavbar.css';
import { FaTh, FaBars } from "react-icons/fa"
import { NavLink } from 'react-bootstrap';


const AdminNavbar = ({ childern }) => {
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/notification",
      name: "Notification",
      icon: <FaTh />
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <FaTh />
    },
    {
      path: "/",
      name: "Logout",
      icon: <FaTh />
    }
  ]
  return (
    <div className='container'>
      <div style={{width: isOpen ? "250px" : "50px"}} className='sidebar'>
        <div className='top_section'>
          <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Logo</h1>
          <div style={{margin_left: isOpen ? "50px" : "0px"}} className='bars'>
            <FaBars onClick={toggle} />
          </div>
        </div>

        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className='link' activeClassName="active">
              <div className='icon'>{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
            </NavLink>
          ))
        }

      </div>
      <main>{childern}</main>
    </div>
  );
}

export default AdminNavbar;
