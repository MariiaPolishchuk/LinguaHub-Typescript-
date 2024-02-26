// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// // import Beginner from './Levels/Beginner/Beginner';
// import Intermediate from './Levels/Intermediate/Intermediate';
// // import Advanced from './Levels/Advanced/Advanced';
// import CourseButtons from './CourseButtons';

// const CourseLevels = () => {
//   return (
//     <div className='levels'>
//       <Routes>
//         <Route path="/" element={<CourseButtons />} />
//         {/* <Route path="beginner/*" element={<Beginner />} /> */}
//         <Route path="intermediate/*" element={<Intermediate />} />
//         {/* <Route path="advanced/*" element={<Advanced />} /> */}
//       </Routes>
//     </div>
//   );
// };

// export default CourseLevels;

// CourseLevels.js
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
