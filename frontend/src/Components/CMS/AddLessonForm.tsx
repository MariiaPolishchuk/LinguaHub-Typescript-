import React, { useState } from 'react';
import { createLesson } from '../../services/api';

const AddLessonForm: React.FC<{ onLessonAdded: () => void }> = ({ onLessonAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const lesson = { title, description, content };
    await createLesson(lesson);
    onLessonAdded(); // Обновление списка уроков после добавления
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
      <button type="submit">Add Lesson</button>
    </form>
  );
};

export default AddLessonForm;

