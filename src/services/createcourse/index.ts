import api from 'services/api';

type createCourseParams = {
  image: File[];
  title: string;
  description: string;
  category: string;
  token: string;
};

export const createCourse = async ({ image, title, description, category, token }: createCourseParams) => {
  const formData = new FormData();

  formData.append('image', image[0]);
  formData.append('title', title);
  formData.append('description', description);
  formData.append('category', category);
  formData.append('status', 'draft');

  try {
    const response = await api.post('/courses', formData, {headers: {Authorization: `Bearer ${token}`}});

    return response.data;
  } catch (error) {
    return { error: true, message: error };
  }
};
