import './css/styles.css';
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import { PER_PAGE } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('.input');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.btn-load');

function showLoader() {
  loader.classList.remove('hidden');
  loader.classList.add('active');
}

function hideLoader() {
  loader.classList.remove('active');
  loader.classList.add('hidden');
}

let currentPage = 1;
let searchquery = null;
let totalPages = 0;

form.addEventListener('submit', formSubmit);
loadMoreBtn.addEventListener('click', loadMoreCard);

async function formSubmit(event) {
  event.preventDefault();

  const formEL = event.currentTarget;
  searchquery = form.elements.query.value;
  if (!searchquery) {
    iziToast.error({
      message: 'Error, the search field cannot be empty!',
      position: 'topRight',
    });
    return;
  }
  gallery.innerHTML = '';
  currentPage = 1;

  showLoader();

  try {
    const { hits, totalHits } = await fetchImages(searchquery);
    if (hits.length === 0) {
      throw new Error('No cards found');
    }
    totalPages = Math.ceil(totalHits / PER_PAGE);
    renderGallery(hits, gallery);
    loadMoreBtn.classList.remove('is-hidden');
  } catch (error) {
    console.log(error.message);
    loadMoreBtn.classList.add('is-hidden');
  } finally {
    formEL.reset();
    hideLoader();
  }
}

async function loadMoreCard() {
  currentPage += 1;
  showLoader();
  try {
    loadMoreBtn.classList.remove('is-hidden');
    const { hits } = await fetchImages(searchquery, currentPage);
    renderGallery(hits, gallery);
    loadMoreScroll();
    if (currentPage >= Math.min(totalPages, 3)) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.info({
        message:
          'We are sorry, but you have reached the end of search results.',
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function loadMoreScroll() {
  const lastHit = gallery.lastElementChild;
  const hitHeight = lastHit.getBoundingClientRect().height;
  const scrollHeight = hitHeight * 3;

  window.scrollBy({
    top: scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
}
