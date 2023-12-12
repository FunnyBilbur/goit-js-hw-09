import { images } from '/js/gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const markup = images.map(({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"/>
    </a>
    </li>`
);
// console.log(markup);
gallery.insertAdjacentHTML("beforeend", markup.join(""));
var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' /* options */ });



