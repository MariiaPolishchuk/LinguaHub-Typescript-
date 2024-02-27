// // Sticker.tsx
// import React, { useState, useEffect } from "react";
// import { Button } from "@material-ui/core";
// import TermList from "./Levels/Intermediate/MyFascinatingMorning/TermList";

// const Sticker: React.FC = () => {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   const [showTerms, setShowTerms] = useState(false);

//   const checkScreenWidth = () => {
//     setIsSmallScreen(window.innerWidth <= 768);
//   };

//   // Підписка на подію зміни розміру вікна при монтуванні компонента
//   useEffect(() => {
//     checkScreenWidth();
//     window.addEventListener("resize", checkScreenWidth);
//     return () => {
//       window.removeEventListener("resize", checkScreenWidth);
//     };
//   }, []);

//   return (
//     <div className="tooltip-lesson">
//       <p>Vocabulary</p>
//       {/*  на великих екранах */}
//       {!isSmallScreen && (
//         <div>
//           <TermList />
//         </div>
//       )}
//       {/* на малих екранах */}
//       {isSmallScreen && (
//         <div>
//           <Button
//             className="lesson-button"
//             onClick={() => setShowTerms(!showTerms)}
//           >
//             Show Terms
//           </Button>
//           {showTerms && <TermList />}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sticker;


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
    <div className="sticker-container"> {/* Используем класс для позиционирования */}
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
