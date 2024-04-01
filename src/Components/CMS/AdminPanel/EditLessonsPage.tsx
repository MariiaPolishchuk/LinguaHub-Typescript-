import React from "react";
import LessonList from "./LessonList";
import { Lesson } from "../types";
import "../../../styles/AdminBorder.css";

interface EditLessonsPageProps {
  lessons: Lesson[];
}

const EditLessonsPage: React.FC<EditLessonsPageProps> = ({ lessons }) => {
  return (
    <div>
      <h3>Edit Existing Lessons</h3>
      <LessonList lessons={lessons} />
    </div>
  );
};

export default EditLessonsPage;
