import axios from 'axios';

export const fetchBreeds = () => {
  axios.defaults.headers.common['x-api-key'] =
    'live_44KoTHoJ2869pUV9FwAO5e9D0JiJL83lJX8R3UNouJWAxwNjRYasMKJxe6ZXajcd';

  return axios.get(`https://api.thecatapi.com/v1/breeds`).then(res => res.data);
};
