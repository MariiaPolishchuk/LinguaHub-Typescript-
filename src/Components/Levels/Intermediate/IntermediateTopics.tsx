import React from "react";
import { Link } from "react-router-dom";

const IntermediateTopics: React.FC = () => {
  return (
    <div className="topics">
      <h2>Intermediate Topics</h2>
      <div className="topic-list">
        <Link to="myfascinatingmorning">My Fascinating Morning</Link>
        <Link to="jobinterview">Job Interview</Link>
      </div>
    </div>
  );
};

export default IntermediateTopics;
