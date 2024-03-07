
import React from "react";
import { Tooltip } from "@material-ui/core";

interface Term {
  word: string;
  description: string;
}

interface Props {
  terms: Term[];
}

const TermList: React.FC<Props> = ({ terms }) => {
  return (
    <>
      {terms.map((term, index) => (
        <div key={index}>
          <Tooltip title={term.description}>
            <span>{term.word}</span>
          </Tooltip>
          <br />
        </div>
      ))}
    </>
  );
};

export default TermList;


