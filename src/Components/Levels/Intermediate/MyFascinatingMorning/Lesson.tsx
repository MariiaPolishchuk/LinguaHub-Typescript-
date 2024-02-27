
import React, { useState } from "react";
import Button from "@mui/material/Button";
import ReadingText from "./ReadingText";
import useRandomQuestion from "../../../UseRandomQuestions";
import "../../../../styles/Lessons.css";

const Lesson: React.FC = () => {
    const { outputText, askRandomQuestion } = useRandomQuestion();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [, setQuestionIndex] = useState(0); 

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        askRandomQuestion();
    };

    const nextQuestion = () => {
        setQuestionIndex((prevIndex) => (prevIndex + 1) % askRandomQuestion.length); 
        askRandomQuestion();
    };

    return (
        <div className="overall fade-in main-container-lessons">
            
            <ReadingText />
            <div className="choose-buttons"><Button
                className="lesson-button"
                variant="contained"
                onClick={toggleModal}
            >
                Tick here to speak
            </Button>
 </div>
            {isModalOpen && (
                <div className="modal-container ">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <Button onClick={toggleModal}>Close</Button> */}
                        </div>
                        <div className="modal-body">
                            {outputText && <p>{outputText}</p>}
                           <div><Button onClick={nextQuestion}>Next Question</Button> 
                           <Button onClick={toggleModal}>Close</Button></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson;
