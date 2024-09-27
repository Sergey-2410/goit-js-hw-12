import './css/styles.css';
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showError } from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('.input');
const loader = document.querySelector('.loader');

function showLoader() {
  loader.classList.remove('hidden');
  loader.classList.add('active');
}

function hideLoader() {
  loader.classList.remove('active');
  loader.classList.add('hidden');
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();
  if (query === '') {
    showError(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    return;
  }

  const params = {
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  gallery.innerHTML = '';
  showLoader();

  fetchImages(params)
    .then(data => {
      hideLoader();
      if (data.hits.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }
      renderGallery(data, gallery);
    })
    .catch(error => {
      showError('Something went wrong. Please try again later.');
    });

  form.reset();
});
