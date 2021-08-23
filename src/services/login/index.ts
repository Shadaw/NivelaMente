import api from 'services/api';

type LoginParams = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginParams) => {
  try {
    const response = await api.post('/sessions', { email, password });

    return response.data;
  } catch (error) {
    return { error: true, message: error };
  }
};
