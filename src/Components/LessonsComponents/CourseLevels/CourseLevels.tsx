import React from "react";
import { Routes, Route } from "react-router-dom";
import Intermediate from "../../../features/Levels/Intermediate/Intermediate";
import Beginner from "../../../features/Levels/Beginner/Beginner";
import CourseButtons from "./CourseButtons";

const CourseLevels = () => {
  return (
    <div className="levels">

      <Routes>
        <Route path="/" element={<CourseButtons />} />
        <Route path="intermediate/*" element={<Intermediate />} />
        <Route path="beginner/*" element={<Beginner />}></Route>
      </Routes>
    </div>
  );
};

export default CourseLevels;