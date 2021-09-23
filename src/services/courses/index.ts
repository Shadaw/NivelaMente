import api from 'services/api';

export const getCourses = async () => {
  try {
    const response = await api.get('/courses');

    return response.data;
  } catch (error) {
    return { error: true, data: error };
  }
};
