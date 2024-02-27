

import React, { useEffect, useState } from "react";
import { Typography, List, ListItem, Button } from "@mui/material";

interface VocabularyData {
  text: string;
  words: string[];
}

const VocabularyPractice: React.FC<{ vocabularyData: VocabularyData }> = ({
  vocabularyData,
}) => {
  const { text, words } = vocabularyData;

  const [answers, setAnswers] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const [initialStyles, setInitialStyles] = useState<React.CSSProperties[]>([]);

  const shuffleWords = () => {
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
    setAnswers(shuffledWords);
  };

  useEffect(() => {
    setCorrectAnswers([...words]);
    shuffleWords();
  }, []);

  useEffect(() => {
    const answerSpans = document.querySelectorAll(".answer");
    const styles: React.CSSProperties[] = [];
    answerSpans.forEach((answer) => {
      const computedStyle = getComputedStyle(answer);
      const style: React.CSSProperties = {
        appearance: computedStyle.appearance as React.CSSProperties["appearance"],
      };
      styles.push(style);
    });
    setInitialStyles(styles);
  }, []);

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const drop = (event: React.DragEvent<HTMLDivElement>, index: number) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = event.currentTarget;

    if (draggedElement.classList.contains("answer")) {
      const wordToRestore = draggedElement.innerText.trim();
      if (!wordToRestore) {
        draggedElement.innerText = data;
        draggedElement.classList.add("quiz-answer");
        const dragItem = findDragItemByText(data);
        if (dragItem) {
          dragItem.style.display = "none";
        }
      } else {
        const prevDragItem = findDragItemByText(wordToRestore);
        if (prevDragItem) {
          prevDragItem.style.display = "block";
        }
        draggedElement.innerText = data;
        const dragItem = findDragItemByText(data);
        if (dragItem) {
          dragItem.style.display = "none";
        }
      }
    } else {
      draggedElement.classList.add("incorrect-quiz");
    }
  };

  const drag = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", event.currentTarget.innerText);
  };

  const showCorrectAnswers = () => {
    const answerSpans = document.querySelectorAll(".answer");
    answerSpans.forEach((answer, index) => {
      answer.textContent = correctAnswers[index];
    });
  };

  const resetQuiz = () => {
    const answerSpans = document.querySelectorAll(".answer");
    answerSpans.forEach((span, index) => {
      span.textContent = "";
      if (initialStyles[index]) {
        Object.assign((span as HTMLElement).style, initialStyles[index]);
      }
    });
    shuffleWords();
    setCorrectAnswers([...words]);
  };

  const checkQuizAnswers = () => {
    const answerSpans = document.querySelectorAll(".answer");
    answerSpans.forEach((span, index) => {
      span.classList.remove("correct-quiz", "incorrect-quiz");
      const userAnswer = span.textContent?.trim();
      const correctAnswer = correctAnswers[index];
      if (userAnswer === correctAnswer) {
        span.classList.add("correct-quiz");
      } else {
        span.classList.add("incorrect-quiz");
      }
    });
  };

  const findDragItemByText = (text: string) => {
    const dragItems = document.querySelectorAll(".drag-item");
    for (const item of dragItems as any) {
      if ((item as HTMLElement).innerText.trim() === text) {
        return item as HTMLElement;
      }
    }
    return null;
  };

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
                onDragStart={drag}
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



