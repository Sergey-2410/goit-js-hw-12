import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
export function renderGallery(hits, galleryElement) {
  const markup = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
    <a href="${largeImageURL}" class="gallery-link" target="_blank">
      <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
    </a>
    <div class="info">
       <div class="container-likes">
       <p class="info-item"><span>Likes</span> ${likes}</p>
       </div>
      <div class="container-views">
      <p class="info-item"><span>Views</span> ${views}</p>
      </div>
      <div class="container-comments">
      <p class="info-item"><span>Comments</span> ${comments}</p>
      </div>
      <div class="container-downloads">
      <p class="info-item"><span>Downloads</span> ${downloads}</p>
      </div>
    </div>
  </li>`
    )
    .join('');
  galleryElement.insertAdjacentHTML('beforeend', markup);
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}
