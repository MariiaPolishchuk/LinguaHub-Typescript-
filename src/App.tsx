import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Components/Header/Header";
import Home from "./Components/Home-page/Home";
import Footer from "./Components/Footer/Footer";
import CourseLevels from "./Components/LessonsComponents/CourseLevels/CourseLevels";
import "./App.css";
import EditLessonsPage from "./Components/CMS/AdminPanel/EditLessonsPage";
import AdminPanel from "./Components/CMS/AdminPanel/AdminPanel";
import store from "./store";

function App() {
  const location = useLocation();
  const [user] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Provider store={store}>
      <div>
        <Header user={user} onLogout={() => {}} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/course/*" element={<CourseLevels />} />
          <Route path="/admin-panel/*" element={<AdminPanel levels={[]} />} />
          <Route
            path="/admin-panel/edit"
            element={<EditLessonsPage lessons={[]} />}
          />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
