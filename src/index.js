import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorElement = document.querySelector('.error');

errorElement.classList.add('hidden');

function handleError(error) {
  Notiflix.Notify.failure(`Wystąpił błąd: ${error}`);
  errorElement.classList.remove('hidden');
  loader.classList.add('hidden');
}

try {
  loader.classList.remove('hidden');
  fetchBreeds()
    .then(data => {
      renderSelect(data);
      new SlimSelect({
        select: breedSelect,
        settings: {
          placeholderText: '---Choose one of this marvelous creatures---',
        },
      });
    })
    .catch(handleError);
} catch (error) {
  handleError(error);
}

function renderSelect(breeds) {
  breedSelect.innerHTML = '';
  breedSelect.insertAdjacentHTML(
    'beforeend',
    `<option data-placeholder="true"></option>`
  );
  const markup = breeds
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  breedSelect.insertAdjacentHTML('beforeend', markup);
  loader.classList.add('hidden');
}

breedSelect.addEventListener('change', e => {
  loader.classList.remove('hidden');
  fetchCatByBreed(e.target.value)
    .then(data => renderCat(data[0]))
    .catch(handleError);
});

function renderCat(catData) {
  errorElement.classList.add('hidden');
  catInfo.innerHTML = '';
  const { url } = catData;
  const { description, name, temperament } = catData.breeds[0];
  catInfo.insertAdjacentHTML(
    'beforeend',
    `<div>
  
  <h2>${name}</h2>
    <div class="breed-fluff">
  <img width = "800" src = ${url} alt = ${name}/>
  <div class="desrc-temp">
  <h4>Description</h4>
  <p>${description}</p>
  <p><span class="temp-span">Temperament:</span> ${temperament}</p>
  </div>
  </div>
  </div>`
  );
  loader.classList.add('hidden');
}
