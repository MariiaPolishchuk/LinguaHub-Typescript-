import React from "react";
import { Tooltip } from "@mui/material";

interface VideoTextProps {
  text: string[];
  tooltips: { term: string; definition: string; }[];
}

const VideoText: React.FC<VideoTextProps> = ({ text, tooltips }) => {
  return (
    <div className="video-text">
      {text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div className="video-tooltips">
        <p>Vocabulary</p>
        {tooltips.map((tooltip, index) => (
          <Tooltip key={index} title={tooltip.definition}>
            <span>{tooltip.term}</span>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default VideoText;

