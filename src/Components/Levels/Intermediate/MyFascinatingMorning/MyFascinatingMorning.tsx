
import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Test from "./Test";
import Grammar from "./Grammar";
import Listening from "./Listening";
import "../../../../styles/Lessons.css";
import Lesson from "./Lesson";
import { Button } from "@material-ui/core";


const MyFascinatingMorning: React.FC = () => {
  const navigate = useNavigate();
  const [showStartButton, setShowStartButton] = useState(true);
  const [] = useState(0);


  const handleStart = () => {
    setShowStartButton(false);
    navigate("/course/intermediate/myfascinatingmorning/lesson"); 
  };

  return (
    <div className="main-container-lessons">
      <div className="start-lesson">
     
      <h2 className="lesson-name">MyFascinatingMorning</h2>
      <div className="lesson-wrapper"></div>
      <Link className="back-link" to="/course/intermediate">
        &#8592;
      </Link>
      
      </div>
      
      {/* <div className="lesson-wrapper"></div> */}
     
      {showStartButton && (
        <div>
          <p>Описание темы здесь</p>
          <Button
            className="lesson-button"
            variant="contained"
            onClick={handleStart}
          >
            Start 
          </Button>
        </div>
      )}
      {!showStartButton && (
        <>
          <Routes>
            <Route path="/lesson" element={<Lesson />} />
            <Route path="/test" element={<Test />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/listening" element={<Listening />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default MyFascinatingMorning;
