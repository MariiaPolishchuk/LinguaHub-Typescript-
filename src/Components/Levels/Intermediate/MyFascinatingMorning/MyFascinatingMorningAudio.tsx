import React from "react";
import AudioComponent from "../../../AudioComponent"; 

const MyFascinatingMorningAudio: React.FC = () => {
  const MFMAudioQuestions = [
    {
      showQuestionAtSecond: 14,
      blanks: ["blank1"],
      sentence:
        "The morning routine typically includes waking up, preparing for the day, enjoying a brief breakfast, and ______ on news or social media to stay informed about current events.",
      answers: ["catching up"],
    },
    {
      showQuestionAtSecond: 22,
      blanks: ["blank2"],
      sentence:
        "In the midst of the hustle and bustle of daily life, a morning routine ______ an anchor, providing a sense of purpose and direction.",
      answers: ["serves as"],
    },
  ];

  const audioFile = "/audio/audio.mp3"; 

  return (
    <div>
      <AudioComponent audioFile={audioFile} questions={MFMAudioQuestions} />
    </div>
  );
};

export default MyFascinatingMorningAudio;









// полный компонент

// import React, {
//   useState,
//   useEffect,
//   useRef,
//   useMemo,
//   useCallback,
// } from "react";
// import { Button, Box, Modal } from "@material-ui/core";
// import styled from "styled-components";

// const CustomTextField = styled.input`
//   border: 1px solid #ccc;
//   padding: 8px 10px;
//   font-size: 16px;
//   border-radius: 4px;
// `;

// interface AudioQuestion {
//   showQuestionAtSecond: number;
//   blanks: string[];
//   sentence: string;
//   answers: string[];
// }

// const MyFascinatingMorningAudio: React.FC = () => {
//   const audioRef = useRef<HTMLAudioElement>(new Audio("/audio/audio.mp3"));

//   const [audioQuestionObj, setAudioQuestionObj] =
//     useState<AudioQuestion | null>(null);
//   const [audioAnswerChecked, setAudioAnswerChecked] = useState<boolean>(false);
//   const [modalOpen, setModalOpen] = useState<boolean>(false);

//   const audioQuestions: AudioQuestion[] = useMemo(
//     () => [
//       {
//         showQuestionAtSecond: 14,
//         blanks: ["blank1"],
//         sentence:
//           "The morning routine typically includes waking up, preparing for the day, enjoying a brief breakfast, and ______ on news or social media to stay informed about current events.",
//         answers: ["catching up"],
//       },
//       {
//         showQuestionAtSecond: 22,
//         blanks: ["blank2"],
//         sentence:
//           "In the midst of the hustle and bustle of daily life, a morning routine ______ an anchor, providing a sense of purpose and direction.",
//         answers: ["serves as"],
//       },
//     ],
//     []
//   );

//   const autoExpand = useCallback(() => {
//     const inputField = document.getElementById("blank1");
//     if (inputField) {
//       inputField.style.width = "auto";
//       inputField.style.width = inputField.scrollWidth + 1 + "px";
//     }
//   }, []);

//   const handleTimeUpdate = useCallback(() => {
//     const currentTime = Math.floor(audioRef.current.currentTime);

//     if (audioAnswerChecked || audioQuestionObj) {
//       return;
//     }

//     if (currentTime === 0) {
//       setAudioAnswerChecked(false);
//       setAudioQuestionObj(null);
//     }

//     const questionObj = audioQuestions.find(
//       (q) => Math.abs(q.showQuestionAtSecond - currentTime) < 1
//     );

//     if (questionObj) {
//       console.log("Displaying question");
//       audioRef.current.pause();
//       setAudioQuestionObj(questionObj);
//       setAudioAnswerChecked(true);
//       setModalOpen(true); // Open the modal when question appears
//     }

//     if (!audioQuestionObj && currentTime >= audioRef.current.duration) {
//       console.log("Restarting audio");
//       audioRef.current.currentTime = 0;
//       audioRef.current.play();
//       setAudioAnswerChecked(false);
//     }
//   }, [audioAnswerChecked, audioQuestionObj, audioQuestions]);

//   useEffect(() => {
//     const timeUpdateHandler = () => handleTimeUpdate();
//     const audioElement = audioRef.current;

//     if (audioElement) {
//       audioElement.addEventListener("timeupdate", timeUpdateHandler);
//     }

//     return () => {
//       if (audioElement) {
//         audioElement.removeEventListener("timeupdate", timeUpdateHandler);
//       }
//     };
//   }, [handleTimeUpdate]);

//   const handleAnswerChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>, blank: string) => {
//       autoExpand();
//     },
//     [autoExpand]
//   );

//   const displayResults = useCallback(
//     (message: string, resultClass: string, correctAnswer?: string) => {
//       const audioResultsElement = document.getElementById("audioResults");

//       if (!audioResultsElement) {
//         console.error('Element with id "audioResults" not found.');
//         return;
//       }

//       audioResultsElement.innerHTML = "";

//       const messageElement = document.createElement("p");
//       messageElement.textContent = message;

//       if (!correctAnswer) {
//         messageElement.classList.add(resultClass);
//       } else {
//         const correctAnswerElement = document.createElement("span");
//         correctAnswerElement.textContent = " " + correctAnswer;
//         correctAnswerElement.classList.add("audio-correct-answer");

//         messageElement.appendChild(correctAnswerElement);
//         messageElement.classList.add(resultClass);
//       }

//       audioResultsElement.appendChild(messageElement);

//       setTimeout(() => {
//         setAudioQuestionObj(null);
//         audioRef.current.currentTime = audioRef.current.currentTime + 1;
//         audioRef.current.play();

//         // Clear styles
//         audioQuestions.forEach((question) => {
//           question.blanks.forEach((blank) => {
//             const blankElement = document.getElementById(blank);
//             if (blankElement) {
//               blankElement.classList.remove("audio-incorrect", "audio-correct");
//             }
//           });
//         });

//         // Clear results
//         if (audioResultsElement) {
//           audioResultsElement.innerHTML = "";
//         }
//       }, 3000);
//     },
//     [audioQuestions]
//   );

//   const checkAnswers = useCallback(
//     (question: AudioQuestion) => {
//       let correct = true;
//       const correctAnswers: string[] = [];

//       question.blanks.forEach((blank) => {
//         const blankElement = document.getElementById(blank);

//         if (!blankElement) {
//           console.error(`Element with id ${blank} not found.`);
//           return;
//         }

//         const userInput = (blankElement as HTMLInputElement).value.trim();
//         const currentCorrectAnswer =
//           question.answers[question.blanks.indexOf(blank)];

//         if (userInput.toLowerCase() !== currentCorrectAnswer.toLowerCase()) {
//           correct = false;
//           blankElement.classList.add("audio-incorrect");
//           if (!correctAnswers.includes(currentCorrectAnswer)) {
//             correctAnswers.push(currentCorrectAnswer);
//           }
//         } else {
//           blankElement.classList.remove("audio-incorrect");
//           blankElement.classList.add("audio-correct");
//         }
//       });

//       const correctAnswerMessage = correctAnswers.join(", ");

//       displayResults(
//         correct ? "Gorgeous!" : "You are wrong!",
//         correct ? "audio-correct" : "audio-incorrect",
//         correctAnswerMessage
//       );
//     },
//     [displayResults]
//   );

//   const handleAnswerSubmit = useCallback(() => {
//     if (!audioAnswerChecked || !audioQuestionObj) {
//       console.error(
//         "Answer check failed: audioAnswerChecked - false or audioQuestionObj - null"
//       );
//       return;
//     }

//     setAudioAnswerChecked(false);
//     setModalOpen(false); // Close the modal when submitting answer
//     if (audioQuestionObj) checkAnswers(audioQuestionObj);
//   }, [audioAnswerChecked, audioQuestionObj, checkAnswers]);

//   return (
//     <div className="task block">
//       <div className="block-name dotted">
//         <h3>Listening Practice</h3>
//         <h4>
//           Now we are going to practice your listening skills. During this audio
//           will be playing you will see the questions. After each answer tick the
//           submit button to check yourself. Audio won't be playing without
//           answer!
//         </h4>
//       </div>
//       <Box className="play">
//         <audio id="audioPlayer" controls ref={audioRef}>
//           <source src="/audio/audio.mp3" type="audio/mp3" />
//           Your browser does not support the audio element.
//         </audio>
//         <Modal
//           className="modal-container"
//           open={modalOpen}
//           onClose={() => setModalOpen(false)}
//         >
//           <div className="modal-content">
//             {audioQuestionObj && (
//               <Box className="modal-body audio-questions" id="question">
//                 {audioQuestionObj.sentence
//                   .split("______")
//                   .map((part, index) => (
//                     <React.Fragment key={index}>
//                       {part}
//                       {index < audioQuestionObj.blanks.length && (
//                         <CustomTextField
//                           key={audioQuestionObj.blanks[index]}
//                           id={audioQuestionObj.blanks[index]}
//                           className="userInput"
//                           onChange={(e) =>
//                             handleAnswerChange(
//                               e,
//                               audioQuestionObj.blanks[index]
//                             )
//                           }
//                         />
//                       )}
//                     </React.Fragment>
//                   ))}
//               </Box>
//             )}

//             <Button
//               className="lesson-button"
//               variant="contained"
//               id="checkAnswersBtnAudio"
//               onClick={handleAnswerSubmit}
//             >
//               Submit Answer
//             </Button>
//           </div>
//         </Modal>
//         <Box id="audioResults"></Box>
//       </Box>
//     </div>
//   );
// };

// export default MyFascinatingMorningAudio;
