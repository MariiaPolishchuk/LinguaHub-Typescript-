
// import React, { useState } from "react";
// import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
// import Button from "@mui/material/Button";
// import ReadingText from "./ReadingText";
// import useRandomQuestion from "../../../UseRandomQuestions";
// import "../../../../styles/Lessons.css";
// import Test from "./Test"; // Импортируйте компонент TestForm

// const Lesson: React.FC = () => {
   
//     const navigate = useNavigate();
//     const location = useLocation();
  
//     const handleStartClick = () => {
//         navigate("test"); // Указываем полный путь к странице "test"
//       };
  

//     const { outputText, askRandomQuestion } = useRandomQuestion();
//     const [isModalOpen, setIsModalOpen] = useState(false);
   

//     const toggleModal = () => {
//       setIsModalOpen(!isModalOpen);
//       askRandomQuestion(); 
//     };

//     return (
        
//       <div className="overall fade-in">
//         <ReadingText />
//         <Button
//           className="lesson-button"
//           variant="contained"
//           onClick={toggleModal}
//         >
//           Tick here to speak
//         </Button>

//         <Button
//           className="lesson-button"
//           variant="contained"
//           color="primary"
//           onClick={handleStartClick}
//         >
//           Start
//         </Button>
//         <Routes>
//         <Route path="/test/*" element={<Test />} />
//         </Routes>
//         {isModalOpen && (
//           <div className="modal-container">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h2>Random Question</h2>
//                 <Button onClick={toggleModal}>Close</Button>
//               </div>
//               <div className="modal-body">
//                 {outputText && <p>{outputText}</p>}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
// };

// export default Lesson;



// import React, { useState } from "react";
// // import { useNavigate, Routes, Route } from "react-router-dom";
// import Button from "@mui/material/Button";
// import ReadingText from "./ReadingText";
// import useRandomQuestion from "../../../UseRandomQuestions";
// import "../../../../styles/Lessons.css";

// const Lesson: React.FC = () => {
//     // const navigate = useNavigate();

   

//     const { outputText, askRandomQuestion } = useRandomQuestion();
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const toggleModal = () => {
//         setIsModalOpen(!isModalOpen);
//         askRandomQuestion(); 
//     };

//     return (
//       <div className="overall fade-in main-container-lessons">
//         <ReadingText />
//         <Button
//           className="lesson-button"
//           variant="contained"
//           onClick={toggleModal}
//         >
//           Tick here to answer the questions
//         </Button>

       
        
//         {isModalOpen && (
//           <div className="modal-container ">
//             <div className="modal-content">
//               <div className="modal-header">
//                 {/* <h2>Random Question</h2> */}
//                 <Button onClick={toggleModal}>Close</Button>
                
//               </div>
//               <div className="modal-body">
//                 {outputText && <p>{outputText}</p>}
//               </div>
//             </div>
//           </div>
//         )}
        
//       </div>
//     );
// };

// export default Lesson;



import React, { useState } from "react";
import Button from "@mui/material/Button";
import ReadingText from "./ReadingText";
import useRandomQuestion from "../../../UseRandomQuestions";
import "../../../../styles/Lessons.css";

const Lesson: React.FC = () => {
    const { outputText, askRandomQuestion } = useRandomQuestion();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [, setQuestionIndex] = useState(0); // Состояние для отслеживания индекса вопроса

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        askRandomQuestion();
    };

    const nextQuestion = () => {
        setQuestionIndex((prevIndex) => (prevIndex + 1) % askRandomQuestion.length); // Увеличиваем индекс на 1, кольцево
        askRandomQuestion();
    };

    return (
        <div className="overall fade-in main-container-lessons">
            
            <ReadingText />
            <Button
                className="lesson-button"
                variant="contained"
                onClick={toggleModal}
            >
                Tick here to speak
            </Button>

            {isModalOpen && (
                <div className="modal-container ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <Button onClick={toggleModal}>Close</Button>
                        </div>
                        <div className="modal-body">
                            {outputText && <p>{outputText}</p>}
                            <Button onClick={nextQuestion}>Next Question</Button> {/* Кнопка для переключения на следующий вопрос */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson;
