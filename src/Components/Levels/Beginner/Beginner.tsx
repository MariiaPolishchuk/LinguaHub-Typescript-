import { Routes, Route } from 'react-router-dom';
import BeginnerTopics from './BeginnerTopics';
import React from 'react'; // Import the React module

const Beginner = () => {
    return (
        <div>
            <h1>Beginner Level</h1>
            <Routes>
                <Route path="/*" element={<BeginnerTopics />} />
            </Routes>
        </div>
    );
};

export default Beginner;