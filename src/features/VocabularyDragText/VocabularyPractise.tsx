import React, { useState } from "react";
import { Typography, List, ListItem, Button } from "@mui/material";
import useQuizLogic from "./useQuizLogic";
import BlankSpace from "./BlankSpace";
import "../../styles/QuizText.css";

interface VocabularyPracticeProps {
  text: string;
  words: string[];
}

const VocabularyPractice: React.FC<VocabularyPracticeProps> = ({
  text,
  words,
}) => {
  const { drop, drag, checkQuizAnswers, resetQuiz, showCorrectAnswers } =
    useQuizLogic(words);
  const [answers, setAnswers] = useState<string[]>(
    Array.from({ length: words.length }, () => "")
  );

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    word: string,
    index: number
  ) => {
    event.dataTransfer.setData("text", word);
    event.dataTransfer.effectAllowed = "move";
    // Save the index of the dragged word
    event.dataTransfer.setData("index", index.toString());
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    drop(event, index);
    drag(event, data);

    // Update the state of answers
    const updatedAnswers = [...answers];
    const previousIndex = updatedAnswers.indexOf(data);
    updatedAnswers[previousIndex] = ""; // Remove the word from the previous blank
    updatedAnswers[index] = data; // Add the word to the new blank
    setAnswers(updatedAnswers);
  };

  return (
    <div className="drag-words">
      <div>
        <div className="block-name dotted">
          <h4>
            Complete the sentences by dragging words into the gaps! Don't forget to check your
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
                      <BlankSpace
                        key={index}
                        index={(index + 1) / 2}
                        word={answers[(index + 1) / 2] || ""}
                        onDrop={(event: React.DragEvent<HTMLDivElement>) =>
                          handleDrop(event, (index + 1) / 2)
                        }
                        onDragOver={(event: React.DragEvent<HTMLDivElement>) =>
                          event.preventDefault()
                        }
                        onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
                          handleDragStart(
                            event,
                            answers[(index + 1) / 2] || "",
                            (index + 1) / 2
                          )
                        }
                      />
                    );
                  } else {
                    return <span key={index}>{part}</span>;
                  }
                })}
              </Typography>
            </ListItem>
          </List>
          <div className="drag-container" id="drag-container">
            {words.map((word, index) => (
              <div
                key={index}
                className="drag-item"
                draggable={true}
                onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
                  handleDragStart(event, word, index)
                }
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
