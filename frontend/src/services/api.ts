import axios from 'axios';

const API_URL = 'http://localhost:3000/api/lessons';

export const getLessons = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createLesson = async (lesson: any) => {
  const response = await axios.post(API_URL, lesson);
  return response.data;
};

export const updateLesson = async (id: any, lesson: any) => {
  const response = await axios.put(`${API_URL}/${id}`, lesson);
  return response.data;
};

export const deleteLesson = async (id: any) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
