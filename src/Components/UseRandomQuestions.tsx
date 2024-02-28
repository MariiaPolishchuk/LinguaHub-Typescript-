import { useState, useEffect } from "react";

const useRandomQuestion = (questions: string[]) => {
    const [outputText, setOutputText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (questions.length === 0) {
            setOutputText(""); // Обнуляем outputText, если вопросов нет
            setIsModalOpen(false); // Закрываем модальное окно, если вопросов нет
        }
    }, [questions]);

    const askRandomQuestion = () => {
        if (questions.length === 0) return; // Добавляем проверку наличия вопросов
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];
        setOutputText(randomQuestion);
        setIsModalOpen(true);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return { outputText, askRandomQuestion, isModalOpen, toggleModal };
};

export default useRandomQuestion;


