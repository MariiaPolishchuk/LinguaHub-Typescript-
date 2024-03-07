import React, { useState, useEffect } from "react";
import DragDropForm from "../../../../features/Drag-drop-sentences/DragDropForm";
import { Link, useNavigate } from "react-router-dom";

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

const initialWordsData: string[] = [
  "craft",
  "burst",
  "forth",
  "set forth",
  "they set forth",
];

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
      setWordsData(initialWordsData);
      setResetFlag(false);
    }
  }, [resetFlag]);

  const handleWordMove = (word: string) => {
    setWordsData((prevWords) => prevWords.filter((w) => w !== word));
  };

  const resetGame = () => {
    setResetFlag(true);
  };

  const navigate = useNavigate();
  const [showStartButton, setShowStartButton] = useState(true);
  const [] = useState(0);

  const handleStartVoc = () => {
    setShowStartButton(false);
    navigate("/course/intermediate/my-fascinating-morning/lesson/voc-practise");
  };

  return (
    <div>
      <DragDropForm
        sentences={sentencesData}
        words={wordsData}
        onWordMove={handleWordMove}
        resetGame={resetGame}
      />
      <div className="choose-buttons">
        <Link
          className="lesson-link"
          onClick={handleStartVoc}
          to="/course/intermediate/my-fascinating-morning/lesson/voc-practise"
        >
          Next &gt;
        </Link>
      </div>
    </div>
  );
};

export default DragDropMFM;
