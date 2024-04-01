import React, { useState, useEffect } from "react";
import CMSForm from "../CMSForm";
import { Lesson } from "../types";
import Modal from "./Modal";
import { Route, Routes } from "react-router-dom"; 
import Grid from "@mui/material/Grid";
import "../../../styles/AdminBorder.css";
import SidePanel from "./Sidebar";
import LessonList from "./LessonList";
import EditLessonsPage from "./EditLessonsPage";

interface AdminPanelProps {
    levels: string[];
}

const AdminPanel: React.FC<AdminPanelProps> = ({ levels }) => {
    const [imageList, setImageList] = useState<string[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [lessons, setLessons] = useState<Lesson[]>([]);


    useEffect(() => {
        const fetchedImageList = [
            "/src/assets/images/Intermediate/b11.png",
            "/src/assets/images/Intermediate/my-fascinating-morning.png",
            "/src/assets/images/Intermediate/job-int.png",
        ];
        setImageList(fetchedImageList);
    }, []);

    const handleAddLesson = (lesson: Lesson) => {
        setLessons([...lessons, lesson]);
    };


    return (
        <div className="admin-border">
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <SidePanel />
                </Grid>
                <Grid item xs={10}>
                    <div className="add-lesson">
                        <CMSForm
                            levels={levels}
                            imageList={imageList}
                            onAddLesson={handleAddLesson}
                        />
                        <Modal
                            imageList={imageList}
                            onSelectImage={(imageUrl: string) => {}}
                            isOpen={isModalOpen}
                            closeModal={() => setIsModalOpen(false)}
                        />
                        {/* <h3>MyLessons:</h3>
                        <LessonList lessons={lessons} /> */}
                    </div>
                </Grid>
            </Grid>
            <Routes>
              <Route path="/admin-panel/edit" element= {<EditLessonsPage lessons={lessons} />} ></Route>
              <Route path="/admin-panel/my-lessons" element= {<LessonList lessons={lessons} />} ></Route>
            </Routes>
        </div>
    );
};

export default AdminPanel;