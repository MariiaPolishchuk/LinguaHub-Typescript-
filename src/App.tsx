// import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Header from './Components/Header';
// import Home from "./Components/Home";
// import Footer from "./Components/Footer";
// import CourseLevels from "./Components/CourseLevels";
// import './App.css';

// function App() {
//   const location = useLocation();
//   const [user, setUser] = useState(null); 
//   const [showModeratorBoard, setShowModeratorBoard] = useState(true); 
//   const [showAdminBoard, setShowAdminBoard] = useState(true); 

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   return (
//     <div>
//       <Header 
//         user={user} 
//         showModeratorBoard={showModeratorBoard} 
//         showAdminBoard={showAdminBoard} 
//         onLogout={() => {}} 
//       />
//       <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/course/*" element={<CourseLevels />} />
//         </Routes>
//       <Footer />
//     </div>
//   );
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// export default App;

import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from './Components/Header';
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import CourseLevels from "./Components/CourseLevels";
import './App.css';

function App() {
  const location = useLocation(); // Переместили useLocation() сюда

  const [user, setUser] = useState(null); 
  const [showModeratorBoard, setShowModeratorBoard] = useState(true); 
  const [showAdminBoard, setShowAdminBoard] = useState(true); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Header 
        user={user} 
        showModeratorBoard={showModeratorBoard} 
        showAdminBoard={showAdminBoard} 
        onLogout={() => {}} 
      />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/course/*" element={<CourseLevels />} />
        </Routes>
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
