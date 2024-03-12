import React from "react";
import GrammarMFM from "./GrammarMFM";
import GrammarInput from "../../../../../features/Grammar-input/GrammarInput";

const Grammar: React.FC = () => {
  return (
    <div>
      <GrammarInput game={GrammarMFM} />
    </div>
  );
};

export default Grammar;
