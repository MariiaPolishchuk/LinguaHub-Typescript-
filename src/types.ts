export interface UserState {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export interface Lesson {
  id: string;
  title: string;
  image: string;
  description: string;
  level: string;
}
export interface LessonState {
  intermediate: any;
  lessons: Lesson[]; 
  loading: boolean; 
  error: string | null; 
}



export enum LessonActionTypes {
  ADD_LESSON = "ADD_LESSON",
}

export interface AddLessonAction {
  type: LessonActionTypes.ADD_LESSON;
  lesson: Lesson;
}
