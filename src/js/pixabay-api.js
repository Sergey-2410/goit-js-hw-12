const API_KEY = '46125124-f513c5cbcff31d6d16e67daed';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(params) {
  const urlParams = new URLSearchParams(params);
  return fetch(`${BASE_URL}?key=${API_KEY}&${urlParams}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      return res.json();
    })
    .catch(error => {
      throw new Error(error.message);
    });
}
