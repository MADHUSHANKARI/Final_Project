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
<<<<<<< HEAD
// import Messages from './components/Messages';
=======
import Messages from './components/Messages';
>>>>>>> b45d2c7e0480d8be7bb00db1c7d8070cb4b2129d
import ForgotPassword from './components/ForgotPassword';
import Settings from './components/pages/Settings';


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
<<<<<<< HEAD
          {/* <Route path="/messages" element={<Messages/>}/> */}
=======
          <Route path="/messages" element={<Messages/>}/>
>>>>>>> b45d2c7e0480d8be7bb00db1c7d8070cb4b2129d
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// // App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import SignUp from './components/SignUp';
// import About from './components/About';
// import Login from './components/Login';
// import User from './components/User';
// import Layout from './components/Layout';
// import Admin from './components/Admin';
// import ForgotPassword from './components/ForgotPassword';
// import UserNotification from './components/UserNotification';
 

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       <div className="App">
         
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/user" element={<User/>}/>
//           <Route path="/layout" element={<Layout/>}/>
//           <Route path="/admin" element={<Admin/>}/>
//           <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
//           <Route path="/usernotification" element={<UserNotification/>}/>

//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
