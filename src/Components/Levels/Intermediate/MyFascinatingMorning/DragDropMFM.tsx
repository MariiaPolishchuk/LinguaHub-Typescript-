// import React from "react";
// import DragDropForm from "../../../DragDropForm";

// // Интерфейс для предложения
// interface Sentence {
//   id: string;
//   text: string;
//   correctWords: string[];
// }

// // Интерфейс для массива слов
// interface WordsGame {
//   sentences: Sentence[];
//   words: string[];
// }

// // Массив предложений и слов
// const sentencesData: Sentence[] = [
//   {
//     id: "sentence1",
//     text: "______ of furniture making and sewing, glassblowing",
//     correctWords: ["craft"],
//   },
//   { id: "sentence2", text: "Applause ______", correctWords: ["burst forth"] },
//   { id: "sentence3", text: "dashing ______", correctWords: ["forth"] },
//   {
//     id: "sentence4",
//     text: "______ on their travels in early June",
//     correctWords: ["set forth"],
//   },
//   {
//     id: "sentence5",
//     text: "______ the conditions for her release",
//     correctWords: ["they set forth"],
//   },
// ];

// const wordsData: string[] = ["craft", "burst", "forth", "set forth", "they set forth"];

// const DragDropMFM: React.FC = () => {
//   return (
//     <div>
//       <h4>Drag words into the right gaps!</h4>
//       <DragDropForm sentences={sentencesData} words={wordsData} />
//     </div>
//   );
// };

// export default DragDropMFM;


// DragDropMFM.tsx
// DragDropMFM.tsx
// DragDropMFM.tsx
// DragDropMFM.tsx

import React, { useState, useEffect } from "react";
import DragDropForm from "../../../DragDropForm";

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

const initialWordsData: string[] = ["craft", "burst", "forth", "set forth", "they set forth"];

const sentencesData: Sentence[] = [
  {
    id: "sentence1",
    text: "______ of furniture making and sewing, glassblowing",
    correctWords: ["craft"],
  },
  { id: "sentence2", text: "Applause ______", correctWords: ["burst forth"] },
  { id: "sentence3", text: "dashing ______", correctWords: ["forth"] },
  {
    id: "sentence4",
    text: "______ on their travels in early June",
    correctWords: ["set forth"],
  },
  {
    id: "sentence5",
    text: "______ the conditions for her release",
    correctWords: ["they set forth"],
  },
];

const DragDropMFM: React.FC = () => {
  const [wordsData, setWordsData] = useState<string[]>(initialWordsData);
  const [resetFlag, setResetFlag] = useState<boolean>(false);

  useEffect(() => {
    if (resetFlag) {
      setWordsData(initialWordsData); // Сбрасываем список слов
      setResetFlag(false);
    }
  }, [resetFlag]);

  const handleWordMove = (word: string) => {
    setWordsData(prevWords => prevWords.filter(w => w !== word));
  };

  const resetGame = () => {
    setResetFlag(true);
  };

  return (
    <div>
      <h4>Drag words into the right gaps!</h4>
      <DragDropForm sentences={sentencesData} words={wordsData} onWordMove={handleWordMove} resetGame={resetGame} />
    </div>
  );
};

export default DragDropMFM;


