import React, { useState } from "react";
import VocabularyPractice from "../../../../features/VocabularyDragText/VocabularyPractise";
import Sticker from "../../../../features/Tooltip-for-test/Sticker";
import terms from "./TermListData";
import LessonPagination from "./Pagination/LessonPagination";

const VocabularyPracticePage = ({
  text,
  words,
}: {
  text: string;
  words: string[];
}) => {
  const [currentPage, setCurrentPage] = useState(4);
  const totalPages = 4;

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
          <VocabularyPractice text={text} words={words} />

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

export default VocabularyPracticePage;
