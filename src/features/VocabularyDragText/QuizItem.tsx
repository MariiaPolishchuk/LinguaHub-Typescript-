
import React from "react";

interface QuizItemProps {
  index: number;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
}

const QuizItem: React.FC<QuizItemProps> = ({ index, onDrop, onDragOver, onDragStart, children }) => {
  return (
    <div
      className="drag-item"
      draggable={true}
      onDragStart={(event: React.DragEvent<HTMLDivElement>) => onDragStart(event)}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {children}
    </div>
  );
};

export default QuizItem;


