import fetchBreeds from './cat-api';

const fetchBreedsBtn = document.querySelector('.btn');
const breedSelect = document.querySelector('.breed-select');

fetchBreedsBtn.addEventListener('click', () => {
  try {
    fetchBreeds().then(data => renderSelect(data));
  } catch (error) {
    console.log(error);
  }
});

function renderSelect(breeds) {
  const markup = breeds
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  breedSelect.insertAdjacentHTML('beforeend', markup);
}
