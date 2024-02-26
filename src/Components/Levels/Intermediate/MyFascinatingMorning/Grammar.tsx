import React from "react";
import GrammarMFM, { WordsGame } from "./GrammarMFM";
import GrammarInput from "../../../GrammarInput";

const Grammar: React.FC = () => {
    const game: WordsGame = GrammarMFM; 

    return (
        <div>
            <h2>Grammar</h2>
            <GrammarInput game={GrammarMFM} /> 
        </div>
    );
}

export default Grammar;
