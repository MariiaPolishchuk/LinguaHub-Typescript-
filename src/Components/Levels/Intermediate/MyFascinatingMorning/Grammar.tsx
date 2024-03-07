import React, { useState } from "react";
import GrammarMFM, { WordsGame } from "./GrammarMFM";
import GrammarInput from "../../../../features/Grammar-input/GrammarInput";
import { Link, useNavigate } from "react-router-dom";

const Grammar: React.FC = () => {
  const game: WordsGame = GrammarMFM;

  const navigate = useNavigate();
  const [showStartButton, setShowStartButton] = useState(true);
  const [] = useState(0);

  const handleStartSynonyms = () => {
    setShowStartButton(false);
    navigate("/course/intermediate/my-fascinating-morning/lesson/find-synonyms");
  };

  return (
    <div>
      <GrammarInput game={GrammarMFM} />
      {/* <Link
        className="lesson-link"
        onClick={handleStartSynonyms}
        to="/course/intermediate/my-fascinating-morning/lesson/find-synonyms"
      >
        Next &gt;
      </Link> */}
    </div>
  );
};

export default Grammar;
