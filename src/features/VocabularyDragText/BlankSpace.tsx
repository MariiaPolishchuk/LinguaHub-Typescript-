import React from "react";

interface BlankSpaceProps {
  index: number;
  word: string | null;
  onDrop: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, word: string, index: number) => void;
}

const BlankSpace: React.FC<BlankSpaceProps> = ({
  index,
  word,
  onDrop,
  onDragOver,
  onDragStart,
}) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, word: string, index: number) => {
    if (word) {
      onDragStart(event, word, index);
    }
  };

  return (
    <span
      className="answer blank-space"
      data-index={index}
      onDrop={(event: React.DragEvent<HTMLDivElement>) => onDrop(event, index)}
      onDragOver={onDragOver}
      draggable={word !== null}
      onDragStart={(event: React.DragEvent<HTMLDivElement>) => handleDragStart(event, word || "", index)}
    >
      {word || ""}
    </span>
  );
};

export default BlankSpace;
