import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VocabularyPractice from "../../../../features/VocabularyDragText/VocabularyPractise";
import Sticker from "../../../../features/Tooltip-for-test/Sticker";
import terms from "./TermListData";

const VocabularyPracticePage = ({
  text,
  words,
}: {
  text: string;
  words: string[];
}) => {
  const navigate = useNavigate();
  const [showStartButton, setShowStartButton] = useState(true);

  const handleStartSynonyms = () => {
    setShowStartButton(false);
    navigate(
      "/course/intermediate/my-fascinating-morning/lesson/find-synonyms"
    );
  };

  return (
    <div>
      <div className="lesson-block">
        <div className="sticker-container">
          <Sticker terms={terms} />
        </div>
        <div className="blocks">
          <VocabularyPractice text={text} words={words} />
          <div className="choose-buttons">
          <Link
          className="lesson-link"
          onClick={handleStartSynonyms}
          to="/course/intermediate/my-fascinating-morning/lesson/find-synonyms"
        >
          Next &gt;
        </Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default VocabularyPracticePage;
