import React from "react";

interface BlankSpaceProps {
  index: number;
  onDrop: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
}

const BlankSpace: React.FC<BlankSpaceProps> = ({ index, onDrop, onDragOver }) => {
    return (
        <span
            className="answer blank-space"
            data-index={index}
            onDrop={(event: React.DragEvent<HTMLDivElement>) => onDrop(event, index)}
            onDragOver={onDragOver}
        ></span>
    );
};

export default BlankSpace;
