import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const divWithGalleryId = document.querySelector('.gallery');
divWithGalleryId.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
	<a class="gallery__item" href="${original}">
	<img
	class="gallery__image"
	src="${preview}"
	alt="${description}"
	/>
	</a>
	`
  )
  .join('');

new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});