// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import About from './components/About';
import Login from './components/Login';
import User from './components/User';
import Layout from './components/Layout';
import Admin from './components/Admin';
import Messages from './components/Messages';
import ForgotPassword from './components/ForgotPassword';
import Settings from './components/pages/Settings';
import Bookings from './components/pages/Bookings';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import './App.css'


import Contact from './components/Contact';




function App() {
  const [isLoggedIn, setIsLoggedIn] =React.useState(false);

  return (
    <Router>
      <DndProvider backend={HTML5Backend}>

     
       <div className="App">
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/user" element={<User/>}/>
          <Route path="/layout" element={<Layout/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          <Route path="/settings" element={<Settings />} />

          <Route path="/Bookings" element={<Bookings />} />


          <Route path="/bookings" element={<Bookings />} />

          <Route path="/DragDrop" element={<DragDrop />} />

        </Routes>
      </div>
      </DndProvider>
    </Router>
  );
}

export default App;

