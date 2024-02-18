import axios from 'axios';
import Notiflix from 'notiflix';

export const fetchBreeds = () => {
  axios.defaults.headers.common['x-api-key'] =
    'live_44KoTHoJ2869pUV9FwAO5e9D0JiJL83lJX8R3UNouJWAxwNjRYasMKJxe6ZXajcd';

  return axios
    .get(`https://api.thecatapi.com/v1/breeds`)
    .then(res => res.data)
    .catch(error => {
      Notiflix.Notify.failure('Nie można pobrać listy ras.');
      throw new Error('Nie można pobrać listy ras.');
    });
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => res.data);
};
