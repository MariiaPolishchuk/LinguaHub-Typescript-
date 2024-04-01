export interface CMSProps {
    levels: string[];
    onAddLesson: (level: string, lesson: Lesson) => void;
}

export interface Lesson {
    id: string;
    level: string;
    title: string;
    description: string;
    image: string;
}


export interface CourseLevelsProps {
    levels: string[]; 
}
// types.ts
// types.ts
export interface LessonData {
    id: string; // Тип id изменен на строку
    lessonName: string;
    lessonDescription: string;
    startPath: string;
}

  