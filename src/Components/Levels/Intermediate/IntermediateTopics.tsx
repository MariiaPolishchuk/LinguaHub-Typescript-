import React from "react";
import { Link } from "react-router-dom";

const IntermediateTopics: React.FC = () => {
  return (
    <div className="topics">
      <h2 className="level-name">Intermediate Topics</h2>
      <div className="topic-list">
        <Link to="my-fascinating-morning">My Fascinating Morning</Link>
        <Link to="jobinterview">Job Interview</Link>
      </div>
    </div>
  );
};

export default IntermediateTopics;



