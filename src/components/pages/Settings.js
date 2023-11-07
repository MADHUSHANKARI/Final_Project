// ** Madhu ** //

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import AdminNavbar from '../AdminNavbar';

function Settings() {
  const [activeMainTab, setActiveMainTab] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [data, setData] = useState({
    Email: "",
    currentPassword:"",
    newPassword:""
  })

  const handleMainTabClick = (mainTab) => {
    setActiveMainTab(mainTab);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({...data,[id]:value})
  };

  const handlePasswordChange = () => {
    console.log(data);
    const url = 'http://localhost:5001/v2/change-password'
    axios.post(url , data).then((Response)=>{
        window.alert(Response.data);
    })
    // Handle change password logic here
    console.log('Changing password...');
  };

  const handleContactDetailsChange = () => {
    console.log({
      activeMainTab,
      newPhoneNumber,
    });
    // Handle change contact details logic here
    console.log('Changing contact details...');
  };

  return (
    <div>
      <AdminNavbar/>
    
    <div className="container mt-5">
      
      <h2>Settings</h2>
      <ul className="nav nav-tabs" id="settingsTabs">
        <li className="nav-item">
          <a
            className={`nav-link ${
              activeMainTab === 'changePassword' ? 'active' : ''
            }`}
            onClick={() => handleMainTabClick('changePassword')}
          >
            Change Password
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              activeMainTab === 'changePicture' ? 'active' : ''
            }`}
            onClick={() => handleMainTabClick('changePicture')}
          >
            Change Picture
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              activeMainTab === 'changeContactDetails' ? 'active' : ''
            }`}
            onClick={() => handleMainTabClick('changeContactDetails')}
          >
            Change Contact Details
          </a>
        </li>
      </ul>

      <div className="tab-content" id="settingsContent">
        {activeMainTab === 'changePassword' && (
          <div className="tab-pane fade show active" id="changePassword">
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                className="form-control"
                id="currentPassword"
                value={data.currentPassword}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                value={data.newPassword}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newEmail">New Email:</label>
              <input
                type="email"
                className="form-control"
                id="Email"
                value={data.Email}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary" onClick={handlePasswordChange}>
              Change Password
            </button>
          </div>
        )}

        {activeMainTab === 'changePicture' && (
          <div className="tab-pane fade show active" id="changePicture">
            <div className="form-group">
              <label htmlFor="changecoverphoto">Change Cover Photo</label>
              <input
                className="form-control"
                id="changecoverphoto"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="changeuserphoto">Change User Photo</label>
              <input
                className="form-control"
                id="changeuserphoto"
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary" onClick={handleChange}>
              Save changes
            </button>
          </div>
        )}

        {activeMainTab === 'changeContactDetails' && (
          <div className="tab-pane fade" id="changeContactDetails">
            
            <div className="form-group">
              <label htmlFor="newPhoneNumber">New Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="newPhoneNumber"
                value={newPhoneNumber}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary" onClick={handleContactDetailsChange}>
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Settings;
