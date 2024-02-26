
import { useState } from "react";
import RandomQuestions from './Levels/Intermediate/MyFascinatingMorning/RandomQuestions';



const useRandomQuestion = () => {
    const [outputText, setOutputText] = useState("");

    const askRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * RandomQuestions.length);
        const randomQuestion = RandomQuestions[randomIndex];
        setOutputText(randomQuestion);
    };

    return { outputText, askRandomQuestion };
};

export default useRandomQuestion;

