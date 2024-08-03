import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./shared/ui/Header/Header";
import Home from "./features/HomePage/HomePage";
import Footer from "./shared/ui/Footer/Footer";
import CourseLevels from "./Components/LessonsComponents/CourseLevels/CourseLevels";
import "./App.css";
import EditLessonsPage from "./Components/CMS/CMS-pages/EditLessonsPage";
import AdminPanel from "./Components/CMS/AdminPanel/AdminPanel";
import store from "./store";
import LessonList from "./Components/CMS/AdminPanel/LessonList";
import React from "react";

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
          <Route
            path="/admin-panel/my-lessons"
            element= {<LessonList lessons={[]} />} 
          />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
