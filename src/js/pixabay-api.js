import axios from 'axios';
const API_KEY = '46125124-f513c5cbcff31d6d16e67daed';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 15;

export async function fetchImages(searchquery, currentPage = 1) {
  const options = new URLSearchParams({
    q: searchquery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page: currentPage,
  });
  const url = `${BASE_URL}?key=${API_KEY}&${options}`;
  const {
    data: { hits, totalHits },
  } = await axios.get(url);

  if (hits.length === 0) {
    throw new Error('No cards found');
  }
  return { hits, totalHits };
}
