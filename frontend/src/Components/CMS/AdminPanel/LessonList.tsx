import React, { useState } from "react";
import { Lesson } from "../types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SidePanel from "./Sidebar";

interface LessonListProps {
  lessons: Lesson[];
}

const LessonList: React.FC<LessonListProps> = ({ lessons }) => {
  const [editLesson, setEditLesson] = useState<Lesson | null>(null);
  const [deleteLesson, setDeleteLesson] = useState<Lesson | null>(null);

  const handleEditLesson = (lesson: Lesson) => {
    setEditLesson(lesson);
  };

  const handleDeleteLesson = (lesson: Lesson) => {
    setDeleteLesson(lesson);
  };

  const handleCancelDelete = () => {
    setDeleteLesson(null);
  };

  const handleConfirmDelete = () => {
    //  delete logic here
    setDeleteLesson(null);
  };

  return (
    <div>
      <div className="admin-border">
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <SidePanel />
          </Grid>
          <Grid item xs={10}>
            <List>
              {lessons.map((lesson) => (
                <ListItem key={lesson.id}>
                  <ListItemText primary={lesson.title} />
                  <ListItemSecondaryAction>
                    <IconButton
                      onClick={() => handleEditLesson(lesson)}
                      aria-label="edit"
                    >
                      Edit
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteLesson(lesson)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Dialog open={!!editLesson} onClose={() => setEditLesson(null)}>
              <DialogTitle>Edit Lesson</DialogTitle>
              <DialogContent>
                <TextField
                  label="Lesson Title"
                  value={editLesson?.title || ""}
                  onChange={(e) =>
                    setEditLesson({ ...editLesson!, title: e.target.value })
                  }
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setEditLesson(null)}>Cancel</Button>
                <Button onClick={() => setEditLesson(null)}>Save</Button>
              </DialogActions>
            </Dialog>
            <Dialog open={!!deleteLesson} onClose={handleCancelDelete}>
              <DialogTitle>Confirm Delete</DialogTitle>
              <DialogContent>
                <p>Are you sure you want to delete this lesson?</p>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCancelDelete}>Cancel</Button>
                <Button onClick={handleConfirmDelete}>Delete</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LessonList;
