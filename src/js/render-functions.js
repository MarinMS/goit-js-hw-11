import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let lightbox = new SimpleLightbox('.gallery a');

export const renderGallery = images => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  const markup = images
    .map(
      image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="info">
        <p>Likes<span>${image.likes}</span></p>
        <p>Views <span>${image.views}</span></p>
        <p>Comments<span>${image.comments}</span></p>
        <p>Downloads<span>${image.downloads}</span></p>
      </div>
    </li>
  `
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
};
