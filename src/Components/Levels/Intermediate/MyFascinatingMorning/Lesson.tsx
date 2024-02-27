
import React, { useState } from "react";
import { Tabs, Tab, Button } from "@material-ui/core";
import { Link } from "react-router-dom"; 
import Test from "./Test";
import Grammar from "./Grammar";
import Listening from "./Listening";
import "../../../../styles/Lessons.css";
import ReadingText from "./ReadingText";

const Lesson: React.FC = () => {
    const [value, setValue] = useState(0); 

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="overall fade-in main-container-lessons">

            <Link to="/course/intermediate">Назад</Link>

    
            <Tabs
                className="lesson-tabs"
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Reading" />
                <Tab label="Test" />
                <Tab label="Grammar" />
                <Tab label="Listening" />
            </Tabs>

    
            {value === 0 && <ReadingText />}
            {value === 1 && <Test />}
            {value === 2 && <Grammar />}
            {value === 3 && <Listening />}
        </div>
    );
};

export default Lesson;

