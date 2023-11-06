import React from 'react';
import Navbar from './Navbar';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";
import './UserNotification.css';

// function UserNotification() {
const UserNotification = () => {
  return (
    <div classname="main"><Navbar />
      
      <div class="logo"></div>
      <div class="icon">
        <img src="image/bell.jpg" alt="Bell Icon" /><span>17</span>
      </div>
      <div class="notifibox" id ="box"></div>
      <h2>notification<span>17</span></h2>
      <div class="notifiitem">
      <img src="image/avatar1.png" alt="img"/>
      <div class="text">
          <h4>cus 1</h4>
          <p>hhhhhhhhhhhh</p>
        </div>
      </div>

      <div class="notifiitem">
      <img src="image/avatar2.png" alt="img"/>
        <div class="text">
          <h4>cus 2</h4>
          <p>hjhfjd</p>
        </div>
      </div>

      <div class="notifiitem">
      <img src="image/avatar3.png" alt="img"/>
        <div class="text">
          <h4>cus 3</h4>
          <p>hjhfjd</p>
        </div>
      </div>


    </div>
      );
    }
    
    export default UserNotification;
     
 
 



   
    <span>
     <ul>
       <li>
         <a href="#">notifications</a>
         <ul class="dropdown"></ul>
         <li><a href="#">name1</a></li>
         <li><a href="#">name1</a></li>
         <li><a href="#">name1</a></li>
       </li>
     </ul>
   </span> 
 



 <button type="button" class="icon-button"> 
 <span class="material-icons">notifications</span> 
 </button> 
 const notificationCount = 5; // Set your notification count here  */






