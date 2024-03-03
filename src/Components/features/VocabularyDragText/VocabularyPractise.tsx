import React from "react";
import { Typography, List, ListItem, Button } from "@mui/material";
import useQuizLogic from "./useQuizLogic";

interface VocabularyPracticeProps {
  text: string;
  words: string[];
}

const VocabularyPractice: React.FC<VocabularyPracticeProps> = ({ text, words }) => {
  const {
    answers,
    drop,
    allowDrop,
    drag,
    checkQuizAnswers,
    resetQuiz,
    showCorrectAnswers
  } = useQuizLogic(words);

  return (
    <div className="drag-words block">
      <div>
        <div className="block-name dotted">
          <h3>Vocabulary Practice</h3>
          <h4>
            Complete the sentences by dragging words into the gaps. Do not drag
            words you have already put into the gap to another gap. Just move
            the word from your list to the word that is already in the blank,
            and the previous word will return! Don't forget to check your
            answers!
          </h4>
        </div>
        <div id="quiz-container" className="quiz-container">
          <List>
            <ListItem>
              <Typography className="quiz-text">
                {text.split(/(\b_____\b)/).map((part, index) => {
                  if (part.trim() === "_____") {
                    return (
                      <span
                        key={index}
                        className="answer blank-space"
                        data-index={(index + 1) / 2}
                        onDrop={(event: React.DragEvent<HTMLDivElement>) =>
                          drop(event, (index + 1) / 2)
                        }
                        onDragOver={allowDrop}
                      ></span>
                    );
                  } else {
                    return <span key={index}>{part}</span>;
                  }
                })}
              </Typography>
            </ListItem>
          </List>
          <div className="drag-container" id="drag-container">
            {answers.map((word, index) => (
              <div
                key={index}
                className="drag-item"
                draggable={true}
                onDragStart={(event: React.DragEvent<HTMLDivElement>) => drag(event, word)}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="choose-buttons">
          <Button
            className="lesson-button"
            variant="contained"
            onClick={checkQuizAnswers}
          >
            Check Answers
          </Button>
          <Button
            className="lesson-button"
            variant="contained"
            onClick={resetQuiz}
          >
            Reset Quiz
          </Button>
          <Button
            className="lesson-button"
            variant="contained"
            onClick={showCorrectAnswers}
          >
            Show Correct Answers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VocabularyPractice;
