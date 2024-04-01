import React, { useState } from "react";
import { Lesson } from "./types";


interface LessonEditorProps {
    onSaveLesson: (lesson: Lesson) => void; 
}

const LessonEditor: React.FC<LessonEditorProps> = ({ onSaveLesson }) => {
    const [lessonTitle, setLessonTitle] = useState<string>("");
    const [lessonDescription, setLessonDescription] = useState<string>("");
    const [lessonImage, setLessonImage] = useState<string>("");

    const handleSaveLesson = () => {
        if (!lessonTitle || !lessonDescription || !lessonImage) {
            alert("Please fill all fields");
            return;
        }

        const newLesson: Lesson = {
            id: "", // Генерируйте ID урока
            title: lessonTitle,
            description: lessonDescription,
            image: lessonImage,
            level: "", // Добавьте уровень урока
        };

        onSaveLesson(newLesson); // Передаем только один параметр
        setLessonTitle("");
        setLessonDescription("");
        setLessonImage("");
    };

    return (
        <div>
            <h3>2. Add Lesson Details/lesson page </h3>
            <label htmlFor="lessonTitle">Lesson Title:</label>
            <input
                type="text"
                id="lessonTitle"
                value={lessonTitle}
                onChange={(e) => setLessonTitle(e.target.value)}
            />
            <br />
            <label htmlFor="lessonDescription">Lesson Description:</label>
            <textarea
                id="lessonDescription"
                value={lessonDescription}
                onChange={(e) => setLessonDescription(e.target.value)}
            />
            <br />
            <label htmlFor="lessonImage">Lesson Image URL:</label>
            <input
                type="text"
                id="lessonImage"
                value={lessonImage}
                onChange={(e) => setLessonImage(e.target.value)}
            />
            <br />
            <div className="cms-buttons">
            <button onClick={handleSaveLesson}>Save Lesson</button>
            </div>
            
        </div>
    );
};

export default LessonEditor;
