import axios from 'axios';

const API_KEY = '48918931-19353ebecebc74a7aac5f0327';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = searchQuery => {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Error fetching images: ', error);
      return [];
    });
};
