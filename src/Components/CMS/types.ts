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

export interface LessonData {
  id: string;
  lessonName: string;
  lessonDescription: string;
  startPath: string;
}
