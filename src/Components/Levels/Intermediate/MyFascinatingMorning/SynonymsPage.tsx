import React, { useState } from "react";
import Synonyms from "../../../../features/Find-synonyms/Synonyms";
import { words, synonyms } from "./SynonymsData";
import LessonPagination from "./Pagination/LessonPagination";

const SynonymsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 4;

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pagination-cont">
      <LessonPagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
      <div className="synonyms-page block">
        <Synonyms words={words} synonyms={synonyms} />
        <LessonPagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
        />
      </div>
    </div>
  );
};

export default SynonymsPage;
