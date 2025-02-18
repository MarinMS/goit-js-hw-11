import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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

  images.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.innerHTML = `
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="info">
        <p>Likes<span>${image.likes}</span> </p>
        <p>Views <span>${image.views}</span></p>
        <p>Comments<span>${image.comments}</span> </p>
        <p>Downloads<span>${image.downloads}</span> </p>
      </div>
    `;
    gallery.appendChild(galleryItem);
  });

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
};
