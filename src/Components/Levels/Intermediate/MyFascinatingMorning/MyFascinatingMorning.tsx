
import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import Lesson from "./Lesson";
import Test from "./Test"; 
import Grammar from "./Grammar";
import Listening from "./Listening";

const MyFascinatingMorning: React.FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<number | null>(null); //  null, чтобы показать, что выбор еще не сделан

  const handleChange = (newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate("lesson");
    } else if (newValue === 1) {
      navigate("test");
    } else if (newValue === 2) {
      navigate("grammar");
    } else {
      navigate("listening");
    }
  };

  return (
    <div className="main-container-lessons">
      <h2 className="lesson-name">MyFascinatingMorning</h2>
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
        <Tab label="Listening" />
      </Tabs>
      
      <Routes>
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/test" element={<Test />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/listening" element={<Listening />} />
      </Routes>
    </div>
  );
};

export default MyFascinatingMorning;
