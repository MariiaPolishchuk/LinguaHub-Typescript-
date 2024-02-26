
// import React, { useState } from "react";
// import { useNavigate, Routes, Route } from "react-router-dom";
// import { Tabs, Tab } from "@material-ui/core";
// import Lesson from "./Lesson";
// import Test from "./Test"; 
// import Grammar from "./Grammar";

// const MyFascinatingMorning: React.FC = () => {
//   const navigate = useNavigate();
//   const [value, setValue] = useState(0);

//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//     if (newValue === 0) {
//       navigate("lesson");
//     } else if (newValue === 1) {
//       navigate("test");
//     } else {
//       navigate("grammar");
//     }
//   };

//   return (
//     <div className="main-container-lessons">
//        <h2>MyFascinatingMorning</h2>
//       <Tabs
//         className="lesson-tabs"
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="primary"
//         centered
//       >
//         <Tab label="Reading" />
//         <Tab label="Vocabulary Practise" />
//         <Tab label="Grammar Practise" />
//       </Tabs>

//       <Routes>
//         <Route path="/lesson" element={<Lesson />} />
//         <Route path="/test" element={<Test />} />
//         <Route path="/grammar" element={<Grammar />} />
//       </Routes>
//     </div>
//   );
// };

// export default MyFascinatingMorning;
import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import Lesson from "./Lesson";
import Test from "./Test"; 
import Grammar from "./Grammar";

const MyFascinatingMorning: React.FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<number | null>(null); // Используем null, чтобы показать, что выбор еще не сделан

  const handleChange = (newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate("lesson");
    } else if (newValue === 1) {
      navigate("test");
    } else {
      navigate("grammar");
    }
  };

  return (
    <div className="main-container-lessons">
      <h2>MyFascinatingMorning</h2>
      <Tabs
        className="lesson-tabs"
        value={value !== null ? value : false}
        onChange={(event, newValue) => handleChange(newValue)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Reading" />
        <Tab label="Vocabulary Practise" />
        <Tab label="Grammar Practise" />
      </Tabs>
      
      <Routes>
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/test" element={<Test />} />
        <Route path="/grammar" element={<Grammar />} />
      </Routes>
    </div>
  );
};

export default MyFascinatingMorning;
