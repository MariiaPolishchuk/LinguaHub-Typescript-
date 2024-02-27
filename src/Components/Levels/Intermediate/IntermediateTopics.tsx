
import React from "react";
import { Link } from "react-router-dom";

const IntermediateTopics: React.FC = () => {
  return (
    <div>
      <h2>Intermediate Topics</h2>
      <div className="topic-list">
        <Link to="myfascinatingmorning">My Fascinating Morning</Link>
      </div>
    </div>
  );
};

export default IntermediateTopics;
