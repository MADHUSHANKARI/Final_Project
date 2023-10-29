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


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/user" element={<User/>}/>
          <Route path="/layout" element={<Layout/>}/>
          <Route path="/admin" element={<Admin/>}/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
