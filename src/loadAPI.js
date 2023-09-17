import axios from 'axios';

const baseURL = 'https://64903c021e6aa71680cadc43.mockapi.io'; 


export const fetchDataAll = async () => {
  const { data } = await axios.get(
    `${baseURL}/adverts`
  );
  return data;
};

export const fetchCars = async (page = 1, limit = 8) => {
    const { data } = await axios.get(`${baseURL}/adverts`, {
      params: {
        limit,
        page,
      },
    });
    return data;
  };


export const fetchCarById = async (id) => {
    try {
      const response = await axios.get(`${baseURL}/adverts/${id}`);
      return response.data;
    } catch (error) {
      console.error('Помилка під час отримання об\'єкта з бази даних:', error);
      throw error;
    }
  };




