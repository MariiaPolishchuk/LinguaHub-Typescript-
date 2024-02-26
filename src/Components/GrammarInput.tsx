import React, { useState } from 'react';
import { Button, ListItem, List } from '@mui/material';
import { WordsGame } from '../Components/Levels/Intermediate/MyFascinatingMorning/GrammarMFM';

interface Props {
  game: WordsGame;
}

const GrammarInput: React.FC<Props> = ({ game }) => {
  const [answersShown, setAnswersShown] = useState(false);

  const checkAnswer = (wordId: string, correctAnswers: string[]) => {
    const userAnswer = (document.getElementById(wordId) as HTMLInputElement).value.trim().toLowerCase();
    const wordElement = document.getElementById(wordId);

    if (!answersShown) {
      const lowerCaseCorrectAnswers = correctAnswers.map(answer => answer.toLowerCase());

      if (lowerCaseCorrectAnswers.includes(userAnswer)) {
        wordElement?.classList.remove("incorrect", "missing");
        wordElement?.classList.add("correct");
      } else if (userAnswer !== "") {
        wordElement?.classList.remove("correct");
        wordElement?.classList.add("incorrect");
      } else {
        wordElement?.classList.remove("correct", "incorrect");
        wordElement?.classList.add("missing");
      }
    }
  };

  const resetWord = (wordId: string) => {
    const wordElement = document.getElementById(wordId) as HTMLInputElement;
    if (wordElement) {
      wordElement.value = "";
      wordElement.classList.remove("correct", "incorrect", "missing");
    }
  };

  const resetForm = () => {
    setAnswersShown(false);

    game.sentences.forEach((sentence, index) => {
      sentence.text.split(/\(([^)]+)\)/).forEach((part, partIndex) => {
        if (partIndex % 2 !== 0) {
          resetWord(`word${index + 1}-${partIndex}-answer`);
        }
      });
    });
  };

  const showCorrectAnswers = () => {
    setAnswersShown(true);
  
    game.sentences.forEach((sentence, index) => {
      let gapIndex = 0;
      sentence.text.split(/\(([^)]+)\)/).forEach((part, partIndex) => {
        if (partIndex % 2 !== 0) {
          const wordId = `word${index + 1}-${partIndex}-answer`;
          const wordAnswer = document.getElementById(wordId) as HTMLInputElement;
          wordAnswer.value = sentence.correctWords[gapIndex];
          gapIndex++;
        }
      });
    });
  };
  

  const submitAnswers = () => {
    game.sentences.forEach((sentence, index) => {
      let gapIndex = 0;
      sentence.text.split(/\(([^)]+)\)/).forEach((part, partIndex) => {
        if (partIndex % 2 !== 0) {
          const wordId = `word${index + 1}-${partIndex}-answer`;
          checkAnswer(wordId, [sentence.correctWords[gapIndex]]);
          gapIndex++;
        }
      });
    });
  };
  

  return (
    <div className="quiz block" id="quiz">
      <div className="block-name dotted">
        <h3>Grammar Practice</h3>
        <h4>Write the correct form of the verbs in brackets and check your answers! Don't forget this topic refers to the Present Tenses! So use the Present Simple, Continuous, Perfect and Perfect-Continuous!</h4>
      </div>
      <div className='list'>
        <List className="quiz-list">
          {game.sentences.map((sentence, index) => (
            <ListItem key={sentence.id}>
              {sentence.text.split(/\(([^)]+)\)/).map((part, partIndex) => (
                partIndex % 2 === 0 ? (
                  <span key={partIndex}>{part}</span>
                ) : (
                  <input
                    id={`word${index + 1}-${partIndex}-answer`}
                    className="word"
                    key={partIndex}
                    style={{ backgroundColor: 'white', padding: '2px' }}
                  />
                )
              ))}
            </ListItem>
          ))}
        </List>
      </div>
      <div className="choose-buttons">
        <Button className='lesson-button' variant="contained" onClick={submitAnswers}>Check</Button>
        <Button className='lesson-button' variant="contained" onClick={resetForm}>Start again</Button>
        <Button className='lesson-button' variant="contained" onClick={showCorrectAnswers}>Show Answers</Button>
      </div>
    </div>
  );
};

export default GrammarInput;