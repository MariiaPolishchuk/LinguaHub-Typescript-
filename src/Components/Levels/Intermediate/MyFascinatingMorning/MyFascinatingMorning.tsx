import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Test from "./Test";
import Grammar from "./Grammar";
import Listening from "./Listening";
import Lesson from "./Lesson";
import "../../../../styles/LessonDescription.css";
import DragDropMFM from "./DragDropMFM";
import Layout from "./Tabs/Layout";
import Synonyms from "../../../../features/Find-synonyms/Synonyms";
import { synonyms, words } from "./SynonymsData";
import VocabularyPractice from "../../../../features/VocabularyDragText/VocabularyPractise";
import vocabularyData from "./data";
import VocabularyPracticePage from "./VocabularyPracticePage";

const MyFascinatingMorning: React.FC = () => {
  const navigate = useNavigate();
  const [showStartButton, setShowStartButton] = useState(true);

  const handleStart = () => {
    setShowStartButton(false);
    navigate("/course/intermediate/my-fascinating-morning/lesson");
  };

  return (
    <div className="main-container-lessons">
      <div className="start-lesson">
        {/* <img className="lesson-name-icon" src="/src/assets/images/icons/dd.png" alt="" /> */}
        <h2 className="lesson-name">MyFascinatingMorning</h2>
        <Link className="back-link" to="/course/intermediate">
          &lt;Topics
        </Link>
      </div>
      {showStartButton && (
        <div className="description">
          <div className="description-content">
            <img
              className="descr-img"
              src="/src/assets/images/descrMyFascinatingMorning.png"
              alt=""
            />
            <div className="text description-text">
              <p>practice the use of present tenses!</p>
              <p>
                pump your voc with the plenty of multitasking exercises and
                extensive glossary!
              </p>
              <p>
                watch the video, work on interactive listening and upgrade your
                level of speech perceiving!
              </p>
              <p>don't forget to work on Quizlet!</p>
            </div>
          </div>
          <Link
            to="/course/intermediate/my-fascinating-morning/lesson"
            className="lesson-link"
            onClick={handleStart}
          >
            Start &gt;
          </Link>
        </div>
      )}
      {!showStartButton && (
        <>
          <Layout>
            <Routes>
              <Route path="/lesson/" element={<Lesson />} />
              <Route path="/lesson/test" element={<Test />} />
              <Route path="/lesson/drag-drop" element={<DragDropMFM />} />
              <Route
                path="/lesson/find-synonyms"
                element={<Synonyms words={words} synonyms={synonyms} />}
              />
              <Route
                path="/lesson/voc-practise"
                element={
                  <VocabularyPracticePage
                    text={vocabularyData.text}
                    words={vocabularyData.words}
                  />
                }
              ></Route>
              <Route path="/lesson/grammar" element={<Grammar />} />
              <Route path="/lesson/listening" element={<Listening />} />
            </Routes>
          </Layout>
        </>
      )}
    </div>
  );
};

export default MyFascinatingMorning;
