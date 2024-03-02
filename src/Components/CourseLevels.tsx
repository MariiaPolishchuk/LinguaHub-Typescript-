
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Intermediate from './Levels/Intermediate/Intermediate';
import CourseButtons from './CourseButtons';

const CourseLevels = () => {
  return (
    <div className='levels'>
      <Routes>
        <Route path="/" element={<CourseButtons />} />
        <Route path="intermediate/*" element={<Intermediate />} />
      </Routes>
    </div>
  );
};

export default CourseLevels;