import axios from 'axios';

export const refreshToken = async () => {
  try {
    const refresh = localStorage.getItem('refresh');
    const response = await axios.post('http://127.0.0.1:8000/token/refresh/', { refresh });
    localStorage.setItem('access', response.data.access);
    return response.data.access;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    throw error;
  }
};


