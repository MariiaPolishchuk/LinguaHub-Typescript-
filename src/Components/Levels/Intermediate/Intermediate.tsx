import React from "react";
import { Routes, Route } from "react-router-dom";
import IntermediateTopics from "./IntermediateTopics";
import MyFascinatingMorning from "./MyFascinatingMorning/MyFascinatingMorning";
import JobInterview from "./JobInterview/JobInterview";

const Intermediate: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<IntermediateTopics />} />
      <Route path="myfascinatingmorning/*" element={<MyFascinatingMorning />} />
      <Route path="jobinterview/*" element={<JobInterview />} />
    </Routes>
  );
};

export default Intermediate;

