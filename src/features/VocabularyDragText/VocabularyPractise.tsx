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









// import React, { useState, useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Button from "@mui/material/Button";
// import "../../styles/DragSentences.css";

// interface Sentence {
//   id: string;
//   text: string;
//   correctWords: string[];
// }

// interface WordsGame {
//   sentences: Sentence[];
//   words: string[];
// }

// interface UserAnswer {
//   text: string;
//   correct: boolean | null;
// }

// interface VocabularyPractiseProps extends WordsGame {
//   text: string; // Add text prop here
//   onWordMove: (word: string) => void;
//   resetGame: () => void;
// }

// const VocabularyPractise: React.FC<VocabularyPractiseProps> = ({
//   text, // Include text prop here
//   sentences,
//   words,
//   onWordMove,
//   resetGame,
// }) => {
//   const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(
//     Array(sentences.length).fill({ text: "", correct: null })
//   );
//   const [checked, setChecked] = useState(false);
//   const [availableWords, setAvailableWords] = useState<string[]>([]);
//   const [initialAvailableWords, setInitialAvailableWords] = useState<string[]>(
//     []
//   );
//   const [activeBlank, setActiveBlank] = useState<number | null>(null);

//   useEffect(() => {
//     const shuffledWords = shuffleArray(words);
//     setAvailableWords(shuffledWords);
//     setInitialAvailableWords(shuffledWords);
//   }, [words]);

//   useEffect(() => {
//     const shuffledWords = shuffleArray(words);
//     setInitialAvailableWords(shuffledWords);
//   }, [words]);

//   const updateUserAnswer = (index: number, word: string) => {
//     setUserAnswers((prevAnswers) => {
//       const newAnswers = [...prevAnswers];
//       const correctWords = sentences[index]?.correctWords || [];
//       const isCorrect = correctWords.includes(word);
//       newAnswers[index] = { text: word, correct: isCorrect };
//       return newAnswers;
//     });
//   };

//   const handleDragEnd = (result: import("react-beautiful-dnd").DropResult) => {
//     const { destination, source } = result;
//     if (!destination || !source) return;

//     const sourceIndex =
//       source.droppableId === "word-list"
//         ? source.index
//         : parseInt(source.droppableId.replace("sentence", ""), 10) - 1;
//     const destinationIndex =
//       destination.droppableId === "word-list"
//         ? -1
//         : parseInt(destination.droppableId.replace("sentence", ""), 10) - 1;
//     const word =
//       source.droppableId === "word-list"
//         ? availableWords[source.index]
//         : userAnswers[sourceIndex]?.text;

//     if (source.droppableId !== destination.droppableId) {
//       if (source.droppableId === "word-list") {
//         const newAvailableWords = [...availableWords];
//         newAvailableWords.splice(source.index, 1);
//         setAvailableWords(newAvailableWords);
//       } else {
//         updateUserAnswer(sourceIndex, "");

//         if (destination.droppableId === "word-list") {
//           setAvailableWords((prevWords) => [...prevWords, word]);
//         }
//       }

//       if (destination.droppableId === "word-list") {
//         const newAvailableWords = [...availableWords];
//         newAvailableWords.splice(destination.index, 0, word);
//         setAvailableWords(newAvailableWords);
//       } else {
//         const oldWord = userAnswers[destinationIndex]?.text;
//         if (oldWord) {
//           setAvailableWords((prevWords) => [...prevWords, oldWord]);
//         }
//         updateUserAnswer(destinationIndex, word);
//       }

//       onWordMove(word);
//     } else if (
//       source.droppableId !== "word-list" &&
//       destination.droppableId === "word-list"
//     ) {
//       const newAvailableWords = [...availableWords];
//       newAvailableWords.push(word);
//       setAvailableWords(newAvailableWords);
//       updateUserAnswer(sourceIndex, "");
//     }
//   };

//   const checkGameAnswers = () => {
//     setUserAnswers((prevAnswers) => {
//       return prevAnswers.map((answerObj, index) => {
//         const userAnswer = answerObj.text;
//         const correctWords = sentences[index]?.correctWords || [];
//         const isCorrect = correctWords.includes(userAnswer);
//         return { text: userAnswer, correct: isCorrect };
//       });
//     });
//     setChecked(true);
//   };

//   const shuffleArray = (array: any[]) => {
//     const shuffledArray = [...array];
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledArray[i], shuffledArray[j]] = [
//         shuffledArray[j],
//         shuffledArray[i],
//       ];
//     }
//     return shuffledArray;
//   };

//   const handleResetGame = () => {
//     // Сначала сбрасываем ответы пользователя и очищаем пропуски
//     setUserAnswers(Array(sentences.length).fill({ text: "", correct: null }));
//     setChecked(false);

//     // Создаем массив слов из пропусков
//     const wordsInBlanks: string[] = [];
//     userAnswers.forEach((answer) => {
//       if (answer.text && !availableWords.includes(answer.text)) {
//         wordsInBlanks.push(answer.text);
//       }
//     });

//     // Возвращаем слова обратно в контейнер слов и перемешиваем их
//     const shuffledWords = shuffleArray([...availableWords, ...wordsInBlanks]);
//     setAvailableWords(shuffledWords);
//     resetGame();
//   };

//   const showCorrectGameAnswers = () => {
//     // Удалить все слова из контейнера слов
//     setAvailableWords([]);

//     // Отобразить правильные ответы в пропусках
//     setUserAnswers(
//       sentences.map((sentence) => ({
//         text: sentence.correctWords[0],
//         correct: true,
//       }))
//     );
//     setChecked(true);
//   };

//   const handleBlankMouseEnter = (index: number) => {
//     setActiveBlank(index);
//   };

//   const handleBlankMouseLeave = () => {
//     setActiveBlank(null);
//   };

//   const renderBlank = (
//     sentenceIndex: number,
//     blankIndex: number,
//     blankContent: string
//   ) => (
//     <Droppable
//       key={`sentence${sentenceIndex + 1}-${blankIndex}`}
//       droppableId={`sentence${sentenceIndex + 1}-${blankIndex}`}
//     >
//       {(provided, snapshot) => (
//         <span
//           className={
//             (activeBlank === sentenceIndex && snapshot.isDraggingOver) ||
//             (checked && userAnswers[sentenceIndex]?.correct === true)
//               ? "correct-answer"
//               : checked && userAnswers[sentenceIndex]?.correct === false
//               ? "incorrect-answer"
//               : ""
//           }
//           ref={provided.innerRef}
//           {...provided.droppableProps}
//           style={{
//             display: "inline-block",
//             padding: "5px",
//             margin: "5px",
//             color: "#083643",
//             borderRadius: "5px",
//             background: "#ffffff",
//             textShadow: "unset !important",
//             boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
//           }}
//           onMouseEnter={() => handleBlankMouseEnter(sentenceIndex)}
//           onMouseLeave={handleBlankMouseLeave}
//         >
//           {userAnswers[sentenceIndex]?.text !== "" ? (
//             <Draggable
//               key={`sentence${sentenceIndex + 1}-${blankIndex}`}
//               draggableId={`sentence${sentenceIndex + 1}-${blankIndex}`}
//               index={blankIndex}
//             >
//               {(provided) => (
//                 <span
//                   {...provided.draggableProps}
//                   {...provided.dragHandleProps}
//                   ref={provided.innerRef}
//                 >
//                   {userAnswers[sentenceIndex].text}
//                 </span>
//               )}
//             </Draggable>
//           ) : (
//             "______"
//           )}
//           {provided.placeholder}
//         </span>
//       )}
//     </Droppable>
//   );

//   const renderSentence = (sentence: Sentence, index: number) => (
//     <Droppable key={sentence.id} droppableId={`sentence${index + 1}`}>
//       {(provided) => (
//         <div
//           className="sentence-container-game"
//           ref={provided.innerRef}
//           {...provided.droppableProps}
//         >
//           {sentence.text.split(/______/).map((part, i, partsArray) => (
//             <React.Fragment key={i}>
//               <span>{part}</span>
//               {i !== partsArray.length - 1 && renderBlank(index, i, part)}
//             </React.Fragment>
//           ))}
//           {provided.placeholder}
//         </div>
//       )}
//     </Droppable>
//   );

//   return (
//     <div className="block drag-text-container">
//       <div className="block-name dotted">
//         <h4>Drag words into the right gaps!</h4>
//       </div>
//       <div className="drag-game-cont">
//         <DragDropContext onDragEnd={handleDragEnd}>
//           <div className="sentences-container">
//             {sentences.map(renderSentence)}
//           </div>
//           <Droppable droppableId="word-list">
//             {(provided) => (
//               <div
//                 className="word-list"
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//               >
//                 {availableWords.map((word, index) => (
//                   <Draggable
//                     key={`word${index}`}
//                     draggableId={`word${index}`}
//                     index={index}
//                   >
//                     {(provided) => (
//                       <div
//                         className="drag-word"
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         ref={provided.innerRef}
//                       >
//                         {word}
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </div>
//       <div className="choose-buttons">
//         <Button
//           className="lesson-button"
//           variant="contained"
//           onClick={checkGameAnswers}
//         >
//           Submit
//         </Button>
//         <Button
//           className="lesson-button"
//           variant="contained"
//           onClick={showCorrectGameAnswers}
//         >
//           Show Correct Answers
//         </Button>
//         <Button
//           className="lesson-button"
//           variant="contained"
//           onClick={handleResetGame}
//         >
//           Start again
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default VocabularyPractise;

