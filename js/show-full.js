
import { pictures as currentPictures } from './show.js';
import { randomArray as randomPhotoList } from './show.js';

const pageBody = document.body;
const bigPictureBlock = pageBody.querySelector('.big-picture');
const bigPictureWrapper = bigPictureBlock.querySelector('.big-picture__img');
const bigPicture = bigPictureWrapper.querySelector('img');
const bigPictureCloseButton = bigPictureBlock.querySelector('.big-picture__cancel');
const bigPictureLike = bigPictureBlock.querySelector('.likes-count');
const bigPictureCommentsCount = bigPictureBlock.querySelector('.comments-count');
const bigPictureCommentsList = bigPictureBlock.querySelector('.social__comments');
const bigPictureCommentsItem = bigPictureCommentsList.querySelector('li');
const bigPictureDescription = bigPictureBlock.querySelector('.social__caption');

const HIDDEN_STATE = 'hidden';
const OPEN_MODAL_STATE = 'modal-open';


const commentCount = bigPictureBlock.querySelector('.social__comment-count');
const newPicturesButton = bigPictureBlock.querySelector('.comments-loader');
const currentPicturesList = currentPictures.querySelectorAll('.picture');
const listFragment = document.createDocumentFragment();

currentPicturesList.forEach((_, index, collection) => {
  const currentPicture = collection[index];
  currentPicture.addEventListener('click', () => {
    pageBody.classList.add(OPEN_MODAL_STATE);
    bigPictureBlock.classList.remove(HIDDEN_STATE);
    commentCount.classList.add(HIDDEN_STATE);
    newPicturesButton.classList.add(HIDDEN_STATE);

    const currentImg = currentPicture.querySelector('.picture__img');
    const currentLike = currentPicture.querySelector('.picture__likes');
    const currentCommentsCount = currentPicture.querySelector('.picture__comments');

    bigPicture.alt = currentImg.alt;
    bigPicture.src = currentImg.src;
    bigPictureLike.textContent = currentLike.textContent;
    bigPictureCommentsCount.textContent = currentCommentsCount.textContent;
    bigPictureDescription.textContent = randomPhotoList[index].description;


    getAllComments(index);
  });
})

const getAllComments = (currentElement) => {
  const commentsList = randomPhotoList[currentElement].comments;
  bigPictureCommentsList.innerHTML = '';
  commentsList.forEach((_, index, array) => {
    const currentComment = bigPictureCommentsItem.cloneNode(true);
    const currentCommentImg = currentComment.querySelector('.social__picture');
    const currentCommentText = currentComment.querySelector('.social__text');
    const commentMessage = array[index].message.join(' ');

    currentCommentImg.src = array[index].avatar;
    currentCommentImg.alt = array[index].name;
    currentCommentText.textContent = commentMessage;

    listFragment.appendChild(currentComment);

  });
  bigPictureCommentsList.appendChild(listFragment);
}


bigPictureCloseButton.addEventListener('click', () => {
  bigPictureBlock.classList.add(HIDDEN_STATE);
  pageBody.classList.remove(OPEN_MODAL_STATE);
});
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPictureBlock.classList.add(HIDDEN_STATE);
    pageBody.classList.remove(OPEN_MODAL_STATE);
  }
})








