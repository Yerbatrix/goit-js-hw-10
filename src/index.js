import axios from 'axios';

const fetchBreedsBtn = document.querySelector('.btn');

fetchBreedsBtn.addEventListener('click', () => {
  try {
    axios.defaults.headers.common['x-api-key'] =
      'live_44KoTHoJ2869pUV9FwAO5e9D0JiJL83lJX8R3UNouJWAxwNjRYasMKJxe6ZXajcd';

    axios
      .get(`https://api.thecatapi.com/v1/breeds`)
      .then(res => res.data)
      .then(data => console.log(data));
  } catch (error) {
    console.log(error);
  }
});
