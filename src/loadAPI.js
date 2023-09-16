import axios from 'axios';

const baseURL = 'https://64903c021e6aa71680cadc43.mockapi.io'; 


export const fetchCars = async () => {
  const { data } = await axios.get(
    `${baseURL}/adverts`
  );
  console.log(data)
  return data;
};



export const fetchCarById = async id => {
  const { data } = await axios.get(
    `${baseURL}/adverts/:id`
    );
    console.log(data)
    return data;
};


