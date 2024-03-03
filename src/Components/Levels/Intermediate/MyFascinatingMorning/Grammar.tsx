import React from "react";
import GrammarMFM, { WordsGame } from "./GrammarMFM";
import GrammarInput from "../../../features/Grammar-input/GrammarInput";

const Grammar: React.FC = () => {
  const game: WordsGame = GrammarMFM;

  return (
    <div>
      <GrammarInput game={GrammarMFM} />
    </div>
  );
};

export default Grammar;
