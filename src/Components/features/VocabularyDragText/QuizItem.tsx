import React from "react";

interface QuizItemProps {
  index: number;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
}

const QuizItem: React.FC<QuizItemProps> = ({ index, onDrop, onDragOver }) => {
  return (
    <span
      className="answer blank-space"
      data-index={index}
      onDrop={onDrop}
      onDragOver={onDragOver}
    ></span>
  );
};

export default QuizItem;






