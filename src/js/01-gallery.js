// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const listGallery = document.querySelector('.gallery');
const linkImageAll = listGallery.querySelectorAll(".gallery__item");

const markup = galleryItems.map((image)=>
`<a class="gallery__item" href="${image.original}">
    <img
    class="gallery__image"
    src="${image.preview}"
    alt="${image.description}"
    title="${image.description}"
    />
</a>` ).join('');
listGallery.insertAdjacentHTML( 'beforeend', markup);

listGallery.addEventListener('click', onClickImage);

function onClickImage(event){
    event.preventDefault();
    const lightbox = new SimpleLightbox('.gallery a', {  captionDelay: 250,})
    
    
}

console.log(galleryItems);
console.log(galleryItems);
