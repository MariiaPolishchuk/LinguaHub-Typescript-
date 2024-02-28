
import React, { useState } from 'react';
import Modal from './Modal';

interface QuizProps {
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [selectedOption, setSelectedOption] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentQuestionIndex(-1);
    setScore(0);
  };

  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0);
    setIsModalOpen(true);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <div className="quiz-container">
        {currentQuestionIndex === -1 ? (
          <button onClick={handleStartQuiz}>Start Quiz</button>
        ) : (
          <>
            <h2>Quiz</h2>
            <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
            <h3>{questions[currentQuestionIndex].question}</h3>
            <ul>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionSelect(option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
            <button onClick={handleNextQuestion}>Next</button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default Quiz;



