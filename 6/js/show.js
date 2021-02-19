import { descriptionPhotoList } from './data.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const randomArray = descriptionPhotoList;

const addHtmlCard = (current) => {
  const picture = templatePicture.cloneNode(true);

  const img = picture.querySelector('.picture__img');
  img.src = randomArray[current].url;

  const info = picture.querySelector('.picture__info');

  const comments = info.querySelector('.picture__comments');
  comments.textContent = randomArray[current].comments.length;

  const likes = info.querySelector('.picture__likes');
  likes.textContent = randomArray[current].likes;

  return picture;

}

const listFragment = document.createDocumentFragment();

randomArray.forEach((_, index) => listFragment.appendChild(addHtmlCard(index)));

pictures.appendChild(listFragment);

export { randomArray };
export { pictures };
