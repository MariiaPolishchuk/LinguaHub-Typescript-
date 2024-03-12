import React, { useState, useEffect } from "react";

const useQuizLogic = (words: string[]) => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [initialStyles, setInitialStyles] = useState<React.CSSProperties[]>([]);

  const shuffleWords = () => {
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
    setAnswers(shuffledWords);
  };

  useEffect(() => {
    shuffleWords();
  }, [words]);

  useEffect(() => {
    const answerSpans = document.querySelectorAll(".answer");
    const styles: React.CSSProperties[] = [];
    answerSpans.forEach((answer) => {
      const computedStyle = getComputedStyle(answer);
      const style: React.CSSProperties = {
        appearance: computedStyle.appearance as React.CSSProperties["appearance"],
      };
      styles.push(style);
    });
    setInitialStyles(styles);
  }, [words]); 

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const drop = (event: React.DragEvent<HTMLDivElement>, index: number) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = event.currentTarget;

    if (draggedElement.classList.contains("answer")) {
      const wordToRestore = draggedElement.innerText.trim();
      if (!wordToRestore) {
        draggedElement.innerText = data;
        draggedElement.classList.add("quiz-answer");
        const dragItem = findDragItemByText(data) as HTMLElement;
        if (dragItem) {
          dragItem.style.display = "none";
        }
      } else {
        const prevDragItem = findDragItemByText(wordToRestore) as HTMLElement;
        if (prevDragItem) {
          prevDragItem.style.display = "block";
        }
        draggedElement.innerText = data;
        const dragItem = findDragItemByText(data) as HTMLElement;
        if (dragItem) {
          dragItem.style.display = "none";
        }
      }
      setAnswers(prevAnswers => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[index] = data;
        return updatedAnswers;
      });
    } else {
      draggedElement.classList.add("incorrect-quiz");
    }
  };

  const drag = (event: React.DragEvent<HTMLDivElement>, word: string) => {
    event.dataTransfer.setData("text", word);
  };

  const checkQuizAnswers = () => {
    const answerSpans = document.querySelectorAll(".answer");
    answerSpans.forEach((span, index) => {
      span.classList.remove("correct-quiz", "incorrect-quiz");
      const userAnswer = span.textContent?.trim();
      const correctAnswer = words[index];
      if (userAnswer === correctAnswer) {
        span.classList.add("correct-quiz");
      } else {
        span.classList.add("incorrect-quiz");
      }
    });
  };

  const resetQuiz = () => {
    const answerSpans = document.querySelectorAll(".answer");
    answerSpans.forEach((span, index) => {
      span.textContent = "";
      if (initialStyles[index]) {
        const spanElement = span as HTMLElement;
        Object.assign(spanElement.style, initialStyles[index]);
      }
    });

    const dragItems = document.querySelectorAll(".drag-item");
    dragItems.forEach((item) => {
      const dragItem = item as HTMLElement;
      dragItem.style.display = "block";
    });

    shuffleWords();
  };

  const showCorrectAnswers = () => {
    const answerSpans = document.querySelectorAll(".answer");
    answerSpans.forEach((answer, index) => {
      answer.textContent = words[index];
    });
  };

  const findDragItemByText = (text: string) => {
    const dragItems = document.querySelectorAll(".drag-item");
    for (const item of dragItems as any) {
      if ((item as HTMLElement).innerText.trim() === text) {
        return item as HTMLElement;
      }
    }
    return null;
  };

  return {
    answers,
    drop,
    allowDrop,
    drag,
    checkQuizAnswers,
    resetQuiz,
    showCorrectAnswers,
  };
};

export default useQuizLogic;



