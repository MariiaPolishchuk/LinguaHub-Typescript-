
import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import TermList from "./Levels/Intermediate/MyFascinatingMorning/TermList";

const Sticker: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const checkScreenWidth = () => {
    setIsSmallScreen(window.innerWidth <= 926);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div className="sticker-container"> 
      <div className="tooltip-lesson">
        <p>Vocabulary</p>
        {!isSmallScreen && (
          <div>
            <TermList />
          </div>
        )}
        {isSmallScreen && (
          <div>
            <Button
              className="lesson-button"
              onClick={() => setShowTerms(!showTerms)}
            >
              Show Terms
            </Button>
            {showTerms && <TermList />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sticker;
