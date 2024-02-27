import React, { useState } from "react";
import Button from "@mui/material/Button";

interface TestFormProps {
  questionsAndAnswers: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

const TestForm: React.FC<TestFormProps> = ({ questionsAndAnswers }) => {
  const [answers, setAnswers] = useState<string[]>(
    new Array(questionsAndAnswers.length).fill("")
  );
  const [results, setResults] = useState<boolean[] | null[]>(
    new Array(questionsAndAnswers.length).fill(null)
  );

  const checkAnswers = () => {
    const newResults = answers.map(
      (answer, index) => answer === questionsAndAnswers[index].correctAnswer
    );
    setResults(newResults);
  };

  const resetAnswers = () => {
    setAnswers(new Array(questionsAndAnswers.length).fill(""));
    setResults(new Array(questionsAndAnswers.length).fill(null));
  };

  return (
    <div className="test-form">
      <h2>Choose option!</h2>
      <h4>
        Sure, you are ready with Quizlet! So, it's time to practice and add some
        knowledge to your mind! Choose the correct word for each definition and
        check your answers!
      </h4>
      <ol className="forms">
        {questionsAndAnswers.map((questionData, index) => (
          <li key={index}>
            <div>
              <p>{questionData.question}</p>
              <select
                className="select-opt"
                value={answers[index]}
                onChange={(e) => {
                  const newAnswers = [...answers];
                  newAnswers[index] = e.target.value;
                  setAnswers(newAnswers);
                }}
              >
                <option value="">Select an option</option>
                {questionData.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {results[index] !== null && (
              <div>
              <p>
                {results[index]
                  ? "Correct"
                  : `Incorrect. Correct is ${questionsAndAnswers[index].correctAnswer}`}
              </p>
              </div>
            )}
            </div>
            {/* {results[index] !== null && (
              <div>
              <p>
                {results[index]
                  ? "Correct"
                  : `Incorrect. Correct is ${questionsAndAnswers[index].correctAnswer}`}
              </p>
              </div>
            )} */}
          </li>
        ))}
      </ol>

      <Button
        className="lesson-button"
        variant="contained"
        onClick={checkAnswers}
      >
        Check Answers
      </Button>
      <Button
        className="lesson-button"
        variant="contained"
        onClick={resetAnswers}
      >
        Start again
      </Button>
    </div>
  );
};

export default TestForm;
