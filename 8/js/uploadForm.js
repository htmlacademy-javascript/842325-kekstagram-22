import { pageBody, HIDDEN_STATE, OPEN_MODAL_STATE } from './show-full.js';
import { openModal, closeModal } from './util.js';

const newImageControl = pageBody.querySelector('#upload-file');
const editImageForm = pageBody.querySelector('.img-upload__overlay');
const closeEditForm = editImageForm.querySelector('#upload-cancel');
const editImageButtonSmaller = editImageForm.querySelector('.scale__control--smaller');
const editImageButtonBigger = editImageForm.querySelector('.scale__control--bigger');
const editImageValue = editImageForm.querySelector('.scale__control--value');
const previewImage = editImageForm.querySelector('.img-upload__preview img');
const radioListBlock = pageBody.querySelector('.effects__list');


newImageControl.addEventListener('input', () => {
  openModal(editImageForm, pageBody, HIDDEN_STATE, OPEN_MODAL_STATE);
});


closeEditForm.addEventListener('click', () => {
  closeModal(editImageForm, pageBody, HIDDEN_STATE, OPEN_MODAL_STATE);
  newImageControl.value = '';
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode !== 27) {

    return;
  } else {
    closeModal(editImageForm, pageBody, HIDDEN_STATE, OPEN_MODAL_STATE);
    newImageControl.value = '';
  }
});
// а почему так лучше, а не как было?

const changeNumberToValueOnClick = (changeNumberTo, min, max, button) => {
  button.addEventListener('click', () => {
    const totalValue = parseInt(editImageValue.value) + changeNumberTo;
    if ((totalValue <= max) && (totalValue >= min)) {
      editImageValue.value = `${totalValue}%`;
      previewImage.style.transform = `scale(${parseInt(editImageValue.value) / max})`;
    }
  })
};

changeNumberToValueOnClick(-25, 25, 100, editImageButtonSmaller);
changeNumberToValueOnClick(25, 25, 100, editImageButtonBigger);


export { radioListBlock, pageBody, previewImage };
