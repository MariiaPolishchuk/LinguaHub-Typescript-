import React, { useEffect, useState } from "react";
import { Typography, List, ListItem, Button } from "@mui/material"; // Убран импорт Paper

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

  const shuffleWords = () => {
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
    setAnswers(shuffledWords);
  };

  useEffect(() => {
    setCorrectAnswers([...words]);
    shuffleWords();
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
        draggedElement.classList.add("correct-quiz");
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
      answer.textContent = correctAnswers[index]; // Показываем правильные ответы из исходного массива correctAnswers
    });
  };

  const resetQuiz = () => {
    const answerSpans = document.querySelectorAll(".answer");
    answerSpans.forEach((span) => {
      span.textContent = "";
    });
    shuffleWords(); // Перемешиваем слова
    setCorrectAnswers([...words]); // Устанавливаем correctAnswers равным исходному массиву words
  };

  const checkQuizAnswers = () => {
    const answerSpans = document.querySelectorAll(".answer");
    answerSpans.forEach((span, index) => {
      span.classList.remove("correct-quiz", "incorrect-quiz");
      const userAnswer = span.textContent?.trim();
      const correctAnswer = correctAnswers[index]; // Используем массив correctAnswers для сравнения

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
      <div className="dgag"> {/* Заменяем Paper на div */}
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
              <Typography>
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
                    return part;
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



// VocabularyPracticeWithDragItem.tsx




// import React, { useEffect, useState } from "react";
// import { Typography, List, ListItem, Button } from "@mui/material";
// import { Droppable, Draggable } from "react-beautiful-dnd"; // Исправленные импорты
// import vocabularyData from "../Components/Levels/Intermediate/MyFascinatingMorning/data";

// const VocabularyPractice: React.FC = () => {
//   const { text, words } = vocabularyData;

//   const [answers, setAnswers] = useState<string[]>([]);
//   const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);

//   useEffect(() => {
//     setCorrectAnswers([...words]);
//     shuffleWords();
//   }, []);

//   const shuffleWords = () => {
//     const shuffledWords = [...words].sort(() => Math.random() - 0.5);
//     setAnswers(shuffledWords);
//   };

//   const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   };

//   const drop = (index: number, data: string) => {
//     const newAnswers = [...answers];
//     newAnswers[index] = data;
//     setAnswers(newAnswers);
//   };

//   const showCorrectAnswers = () => {
//     setAnswers([...correctAnswers]);
//   };

//   const resetQuiz = () => {
//     shuffleWords();
//     setAnswers([]);
//   };

//   const checkQuizAnswers = () => {
//     console.log("User Answers:", answers);
//     console.log("Correct Answers:", correctAnswers);
//   };

//   return (
//     <div className="drag-words block">
//       <div className="dgag">
//         <div className="block-name dotted">
//           <h3>Vocabulary Practice</h3>
//           <h4>
//             Complete the sentences by dragging words into the gaps. Do not drag
//             words you have already put into the gap to another gap. Just move
//             the word from your list to the word that is already in the blank,
//             and the previous word will return! Don't forget to check your
//             answers!
//           </h4>
//         </div>
//         <div id="quiz-container" className="quiz-container">
//           <List>
//             <ListItem>
//               <Typography>
//                 {text.split(/(\b_____\b)/).map((part, index) => {
//                   if (part.trim() === "_____") {
//                     return (
//                       <Droppable key={index} droppableId={`droppable-${index}`}>
//                         {(provided) => (
//                           <div
//                             ref={provided.innerRef}
//                             {...provided.droppableProps}
//                             className="answer blank-space"
//                             data-index={(index + 1) / 2}
//                             onDrop={(_event: React.DragEvent<HTMLDivElement>, provided: { draggableId: string; }) => drop((index + 1) / 2, provided.draggableId)}
//                             onDragOver={allowDrop}
//                           >
//                             {answers[(index + 1) / 2]}
//                             {provided.placeholder}
//                           </div>
//                         )}
//                       </Droppable>
//                     );
//                   } else {
//                     return part;
//                   }
//                 })}
//               </Typography>
//             </ListItem>
//           </List>
//           <div className="drag-container" id="drag-container">
//             <Droppable droppableId="words">
//               {(provided) => (
//                 <div {...provided.droppableProps} ref={provided.innerRef}>
//                   {answers.map((word, index) => (
//                     <Draggable key={index} draggableId={`word-${index}`} index={index}>
//                       {(provided) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           className="drag-item"
//                         >
//                           {word}
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </div>
//         </div>
//         <div className="choose-buttons">
//           <Button
//             className="lesson-button"
//             variant="contained"
//             onClick={checkQuizAnswers}
//           >
//             Check Answers
//           </Button>
//           <Button
//             className="lesson-button"
//             variant="contained"
//             onClick={resetQuiz}
//           >
//             Reset Quiz
//           </Button>
//           <Button
//             className="lesson-button"
//             variant="contained"
//             onClick={showCorrectAnswers}
//           >
//             Show Correct Answers
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VocabularyPractice;










// VocabularyPractice.tsx
// import React, { useEffect, useState } from 'react';
// import { Typography, Button, List, ListItem, Paper } from '@mui/material';

// const VocabularyPractice = () => {
//   const [answers] = useState([
//     "forth", "so", "affecting", "fostering", "shapes", "stability", "contributing", "productivity", "preparing", "self",
//     "care", "role", "progress", "well-being", "reflection", "healthier", "gratitude", "anchors", "purposeful", "challenges"
//   ]);

//   useEffect(() => {
//     shuffleWords();
//   }, []);

//   const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   }

//   const drag = (event: React.DragEvent<HTMLDivElement>) => {
//     event.dataTransfer.setData("text", event.currentTarget.innerText);
//   }

//   const drop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const data = event.dataTransfer.getData("text");
//     const draggedElement = event.currentTarget;

//     if (draggedElement.classList.contains("answer")) {
//       const wordToRestore = draggedElement.innerText.trim();
//       if (!wordToRestore) {
//         draggedElement.innerText = data;
//         draggedElement.classList.add("correct-quiz");
//         const dragItem = findDragItemByText(data);
//         if (dragItem) {
//           dragItem.style.display = "none";
//         }
//       } else {
//         const prevDragItem = findDragItemByText(wordToRestore);
//         if (prevDragItem) {
//           prevDragItem.style.display = "block";
//         }
//         draggedElement.innerText = data;
//         const dragItem = findDragItemByText(data);
//         if (dragItem) {
//           dragItem.style.display = "none";
//         }
//       }
//     } else {
//       draggedElement.classList.add("incorrect-quiz");
//     }
//   }

//   const resetQuizForms = () => {
//     const answerSpans = document.querySelectorAll(".answer");
//     answerSpans.forEach((span) => {
//       const wordToRestore = (span as HTMLElement).innerText.trim();
//       const dragItem = findDragItemByText(wordToRestore);
//       if (dragItem) {
//         dragItem.style.display = "block";
//       }

//       (span as HTMLElement).innerText = "";
//       span.classList.remove("correct-quiz", "incorrect-quiz");
//     });
//     shuffleWords();
//   }

//   const showCorrectQuizAnswers = () => {
//     const answerSpans = document.querySelectorAll(".answer");
//     answers.forEach((answer, index) => {
//       (answerSpans[index] as HTMLElement).innerText = answer;
//       answerSpans[index].classList.add("correct-quiz");
//     });
//   }

//   const checkAndShowQuizAnswers = () => {
//     const answerSpans = document.querySelectorAll(".answer");
//     answerSpans.forEach((span, index) => {
//       span.classList.remove("correct-quiz", "incorrect-quiz");
//       const userAnswer = (span as HTMLElement).innerText.trim();
//       const correctAnswer = answers[index];

//       if (userAnswer === correctAnswer) {
//         span.classList.add("correct-quiz");
//       } else {
//         span.classList.add("incorrect-quiz");
//       }
//     });
//   }

//   const shuffleWords = () => {
//     const dragContainer = document.getElementById("drag-container");
//     if (dragContainer) {
//       for (let i = dragContainer.children.length; i >= 0; i--) {
//         dragContainer.appendChild(dragContainer.children[(Math.random() * i) | 0]);
//       }
//     }
//   }

//   const findDragItemByText = (text: string) => {
//     const dragItems = document.querySelectorAll('.drag-item');
//     for (const item of dragItems) {
//       if ((item as HTMLElement).innerText.trim() === text) {
//         return item as HTMLElement;
//       }
//     }
//     return null;
//   }

//   return (
//     <div className="drag-words block">
//       <Paper elevation={3}>
//         <div className="block-name dotted">
//           <h3>Vocabulary Practise</h3>
//           <h4>
//             Complete the sentences by dragging words into the gaps. Do not drag words you have already put into the gap to another gaps. Just move the word from your list to the word that is already in the blank and previous word will return! Don't forget to check your answers!
//           </h4>
//         </div>
//         <div id="quiz-container" className="quiz-container">
//           <List>
//             <ListItem>
//               <Typography>The dawn of a new day brings <span className="answer blank-space" data-index="1" onDrop={drop} onDragOver={allowDrop}></span> an opportunity to shape the hours ahead, and one of the most powerful ways to do <span className="answer blank-space" data-index="2" onDrop={drop} onDragOver={allowDrop}></span> is through the practice of morning rituals. These intentional and mindful routines hold a profound significance, <span className="answer blank-space" data-index="3" onDrop={drop} onDragOver={allowDrop}></span> various aspects of our well-being and setting the tone for the entire day. Morning rituals serve as a foundation for <span className="answer blank-space" data-index="4" onDrop={drop} onDragOver={allowDrop}></span> a positive mindset. By starting the day with purposeful activities, whether it be meditation, affirmations, or gratitude exercises, we set a positive tone that <span className="answer blank-space" data-index="5" onDrop={drop} onDragOver={allowDrop}></span> our outlook on challenges and opportunities.Establishing a consistent morning routine provides a sense of <span className="answer blank-space" data-index="6" onDrop={drop} onDragOver={allowDrop}></span> in an otherwise dynamic world. Knowing what to expect each morning fosters a feeling of control,<span className="answer blank-space" data-index="7" onDrop={drop} onDragOver={allowDrop}></span> to emotional balance and overall well-being.</Typography>
//             </ListItem>
//             <ListItem>
//               <Typography>Morning rituals have the power to enhance <span className="answer blank-space" data-index="8" onDrop={drop} onDragOver={allowDrop}></span> and focus throughout the day. Whether it involves exercise, planning, or goal-setting, these intentional practices stimulate the mind and body, <span className="answer blank-space" data-index="9" onDrop={drop} onDragOver={allowDrop}></span> us for the tasks that lie ahead. The morning is an ideal time to prioritize <span className="answer blank-space" data-index="10" onDrop={drop} onDragOver={allowDrop}></span>-care. Whether through a nourishing breakfast, skincare routine, or a few moments of quiet reflection, morning rituals emphasize the importance of taking <span className="answer blank-space" data-index="11" onDrop={drop} onDragOver={allowDrop}></span> of oneself before attending to the demands of the external world.
//               </Typography>
//             </ListItem>
//             <ListItem>
//               <Typography>Morning rituals play a crucial<span className="answer blank-space" data-index="12" onDrop={drop} onDragOver={allowDrop}></span> in setting and achieving daily goals. By incorporating goal-setting activities into our morning routine, we create a roadmap for the day, fostering a sense of accomplishment and <span className="answer blank-space" data-index="13" onDrop={drop} onDragOver={allowDrop}></span>. Activities like morning exercise or a nutritious breakfast contribute to the physical <span className="answer blank-space" data-index="14" onDrop={drop} onDragOver={allowDrop}></span> of an individual. These rituals boost energy levels, metabolism, and overall health, laying the groundwork for a <span className="answer blank-space" data-index="15" onDrop={drop} onDragOver={allowDrop}></span> lifestyle.
//               Morning rituals provide opportunities for mindfulness and <span className="answer blank-space" data-index="16" onDrop={drop} onDragOver={allowDrop}></span>. Whether it's savoring a cup of tea or practicing mindfulness meditation, these moments of reflection help cultivate <span className="answer blank-space" data-index="17" onDrop={drop} onDragOver={allowDrop}></span> for the present and set a positive tone for the day.
//               </Typography>
//             </ListItem>
//             <ListItem>
//               <Typography>Considered a pivotal foundation for the rest of the day, morning rituals act as <span className="answer blank-space" data-index="18" onDrop={drop} onDragOver={allowDrop}></span>. By intentionally crafting a positive and <span className="answer blank-space" data-index="19" onDrop={drop} onDragOver={allowDrop}></span> start, individuals create a strong foundation that influences their mindset and actions as they navigate daily <span className="answer blank-space" data-index="20" onDrop={drop} onDragOver={allowDrop}></span>.
//               </Typography>
//             </ListItem>
//           </List>
//           <div className="drag-container" id="drag-container">
//             {answers.map((answer, index) => (
//               <div key={index} className="drag-item" draggable="true" onDragStart={drag}>{answer}</div>
//             ))}
//           </div>
//         </div>
//         <div className="choose-buttons">
//           <Button className='lesson-button' variant="contained" onClick={checkAndShowQuizAnswers}>Check Answers</Button>
//           <Button className='lesson-button' variant="contained" onClick={resetQuizForms}>Reset Quiz</Button>
//           <Button className='lesson-button' variant="contained" onClick={showCorrectQuizAnswers}>Show Correct Answers</Button>
//         </div>
//       </Paper>
//     </div>
//   );
// };

// export default VocabularyPractice;
