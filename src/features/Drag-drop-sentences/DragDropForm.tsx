// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Button from "@mui/material/Button";

// interface Sentence {
//   id: string;
//   text: string;
//   correctWords: string[];
// }

// interface WordsGame {
//   sentences: Sentence[];
//   words: string[];
// }

// interface DragDropFormProps extends WordsGame {
//   onWordMove: (word: string) => void;
//   resetGame: () => void;
// }

// const DragDropForm: React.FC<DragDropFormProps> = ({
//   sentences,
//   words,
//   onWordMove,
//   resetGame,
// }) => {
//   const [userAnswers, setUserAnswers] = useState<
//     Array<{ text: string; correct: boolean | null }>
//   >(Array(sentences.length).fill({ text: "", correct: null }));
//   const [checked, setChecked] = useState(false);

//   const updateUserAnswer = (index: number, word: string) => {
//     setUserAnswers((prevAnswers) => {
//       const newAnswers = [...prevAnswers];
//       const correctWords = sentences[index].correctWords;
//       newAnswers[index] = {
//         text: word,
//         correct: correctWords.includes(word),
//       };
//       return newAnswers;
//     });
//   };

//   const onDragEnd = (result: import("react-beautiful-dnd").DropResult) => {
//     const { destination, source } = result;
//     if (!destination || !source) return;

//     const destinationId = destination.droppableId;
//     const sourceId = source.droppableId;

//     if (destinationId === sourceId) return;

//     const sentenceIndex =
//       parseInt(destinationId.replace("sentence", ""), 10) - 1;
//     const wordIndex = source.index;
//     const word = words[wordIndex];

//     const oldWord = userAnswers[sentenceIndex]?.text;
//     if (oldWord) {

//       words.push(oldWord);

//       updateUserAnswer(sentenceIndex, word);
//     }

//     updateUserAnswer(sentenceIndex, word);
//     onWordMove(word);
//   };

//   const checkGameAnswers = () => {
//     setUserAnswers((prevAnswers) => {
//       return prevAnswers.map((answerObj, index) => {
//         const userAnswer = answerObj.text;
//         const correctWords = sentences[index].correctWords;
//         const isCorrect = correctWords.includes(userAnswer);
//         return { text: userAnswer, correct: isCorrect };
//       });
//     });
//     setChecked(true);
//   };

//   const handleResetGame = () => {
//     setUserAnswers(Array(sentences.length).fill({ text: "", correct: null }));
//     setChecked(false);
//     resetGame();
//   };

//   const showCorrectGameAnswers = () => {
//     setUserAnswers(
//       sentences.map((sentence) => ({
//         text: sentence.correctWords[0],
//         correct: true,
//       }))
//     );
//     setChecked(true);
//   };

//   return (
//     <div className="block drag-text-container">
//       <div className="block-name dotted">
//         <h3>Vocabulary Practise</h3>
//         <h4>
//           Drag words into the right gaps!
//         </h4>
//       </div>
//       <div className="drag-game-cont">
//         <DragDropContext onDragEnd={onDragEnd}>
//           <div className="sentences-container">
//             {sentences.map((sentence, index) => (
//               <Droppable key={sentence.id} droppableId={`sentence${index + 1}`}>
//                 {(provided) => (
//                   <div
//                     className="sentence-container-game"
//                     ref={provided.innerRef}
//                     {...provided.droppableProps}
//                   >
//                     {sentence.text
//                       .split(/______/)
//                       .map((part, i, partsArray) => (
//                         <React.Fragment key={i}>
//                           <span>{part}</span>
//                           {i !== partsArray.length - 1 && (
//                             <Droppable
//                               key={`sentence${index + 1}-${i}`}
//                               droppableId={`sentence${index + 1}-${i}`}
//                             >
//                               {(provided) => (
//                                 <span
//                                   className={
//                                     checked &&
//                                     userAnswers[index].correct === true
//                                       ? "correct-answer"
//                                       : checked &&
//                                         userAnswers[index].correct === false
//                                       ? "incorrect-answer"
//                                       : ""
//                                   }
//                                   ref={provided.innerRef}
//                                   {...provided.droppableProps}
//                                   style={{
//                                     display: "inline-block",
//                                     padding: "5px",
//                                     margin: "5px",
//                                     border: "1px black",
//                                     boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
//                                   }}
//                                 >
//                                   {userAnswers[index].text !== ""
//                                     ? userAnswers[index].text
//                                     : "______"}
//                                   {provided.placeholder}
//                                 </span>
//                               )}
//                             </Droppable>
//                           )}
//                         </React.Fragment>
//                       ))}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//             ))}
//           </div>
//           <Droppable droppableId="word-list">
//             {(provided) => (
//               <div
//                 className="word-list"
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//               >
//                 {words.map((word, index) => (
//                   <Draggable
//                     key={word}
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

// export default DragDropForm;

// ВЕРНАЯ РЕЛИЗАЦИЯ ЗАМЕНЫ СЛОВА НА ДРУГОЕ СЛОВО!

// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Button from "@mui/material/Button";

// interface Sentence {
//   id: string;
//   text: string;
//   correctWords: string[];
// }

// interface WordsGame {
//   sentences: Sentence[];
//   words: string[];
// }

// interface DragDropFormProps extends WordsGame {
//   onWordMove: (word: string) => void;
//   resetGame: () => void;
// }

// const DragDropForm: React.FC<DragDropFormProps> = ({
//   sentences,
//   words,
//   onWordMove,
//   resetGame,
// }) => {
//   const [userAnswers, setUserAnswers] = useState<
//     Array<{ text: string; correct: boolean | null }>
//   >(Array(sentences.length).fill({ text: "", correct: null }));
//   const [checked, setChecked] = useState(false);
//   const [availableWords, setAvailableWords] = useState<string[]>(words);

//   const updateUserAnswer = (index: number, word: string) => {
//     setUserAnswers((prevAnswers) => {
//       const newAnswers = [...prevAnswers];
//       const correctWords = sentences[index].correctWords;
//       newAnswers[index] = {
//         text: word,
//         correct: correctWords.includes(word),
//       };
//       return newAnswers;
//     });
//   };

//   const onDragEnd = (result: import("react-beautiful-dnd").DropResult) => {
//     const { destination, source } = result;
//     if (!destination || !source) return;

//     const destinationId = destination.droppableId;
//     const sourceId = source.droppableId;

//     if (destinationId === sourceId) return;

//     const sentenceIndex =
//       parseInt(destinationId.replace("sentence", ""), 10) - 1;
//     const wordIndex = source.index;
//     const word = availableWords[wordIndex];

//     const oldWord = userAnswers[sentenceIndex]?.text;
//     if (oldWord) {
//       setAvailableWords((prevWords) => [...prevWords, oldWord]);
//       updateUserAnswer(sentenceIndex, word);
//     }

//     updateUserAnswer(sentenceIndex, word);
//     onWordMove(word);
//     setAvailableWords((prevWords) =>
//       prevWords.filter((_, index) => index !== wordIndex)
//     );
//   };

//   const checkGameAnswers = () => {
//     setUserAnswers((prevAnswers) => {
//       return prevAnswers.map((answerObj, index) => {
//         const userAnswer = answerObj.text;
//         const correctWords = sentences[index].correctWords;
//         const isCorrect = correctWords.includes(userAnswer);
//         return { text: userAnswer, correct: isCorrect };
//       });
//     });
//     setChecked(true);
//   };

//   const handleResetGame = () => {
//     setUserAnswers(Array(sentences.length).fill({ text: "", correct: null }));
//     setChecked(false);
//     setAvailableWords(words);
//     resetGame();
//   };

//   const showCorrectGameAnswers = () => {
//     setUserAnswers(
//       sentences.map((sentence) => ({
//         text: sentence.correctWords[0],
//         correct: true,
//       }))
//     );
//     setChecked(true);
//   };

//   return (
//     <div className="block drag-text-container">
//       <div className="block-name dotted">
//         <h3>Vocabulary Practise</h3>
//         <h4>Drag words into the right gaps!</h4>
//       </div>
//       <div className="drag-game-cont">
//         <DragDropContext onDragEnd={onDragEnd}>
//           <div className="sentences-container">
//             {sentences.map((sentence, index) => (
//               <Droppable key={sentence.id} droppableId={`sentence${index + 1}`}>
//                 {(provided) => (
//                   <div
//                     className="sentence-container-game"
//                     ref={provided.innerRef}
//                     {...provided.droppableProps}
//                   >
//                     {sentence.text
//                       .split(/______/)
//                       .map((part, i, partsArray) => (
//                         <React.Fragment key={i}>
//                           <span>{part}</span>
//                           {i !== partsArray.length - 1 && (
//                             <Droppable
//                               key={`sentence${index + 1}-${i}`}
//                               droppableId={`sentence${index + 1}-${i}`}
//                             >
//                               {(provided) => (
//                                 <span
//                                   className={
//                                     checked &&
//                                     userAnswers[index].correct === true
//                                       ? "correct-answer"
//                                       : checked &&
//                                         userAnswers[index].correct === false
//                                       ? "incorrect-answer"
//                                       : ""
//                                   }
//                                   ref={provided.innerRef}
//                                   {...provided.droppableProps}
//                                   style={{
//                                     display: "inline-block",
//                                     padding: "5px",
//                                     margin: "5px",
//                                     border: "1px black",
//                                     boxShadow:
//                                       "0 0 5px 0 rgba(0, 0, 0, 0.5)",
//                                   }}
//                                 >
//                                   {userAnswers[index].text !== ""
//                                     ? (
//                                       <Draggable
//                                         draggableId={`sentence${index + 1}-${i}`}
//                                         index={index}
//                                       >
//                                         {(provided) => (
//                                           <span
//                                             {...provided.draggableProps}
//                                             {...provided.dragHandleProps}
//                                             ref={provided.innerRef}
//                                           >
//                                             {userAnswers[index].text}
//                                           </span>
//                                         )}
//                                       </Draggable>
//                                     )
//                                     : "______"}
//                                   {provided.placeholder}
//                                 </span>
//                               )}
//                             </Droppable>
//                           )}
//                         </React.Fragment>
//                       ))}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//             ))}
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
//                     key={word}
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

// export default DragDropForm;

// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Button from "@mui/material/Button";

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

// interface DragDropFormProps extends WordsGame {
//   onWordMove: (word: string) => void;
//   resetGame: () => void;
// }

// const DragDropForm: React.FC<DragDropFormProps> = ({
//   sentences,
//   words,
//   onWordMove,
//   resetGame,
// }) => {
//   const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(
//     Array(sentences.length).fill({ text: "", correct: null })
//   );
//   const [checked, setChecked] = useState(false);
//   const [availableWords, setAvailableWords] = useState<string[]>(words);

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

//     const sourceIndex = source.droppableId === "word-list" ? source.index : parseInt(source.droppableId.replace("sentence", ""), 10) - 1;
//     const destinationIndex = destination.droppableId === "word-list" ? -1 : parseInt(destination.droppableId.replace("sentence", ""), 10) - 1;
//     const word = source.droppableId === "word-list" ? availableWords[source.index] : userAnswers[sourceIndex]?.text;

//     if (source.droppableId !== destination.droppableId) { // Проверяем, что перемещение произошло между контейнерами
//       if (source.droppableId === "word-list") {
//         const newAvailableWords = [...availableWords];
//         newAvailableWords.splice(source.index, 1);
//         setAvailableWords(newAvailableWords);
//       } else {
//         updateUserAnswer(sourceIndex, ""); // Очищаем исходный бланк

//         // Если слово перемещается из пропуска в пропуск, удаляем его из контейнера слов
//         if (destination.droppableId !== "word-list") {
//           setAvailableWords((prevWords) => [...prevWords.filter((w) => w !== word)]);
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
//         updateUserAnswer(destinationIndex, word); // Устанавливаем слово в целевом бланке
//       }

//       onWordMove(word);
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

//   const handleResetGame = () => {
//     setUserAnswers(Array(sentences.length).fill({ text: "", correct: null }));
//     setChecked(false);
//     setAvailableWords(words);
//     resetGame();
//   };

//   const showCorrectGameAnswers = () => {
//     setUserAnswers(
//       sentences.map((sentence) => ({
//         text: sentence.correctWords[0],
//         correct: true,
//       }))
//     );
//     setChecked(true);
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
//       {(provided) => (
//         <span
//           className={
//             checked &&
//             userAnswers[sentenceIndex]?.correct === true
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
//             border: "1px black",
//             boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
//           }}
//         >
//           {userAnswers[sentenceIndex]?.text !== "" ? (
//             <Draggable
//               key={`sentence${sentenceIndex + 1}-${blankIndex}`}
//               draggableId={`sentence${sentenceIndex + 1}-${blankIndex}`}
//               index={blankIndex} // используем blankIndex вместо sentenceIndex
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
//         <h3>Vocabulary Practise</h3>
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

// export default DragDropForm;

// import React, { useState, useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Button from "@mui/material/Button";

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

// interface DragDropFormProps extends WordsGame {
//   onWordMove: (word: string) => void;
//   resetGame: () => void;
// }

// const DragDropForm: React.FC<DragDropFormProps> = ({
//   sentences,
//   words,
//   onWordMove,
//   resetGame,
// }) => {
//   const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(
//     Array(sentences.length).fill({ text: "", correct: null })
//   );
//   const [checked, setChecked] = useState(false);
//   const [availableWords, setAvailableWords] = useState<string[]>(words);
//   const [initialAvailableWords, setInitialAvailableWords] = useState<string[]>(words);

//   useEffect(() => {
//     setInitialAvailableWords(words);
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

//     const sourceIndex = source.droppableId === "word-list" ? source.index : parseInt(source.droppableId.replace("sentence", ""), 10) - 1;
//     const destinationIndex = destination.droppableId === "word-list" ? -1 : parseInt(destination.droppableId.replace("sentence", ""), 10) - 1;
//     const word = source.droppableId === "word-list" ? availableWords[source.index] : userAnswers[sourceIndex]?.text;

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
//     } else if (source.droppableId !== "word-list" && destination.droppableId === "word-list") {
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

// // Функция для перемешивания массива
// const shuffleArray = (array: any[]) => {
//   const shuffledArray = [...array];
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// };

// const handleResetGame = () => {
//   // Сначала сбрасываем ответы пользователя и очищаем пропуски
//   setUserAnswers(Array(sentences.length).fill({ text: "", correct: null }));
//   setChecked(false);

//   // Затем возвращаем слова в контейнер слов
//   const shuffledWords = shuffleArray(words);
//   setAvailableWords([...shuffledWords]);
//   setInitialAvailableWords([...shuffledWords]);

//   // После этого вызываем функцию resetGame
//   resetGame();
// };

//   const showCorrectGameAnswers = () => {
//     setUserAnswers(
//       sentences.map((sentence) => ({
//         text: sentence.correctWords[0],
//         correct: true,
//       }))
//     );
//     setChecked(true);
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
//       {(provided) => (
//         <span
//           className={
//             checked &&
//             userAnswers[sentenceIndex]?.correct === true
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
//             border: "1px solid black",
//             boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
//           }}
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
//         <h3>Vocabulary Practice</h3>
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

// export default DragDropForm;

// import React, { useState, useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Button from "@mui/material/Button";

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

// interface DragDropFormProps extends WordsGame {
//   onWordMove: (word: string) => void;
//   resetGame: () => void;
// }

// const DragDropForm: React.FC<DragDropFormProps> = ({
//   sentences,
//   words,
//   onWordMove,
//   resetGame,
// }) => {
//   const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(
//     Array(sentences.length).fill({ text: "", correct: null })
//   );
//   const [checked, setChecked] = useState(false);
//   const [availableWords, setAvailableWords] = useState<string[]>(words);
//   const [initialAvailableWords, setInitialAvailableWords] =
//     useState<string[]>(words);

//   useEffect(() => {
//     // Перемешиваем массив слов при инициализации компонента
//     const shuffledWords = shuffleArray(words);
//     setAvailableWords(shuffledWords);
//     setInitialAvailableWords(shuffledWords);
//   }, []);

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

//   // Функция для перемешивания массива
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

//     // Затем возвращаем слова в контейнер слов
//     const shuffledWords = shuffleArray(words);
//     setAvailableWords([...shuffledWords]);
//     setInitialAvailableWords([...shuffledWords]);

//     // После этого вызываем функцию resetGame
//     resetGame();
//   };

//   const showCorrectGameAnswers = () => {
//     setUserAnswers(
//       sentences.map((sentence) => ({
//         text: sentence.correctWords[0],
//         correct: true,
//       }))
//     );
//     setChecked(true);
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
//       {(provided) => (
//         <span
//           className={
//             checked && userAnswers[sentenceIndex]?.correct === true
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
//             border: "1px solid black",
//             boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
//           }}
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
//         <h3>Vocabulary Practice</h3>
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

// export default DragDropForm;

import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button from "@mui/material/Button";
import "../../styles/DragSentences.css"

interface Sentence {
  id: string;
  text: string;
  correctWords: string[];
}

interface WordsGame {
  sentences: Sentence[];
  words: string[];
}

interface UserAnswer {
  text: string;
  correct: boolean | null;
}

interface DragDropFormProps extends WordsGame {
  onWordMove: (word: string) => void;
  resetGame: () => void;
}

const DragDropForm: React.FC<DragDropFormProps> = ({
  sentences,
  words,
  onWordMove,
  resetGame,
}) => {
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(
    Array(sentences.length).fill({ text: "", correct: null })
  );
  const [checked, setChecked] = useState(false);
  const [availableWords, setAvailableWords] = useState<string[]>(words);
  const [initialAvailableWords, setInitialAvailableWords] =
    useState<string[]>(words);
  const [activeBlank, setActiveBlank] = useState<number | null>(null);

  useEffect(() => {
    // Перемешиваем массив слов при инициализации компонента
    const shuffledWords = shuffleArray(words);
    setAvailableWords(shuffledWords);
    setInitialAvailableWords(shuffledWords);
  }, []);

  useEffect(() => {
    const shuffledWords = shuffleArray(words);

    setInitialAvailableWords(shuffledWords);
  }, [words]);

  const updateUserAnswer = (index: number, word: string) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const correctWords = sentences[index]?.correctWords || [];
      const isCorrect = correctWords.includes(word);
      newAnswers[index] = { text: word, correct: isCorrect };
      return newAnswers;
    });
  };

  const handleDragEnd = (result: import("react-beautiful-dnd").DropResult) => {
    const { destination, source } = result;
    if (!destination || !source) return;

    const sourceIndex =
      source.droppableId === "word-list"
        ? source.index
        : parseInt(source.droppableId.replace("sentence", ""), 10) - 1;
    const destinationIndex =
      destination.droppableId === "word-list"
        ? -1
        : parseInt(destination.droppableId.replace("sentence", ""), 10) - 1;
    const word =
      source.droppableId === "word-list"
        ? availableWords[source.index]
        : userAnswers[sourceIndex]?.text;

    if (source.droppableId !== destination.droppableId) {
      if (source.droppableId === "word-list") {
        const newAvailableWords = [...availableWords];
        newAvailableWords.splice(source.index, 1);
        setAvailableWords(newAvailableWords);
      } else {
        updateUserAnswer(sourceIndex, "");

        if (destination.droppableId === "word-list") {
          setAvailableWords((prevWords) => [...prevWords, word]);
        }
      }

      if (destination.droppableId === "word-list") {
        const newAvailableWords = [...availableWords];
        newAvailableWords.splice(destination.index, 0, word);
        setAvailableWords(newAvailableWords);
      } else {
        const oldWord = userAnswers[destinationIndex]?.text;
        if (oldWord) {
          setAvailableWords((prevWords) => [...prevWords, oldWord]);
        }
        updateUserAnswer(destinationIndex, word);
      }

      onWordMove(word);
    } else if (
      source.droppableId !== "word-list" &&
      destination.droppableId === "word-list"
    ) {
      const newAvailableWords = [...availableWords];
      newAvailableWords.push(word);
      setAvailableWords(newAvailableWords);
      updateUserAnswer(sourceIndex, "");
    }
  };

  const checkGameAnswers = () => {
    setUserAnswers((prevAnswers) => {
      return prevAnswers.map((answerObj, index) => {
        const userAnswer = answerObj.text;
        const correctWords = sentences[index]?.correctWords || [];
        const isCorrect = correctWords.includes(userAnswer);
        return { text: userAnswer, correct: isCorrect };
      });
    });
    setChecked(true);
  };

  // Функция для перемешивания массива
  const shuffleArray = (array: any[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleResetGame = () => {
    // Сначала сбрасываем ответы пользователя и очищаем пропуски
    setUserAnswers(Array(sentences.length).fill({ text: "", correct: null }));
    setChecked(false);

    // Затем возвращаем слова в контейнер слов
    const shuffledWords = shuffleArray(words);
    setAvailableWords([...shuffledWords]);
    setInitialAvailableWords([...shuffledWords]);

    // После этого вызываем функцию resetGame
    resetGame();
  };

  const showCorrectGameAnswers = () => {
    setUserAnswers(
      sentences.map((sentence) => ({
        text: sentence.correctWords[0],
        correct: true,
      }))
    );
    setChecked(true);
  };

  const handleBlankMouseEnter = (index: number) => {
    setActiveBlank(index);
  };

  const handleBlankMouseLeave = () => {
    setActiveBlank(null);
  };

  const renderBlank = (
    sentenceIndex: number,
    blankIndex: number,
    blankContent: string
  ) => (
    <Droppable
      key={`sentence${sentenceIndex + 1}-${blankIndex}`}
      droppableId={`sentence${sentenceIndex + 1}-${blankIndex}`}
    >
      {(provided, snapshot) => (
        <span
          className={
            (activeBlank === sentenceIndex &&
              snapshot.isDraggingOver) ||
            (checked &&
              userAnswers[sentenceIndex]?.correct === true)
              ? "correct-answer"
              : checked &&
                userAnswers[sentenceIndex]?.correct === false
              ? "incorrect-answer"
              : ""
          }
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            display: "inline-block",
            padding: "5px",
            margin: "5px",
            color: "#083643",
            borderRadius: "5px",
            background: "#ffffff",
            textShadow: "unset !important",
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
          }}
          onMouseEnter={() => handleBlankMouseEnter(sentenceIndex)}
          onMouseLeave={handleBlankMouseLeave}
        >
          {userAnswers[sentenceIndex]?.text !== "" ? (
            <Draggable
              key={`sentence${sentenceIndex + 1}-${blankIndex}`}
              draggableId={`sentence${sentenceIndex + 1}-${blankIndex}`}
              index={blankIndex}
            >
              {(provided) => (
                <span
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  {userAnswers[sentenceIndex].text}
                </span>
              )}
            </Draggable>
          ) : (
            "______"
          )}
          {provided.placeholder}
        </span>
      )}
    </Droppable>
  );

  const renderSentence = (sentence: Sentence, index: number) => (
    <Droppable key={sentence.id} droppableId={`sentence${index + 1}`}>
      {(provided) => (
        <div
          className="sentence-container-game"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {sentence.text.split(/______/).map((part, i, partsArray) => (
            <React.Fragment key={i}>
              <span>{part}</span>
              {i !== partsArray.length - 1 && renderBlank(index, i, part)}
            </React.Fragment>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );

  return (
    <div className="block drag-text-container">
      <div className="block-name dotted">
        {/* <h3>Vocabulary Practice</h3> */}
        <h4>Drag words into the right gaps!</h4>
      </div>
      <div className="drag-game-cont">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="sentences-container">
            {sentences.map(renderSentence)}
          </div>
          <Droppable droppableId="word-list">
            {(provided) => (
              <div
                className="word-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {availableWords.map((word, index) => (
                  <Draggable
                    key={`word${index}`}
                    draggableId={`word${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="drag-word"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {word}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="choose-buttons">
        <Button
          className="lesson-button"
          variant="contained"
          onClick={checkGameAnswers}
        >
          Submit
        </Button>
        <Button
          className="lesson-button"
          variant="contained"
          onClick={showCorrectGameAnswers}
        >
          Show Correct Answers
        </Button>
        <Button
          className="lesson-button"
          variant="contained"
          onClick={handleResetGame}
        >
          Start again
        </Button>
      </div>
    </div>
  );
};

export default DragDropForm;

