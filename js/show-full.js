
import { pictures as currentPictures } from './show.js';
import { randomArray as currentArray } from './show.js';

const bigPictureBlock = document.querySelector('.big-picture');
const bigPictureWrapper = bigPictureBlock.querySelector('.big-picture__img');
let bigPicture = bigPictureWrapper.querySelector('img');
const bigPictureCloseButton = bigPictureBlock.querySelector('.big-picture__cancel');
const bigPictureLike = bigPictureBlock.querySelector('.likes-count');
const bigPictureCommentsCount = bigPictureBlock.querySelector('.comments-count');
const bigPictureCommentsList = bigPictureBlock.querySelector('.social__comments');
const bigPictureCommentsItem = bigPictureCommentsList.querySelector('li');
const bigPictureDescription = bigPictureBlock.querySelector('.social__caption');
const body = document.querySelector('body');

const commentCount = bigPictureBlock.querySelector('.social__comment-count');
const newPicturesButton = bigPictureBlock.querySelector('.comments-loader');
const currentPicturesList = currentPictures.querySelectorAll('.picture');

for (let i = 0; i < currentPicturesList.length; i++) {
  const currentPicture = currentPicturesList[i];
  currentPicture.addEventListener('click', () => {
    body.classList.add('modal-open');
    bigPictureBlock.classList.remove('hidden');
    commentCount.classList.add('hidden');
    newPicturesButton.classList.add('hidden');

    const currentImg = currentPicture.querySelector('.picture__img');
    const currentLike = currentPicture.querySelector('.picture__likes');
    const currentCommentsCount = currentPicture.querySelector('.picture__comments');

    bigPicture.alt = currentImg.alt;
    bigPicture.src = currentImg.src;
    bigPictureLike.textContent = currentLike.textContent;
    bigPictureCommentsCount.textContent = currentCommentsCount.textContent;
    bigPictureDescription.textContent = currentArray[i].description;

    getAllComments(i);
  });
}


const getAllComments = (currentElement) => {
  const obj = currentArray[currentElement];
  const commentsList = obj.comments;
  bigPictureCommentsList.innerHTML = '';
  for (let j = 0; j < commentsList.length; j++) {
    let currentComment = bigPictureCommentsItem.cloneNode(true);
    let currentCommentImg = currentComment.querySelector('.social__picture');
    let currentCommentText = currentComment.querySelector('.social__text');
    let commentMessage = commentsList[j].message.join(' ');
    let commentsMessageList = commentMessage;

    currentCommentImg.src = commentsList[j].avatar;
    currentCommentImg.alt = commentsList[j].name;
    currentCommentText.textContent = commentsMessageList;

    let element = bigPictureCommentsList.appendChild(currentComment);
    bigPictureCommentsList.innerHTML += element;
  }
}

bigPictureCloseButton.addEventListener('click', () => {
  bigPictureBlock.classList.add('hidden');
  body.classList.remove('modal-open');
});







