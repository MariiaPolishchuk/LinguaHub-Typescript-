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
//       // Возвращаем старое слово обратно в список слов
//       words.push(oldWord);
//       // Удаляем слово из пользовательских ответов
//       updateUserAnswer(sentenceIndex, word);
//     }

//     // Обновляем пользовательский ответ
//     updateUserAnswer(sentenceIndex, word);
//     // Вызываем функцию передвижения слова
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
//     <div>
//       <div className="block-name dotted">
//         <h3>Listening Practice</h3>
//         <h4>
//           Now we are going to practice your listening skills. During this audio
//           will be playing you will see the questions. After each answer tick the
//           submit button to check yourself. Audio won't be playing without
//           answer!
//         </h4>
//       </div>
//       <div className="drag-game-cont">
//         <DragDropContext onDragEnd={onDragEnd}>
//           {sentences.map((sentence, index) => (
//             <Droppable key={sentence.id} droppableId={`sentence${index + 1}`}>
//               {(provided) => (
//                 <div
//                   className="sentence-container-game"
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   {sentence.text.split(/______/).map((part, i, partsArray) => (
//                     <React.Fragment key={i}>
//                       <span>{part}</span>
//                       {i !== partsArray.length - 1 && (
//                         <Droppable
//                           key={`sentence${index + 1}-${i}`}
//                           droppableId={`sentence${index + 1}-${i}`}
//                         >
//                           {(provided) => (
//                             <span
//                               className={
//                                 checked && userAnswers[index].correct === true
//                                   ? "correct-answer"
//                                   : checked &&
//                                     userAnswers[index].correct === false
//                                   ? "incorrect-answer"
//                                   : ""
//                               }
//                               ref={provided.innerRef}
//                               {...provided.droppableProps}
//                               style={{
//                                 display: "inline-block",
//                                 padding: "5px",
//                                 margin: "5px",
//                                 border: "1px solid black",
//                               }}
//                             >
//                               {userAnswers[index].text !== ""
//                                 ? userAnswers[index].text
//                                 : "______"}
//                               {provided.placeholder}
//                             </span>
//                           )}
//                         </Droppable>
//                       )}
//                     </React.Fragment>
//                   ))}
//                   {provided.placeholder}
//                 </div>
                
//               )}
//             </Droppable>
//           ))}
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
//                         className="word"
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
//         <div className="button-cont">
//           <Button onClick={checkGameAnswers}>Submit</Button>
//           <Button onClick={showCorrectGameAnswers}>Show Correct Answers</Button>
//           <Button onClick={handleResetGame}>Start again</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DragDropForm;


import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button from "@mui/material/Button";

interface Sentence {
  id: string;
  text: string;
  correctWords: string[];
}

interface WordsGame {
  sentences: Sentence[];
  words: string[];
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
  const [userAnswers, setUserAnswers] = useState<
    Array<{ text: string; correct: boolean | null }>
  >(Array(sentences.length).fill({ text: "", correct: null }));
  const [checked, setChecked] = useState(false);

  const updateUserAnswer = (index: number, word: string) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const correctWords = sentences[index].correctWords;
      newAnswers[index] = {
        text: word,
        correct: correctWords.includes(word),
      };
      return newAnswers;
    });
  };

  const onDragEnd = (result: import("react-beautiful-dnd").DropResult) => {
    const { destination, source } = result;
    if (!destination || !source) return;

    const destinationId = destination.droppableId;
    const sourceId = source.droppableId;

    if (destinationId === sourceId) return;

    const sentenceIndex =
      parseInt(destinationId.replace("sentence", ""), 10) - 1;
    const wordIndex = source.index;
    const word = words[wordIndex];

    const oldWord = userAnswers[sentenceIndex]?.text;
    if (oldWord) {
      // Возвращаем старое слово обратно в список слов
      words.push(oldWord);
      // Удаляем слово из пользовательских ответов
      updateUserAnswer(sentenceIndex, word);
    }

    // Обновляем пользовательский ответ
    updateUserAnswer(sentenceIndex, word);
    // Вызываем функцию передвижения слова
    onWordMove(word);
  };

  const checkGameAnswers = () => {
    setUserAnswers((prevAnswers) => {
      return prevAnswers.map((answerObj, index) => {
        const userAnswer = answerObj.text;
        const correctWords = sentences[index].correctWords;
        const isCorrect = correctWords.includes(userAnswer);
        return { text: userAnswer, correct: isCorrect };
      });
    });
    setChecked(true);
  };

  const handleResetGame = () => {
    setUserAnswers(Array(sentences.length).fill({ text: "", correct: null }));
    setChecked(false);
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

  return (
    <div className="all-sentences-container">
      <div className="block-name dotted">
        <h3>Listening Practice</h3>
        <h4>
          Now we are going to practice your listening skills. During this audio
          will be playing you will see the questions. After each answer tick the
          submit button to check yourself. Audio won't be playing without
          answer!
        </h4>
      </div>
      <div className="drag-game-cont">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="sentences-container">
            {sentences.map((sentence, index) => (
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
                        {i !== partsArray.length - 1 && (
                          <Droppable
                            key={`sentence${index + 1}-${i}`}
                            droppableId={`sentence${index + 1}-${i}`}
                          >
                            {(provided) => (
                              <span
                                className={
                                  checked && userAnswers[index].correct === true
                                    ? "correct-answer"
                                    : checked &&
                                      userAnswers[index].correct === false
                                    ? "incorrect-answer"
                                    : ""
                                }
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                  display: "inline-block",
                                  padding: "5px",
                                  margin: "5px",
                                  border: "1px black",
                                  boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
                                }}
                              >
                                {userAnswers[index].text !== ""
                                  ? userAnswers[index].text
                                  : "______"}
                                {provided.placeholder}
                              </span>
                            )}
                          </Droppable>
                        )}
                      </React.Fragment>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
          <Droppable droppableId="word-list">
            {(provided) => (
              <div
                className="word-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {words.map((word, index) => (
                  <Draggable
                    key={word}
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
      <div className="button-cont">
          <Button onClick={checkGameAnswers}>Submit</Button>
          <Button onClick={showCorrectGameAnswers}>Show Correct Answers</Button>
          <Button onClick={handleResetGame}>Start again</Button>
        </div>
    </div>
  );
};

export default DragDropForm;
