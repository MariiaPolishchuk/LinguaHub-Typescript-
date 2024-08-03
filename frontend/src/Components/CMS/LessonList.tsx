import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Lesson } from './types';

const LessonList: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    axios.get<Lesson[]>('http://localhost:3000/api/lessons')
      .then(response => {
        setLessons(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the lessons!', error);
      });
  }, []);

  return (
    <div>
      <h1>Lessons</h1>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson._id}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonList;


