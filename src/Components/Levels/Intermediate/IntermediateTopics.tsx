
// import React from "react";
// import { Link } from "react-router-dom";

// interface Styles {
//   container?: React.CSSProperties;
// }

// const styles: Styles = {
//   container: {
//     padding: '20px',
//     borderRadius: '5px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   },
// };

// const IntermediateTopics: React.FC = () => {
//   return (
//     <div style={styles.container}>
//       <h2>Topics</h2>
//       <div className="topic-list">
//         <Link to="myfascinatingmorning/*">My Fascinating Morning</Link>
//       </div>
//     </div>
//   );
// };

// export default IntermediateTopics;

// IntermediateTopics.tsx

import React from "react";
import { Link } from "react-router-dom";

const IntermediateTopics: React.FC = () => {
  return (
    <div>
      <h2>Intermediate Topics</h2>
      <div className="topic-list">
        <Link to="myfascinatingmorning">My Fascinating Morning</Link>
      </div>
    </div>
  );
};

export default IntermediateTopics;
