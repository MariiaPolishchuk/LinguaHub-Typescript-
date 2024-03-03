import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Components/Header";
import Home from "./Components/Home-page/Home";
import Footer from "./Components/Footer";
import CourseLevels from "./Components/CourseLevels";
import "./App.css";
import store from "./store";

function App() {
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [showModeratorBoard, setShowModeratorBoard] = useState(true);
  const [showAdminBoard, setShowAdminBoard] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Provider store={store}>
      <div>
        <Header
          user={user}
          // showModeratorBoard={showModeratorBoard}
          // showAdminBoard={showAdminBoard}
          onLogout={() => {}}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/course/*" element={<CourseLevels />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

