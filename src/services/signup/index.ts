import api from 'services/api';

type signUpParams = {
  name: string;
  email: string;
  password: string;
  teacher: boolean;
};

export const signUp = async ({
  name,
  email,
  password,
  teacher,
}: signUpParams) => {
  try {
    const response = await api.post('/users', {
      name,
      email,
      password,
      teacher,
    });

    return response.data;
  } catch (error) {
    return { error: true, message: error };
  }
};
