// BeginnerTopics.jsx
import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import BeginnerTopic1 from './BeginnerTopic1';
// Импортируйте другие темы по аналогии

const BeginnerTopics = () => {
  const [showTopics, setShowTopics] = useState(true);

  const handleTopicClick = () => {
    setShowTopics(false);
  };

  return (

    <div>
        {showTopics && (
            <>
                <h2>Topics</h2>
                <ul>
                    <li><Link to="topic1" onClick={handleTopicClick}>Topic 1</Link></li>
                    {/* Добавьте другие темы по аналогии */}
                </ul>
            </>
        )}
        <Routes>
            {/* <Route path="topic1" element={<BeginnerTopic1 />} /> */}
            {/* Добавьте другие темы по аналогии */}
        </Routes>
    </div>
  );
};

export default BeginnerTopics;