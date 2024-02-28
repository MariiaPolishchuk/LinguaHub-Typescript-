// import React, { useState, useEffect } from "react";
// import { Tabs, Tab, Button } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import ReadingText from "./ReadingText";
// import Test from "./Test";
// import Grammar from "./Grammar";
// import Listening from "./Listening";
// import useRandomQuestion from "../../../UseRandomQuestions";

// const Lesson: React.FC = () => {
//   const {
//     outputText,
//     askRandomQuestion,
//     isModalOpen,
//     toggleModal,
//   }: {
//     outputText: string;
//     askRandomQuestion: () => void;
//     isModalOpen: boolean;
//     toggleModal: () => void;
//   } = useRandomQuestion();

//   const [value, setValue] = useState(0);

//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       askRandomQuestion();
//     }
//   }, [isModalOpen]);
  

//   return (
//     <div className="overall fade-in main-container-lessons">
//       {/* <Link className="back-link" to="/course/intermediate">
//         &#8592;
//       </Link> */}

//       <Tabs
//         className="lesson-tabs"
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="primary"
//         centered
//       >
//         <Tab label="Reading" />
//         <Tab label="Test" />
//         <Tab label="Grammar" />
//         <Tab label="Listening" />
//       </Tabs>

//       {value === 0 && (
//         <>
//           <ReadingText />
//           <div className="choose-buttons">
//             <Button
//               className="lesson-button"
//               variant="contained"
//               onClick={toggleModal}
//             >
//               Tick here to speak
//             </Button>
//           </div>
//           {isModalOpen && (
//             <div className="modal-container fade-in-fast">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <Button onClick={toggleModal}>Close</Button>
//                 </div>
//                 <div className="modal-body">
//                   {outputText && <p>{outputText}</p>}
//                   <div>
//                     <Button onClick={askRandomQuestion}>Next Question</Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}

//       {value === 1 && <Test />}
//       {value === 2 && <Grammar />}
//       {value === 3 && <Listening />}
//     </div>
//   );
// };

// export default Lesson;


// Lesson.js
import React, { useState, useEffect, useRef } from "react";
import { Tabs, Tab, Button } from "@material-ui/core";
import ReadingText from "./ReadingText";
import Test from "./Test";
import Grammar from "./Grammar";
import Listening from "./Listening";
import useRandomQuestion from "../../../UseRandomQuestions";
import RandomQuestions from "./RandomQuestions"; // Импортируем массив с вопросами

const Lesson: React.FC = () => {
  const {
    outputText,
    askRandomQuestion,
    isModalOpen,
    toggleModal,
  }: {
    outputText: string;
    askRandomQuestion: () => void;
    isModalOpen: boolean;
    toggleModal: () => void;
  } = useRandomQuestion(RandomQuestions); // Передаем массив вопросов как аргумент хука

  const [value, setValue] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null); // Создаем ref

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (isModalOpen) {
      askRandomQuestion();
    }
  }, [isModalOpen]);
  
  return (
    <div className="overall fade-in main-container-lessons" ref={modalRef}> {/* Передаем ref */}
      {/* <Link className="back-link" to="/course/intermediate">
        &#8592;
      </Link> */}

      <Tabs
        className="lesson-tabs"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Reading" />
        <Tab label="Test" />
        <Tab label="Grammar" />
        <Tab label="Listening" />
      </Tabs>

      {value === 0 && (
        <>
          <ReadingText />
          <div className="choose-buttons">
            <Button
              className="lesson-button"
              variant="contained"
              onClick={toggleModal}
            >
              Tick here to speak
            </Button>
          </div>
          {isModalOpen && (
            <div className="modal-container fade-in-fast" ref={modalRef}> {/* Передаем ref */}
              <div className="modal-content">
                <div className="modal-header">
                  <Button onClick={toggleModal}>Close</Button>
                </div>
                <div className="modal-body">
                  {outputText && <p>{outputText}</p>}
                  <div>
                    <Button onClick={askRandomQuestion}>Next Question</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {value === 1 && <Test />}
      {value === 2 && <Grammar />}
      {value === 3 && <Listening />}
    </div>
  );
};

export default Lesson;
