import React from "react";
import { Routes, Route } from "react-router-dom";
import IntermediateTopics from "./IntermediateTopics";
import MyFascinatingMorning from "./MyFascinatingMorning/MyFascinatingMorning";

const Intermediate: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<IntermediateTopics />} />
      <Route path="myfascinatingmorning/*" element={<MyFascinatingMorning />} />
    </Routes>
  );
};

export default Intermediate;

