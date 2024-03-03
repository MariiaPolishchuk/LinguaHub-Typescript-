import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import TermList from "./TermList";

interface Term {
  word: string;
  description: string;
}

interface Props {
  terms: Term[];
}

const Sticker: React.FC<Props> = ({ terms }) => {
  const [showTerms, setShowTerms] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 926);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setShowTerms(!isSmallScreen); 
  }, [isSmallScreen]);

  return (
    <div className={`sticker-container ${showTerms ? "showing-terms" : ""}`}>
      <div className="tooltip-lesson">
        <p>Vocabulary</p>
        {isSmallScreen && (
          <Button
            className="lesson-button"
            onClick={() => setShowTerms(!showTerms)}
          >
            Show Terms
          </Button>
        )}
        {showTerms && <TermList terms={terms} />}
      </div>
    </div>
  );
};

export default Sticker;

