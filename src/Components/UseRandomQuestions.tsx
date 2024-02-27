
import { useState } from "react";
import RandomQuestions from './Levels/Intermediate/MyFascinatingMorning/RandomQuestions';

const useRandomQuestion = () => {
    const [outputText, setOutputText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const askRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * RandomQuestions.length);
        const randomQuestion = RandomQuestions[randomIndex];
        setOutputText(randomQuestion);
        setIsModalOpen(true);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return { outputText, askRandomQuestion, isModalOpen, toggleModal };
};

export default useRandomQuestion;
