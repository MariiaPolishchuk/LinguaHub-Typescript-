import React from "react";
import LessonList from "./LessonList";
import { Lesson } from "../types";
import "../../../styles/AdminBorder.css";
import SidePanel from "./Sidebar";
import { Grid } from "@mui/material";

interface EditLessonsPageProps {
  lessons: Lesson[];
}

const EditLessonsPage: React.FC<EditLessonsPageProps> = ({ lessons }) => {
  return (
    <div className="admin-border">
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <SidePanel />
        </Grid>
        <Grid item xs={10}>
          <h3>Edit Existing Lessons</h3>
          <LessonList lessons={lessons} />
        </Grid>
      </Grid>
    </div>
  );
};

export default EditLessonsPage;
