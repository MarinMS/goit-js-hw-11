import iziToast from 'izitoast';
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
    });
    return;
  }

  loader.classList.remove('hidden');

  fetchImages(query)
    .then(images => {
      renderGallery(images);
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
});
