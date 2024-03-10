import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TestForm from "../../../../features/TestForm/TestForm";
import Sticker from "../../../../features/Tooltip-for-test/Sticker";
import terms from "./TermListData";
import LessonPagination from "./Pagination/LessonPagination";

const Test: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(parseInt(page || "1"));

  const questionsAndAnswers = [
    {
      question: "to try hard to find out more information about something:",
      options: ["delve into", "hustle and bustle", "meticulously", "cultivate"],
      correctAnswer: "delve into",
    },
    {
      question: "making one feel strong, healthy, and full of energy:",
      options: ["invigorating", "purposeful", "bring forth", "contribute"],
      correctAnswer: "invigorating",
    },
    {
      question:
        "the quality of being thankful; readiness to show appreciation:",
      options: ["invigorating", "grateful", "gratitude", "meticulous"],
      correctAnswer: "gratitude",
    },
    {
      question: "very ordinary and therefore not interesting:",
      options: ["sanctuary", "mundane", "craft", "pivotal"],
      correctAnswer: "mundane",
    },
    {
      question: "details, especially of an involved or perplexing subject:",
      options: ["forth", "intricacies", "savor", "pivotal"],
      correctAnswer: "intricacies",
    },
    {
      question: "variety; life experience:",
      options: ["rich tapestry", "intricacies", "purposeful", "pivotal"],
      correctAnswer: "rich tapestry",
    },
    {
      question: "to drink in small quantities or little by little:",
      options: ["forth", "rich tapestry", "purposeful", "sip on"],
      correctAnswer: "sip on",
    },
    {
      question:
        "in a way that shows great attention to detail; very thoroughly:",
      options: ["forth", "invigorating", "attentive", "meticulously"],
      correctAnswer: "meticulously",
    },
    {
      question: "try to acquire or develop (a quality or skill):",
      options: ["forth", "foster", "cultivate", "meticulously"],
      correctAnswer: "cultivate",
    },
    {
      question: "bring up, encourage the development, adopt a child:",
      options: ["forth", "bring forth", "cultivate", "foster"],
      correctAnswer: "foster",
    },
    {
      question: "give (something, especially money) in order to help achieve:",
      options: ["forth", "bring forth", "contribute", "foster"],
      correctAnswer: "contribute",
    },
    {
      question: "quality of having or showing determination:",
      options: ["purposeful", "contribute", "purpose", "contributive"],
      correctAnswer: "purposeful",
    },
    {
      question: "to enjoy food or a pleasant experience as slowly as possible:",
      options: ["purposeful", "sip on", "savor", "meticulously"],
      correctAnswer: "savor",
    },
    {
      question: "to cause something to happen or be seen or known:",
      options: ["purposeful", "bring about", "bring forth", "affect"],
      correctAnswer: "bring about",
    },
    {
      question: "have an effect on; make a difference to:",
      options: ["affect", "contribute", "bring forth", "effect"],
      correctAnswer: "affect",
    },
  ];

  const totalPages = 4;

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    let path = `/course/intermediate/my-fascinating-morning/lesson/test/${pageNumber}`;
    navigate(path);
  };

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(parseInt(window.location.pathname.split("/").pop() || "1"));
  }, []);

  return (
    <div>
       <div className="pagination-cont">
          <LessonPagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
          />
        </div>
      <div className="lesson-block">
        <div className="sticker-container">
          <Sticker terms={terms} />
        </div>
        <div className="blocks">
          <TestForm questionsAndAnswers={questionsAndAnswers} />
          <LessonPagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
