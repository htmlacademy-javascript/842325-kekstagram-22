import { pageBody } from './show-full.js';
import { HIDDEN_STATE } from './show-full.js';
import { OPEN_MODAL_STATE } from './show-full.js';

const newImageControl = pageBody.querySelector('#upload-file');
const editImageForm = pageBody.querySelector('.img-upload__overlay');
const closeEditForm = editImageForm.querySelector('#upload-cancel');
const editImageButtonSmaller = editImageForm.querySelector('.scale__control--smaller');
const editImageButtonBigger = editImageForm.querySelector('.scale__control--bigger');
const editImageValue = editImageForm.querySelector('.scale__control--value');
const image = editImageForm.querySelector('.img-upload__preview img');
const radioList = document.querySelectorAll('.effects__radio');

newImageControl.addEventListener('input', () => {
  editImageForm.classList.remove(HIDDEN_STATE);
  pageBody.classList.add(OPEN_MODAL_STATE);
});


closeEditForm.addEventListener('click', () => {
  editImageForm.classList.add(HIDDEN_STATE);
  pageBody.classList.remove(OPEN_MODAL_STATE);
  newImageControl.value = '';
  // в тз написано что без обнуления не будет работать, но работает. я неверно понимаю что-то?
});
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    editImageForm.classList.add(HIDDEN_STATE);
    pageBody.classList.remove(OPEN_MODAL_STATE);
    newImageControl.value = '';
  }
})

editImageButtonSmaller.addEventListener('click', () => {
  if (parseInt(editImageValue.value) - 25 >= 25) {
    editImageValue.value = `${parseInt(editImageValue.value) - 25}%`;
    image.style.transform = `scale(${parseInt(editImageValue.value) / 100})`;
  }

});
editImageButtonBigger.addEventListener('click', () => {
  if (parseInt(editImageValue.value) + 25 <= 100) {
    editImageValue.value = `${parseInt(editImageValue.value) + 25}%`;
    image.style.transform = `scale(${parseInt(editImageValue.value) / 100})`;
  }
});

// editImageValue.addEventListener('input', () => {
//   console.log('test');
// });


const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});
sliderElement.style = 'visibility: hidden';

radioList.forEach((element) => {
  element.addEventListener('change', (evt) => {
    if (evt.target.checked) {
      image.className = '';
      if (element.value !== 'none') {
        sliderElement.style = 'visibility: visible';
        image.classList.add(`effects__preview--${element.value}`);
      } else {
        sliderElement.style = 'visibility: hidden';
        image.style.filter = 'none';
      }
    }

    sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
      sliderValue.value = unencoded[handle];
      if (image.classList.contains('effects__preview--chrome')) {

        // sliderElement.noUiSlider.updateOptions({
        //   range: {
        //     min: 0,
        //     max: 1,
        //   },
        //   start: 1,
        //   step: 0.1,
        // });
        image.style.filter = `grayscale(${sliderValue.value})`;
      } else if (image.classList.contains('effects__preview--sepia')) {

        // sliderElement.noUiSlider.updateOptions({
        //   range: {
        //     min: 0,
        //     max: 1,
        //   },
        //   start: 1,
        //   step: 0.1,
        // });
        image.style.filter = `sepia(${sliderValue.value})`;
      } else if (image.classList.contains('effects__preview--marvin')) {

        // sliderElement.noUiSlider.updateOptions({
        //   range: {
        //     min: 0,
        //     max: 100,
        //   },
        //   start: 100,
        //   step: 1,
        // });
        image.style.filter = `invert(${sliderValue.value}%)`;
      } else if (image.classList.contains('effects__preview--phobos')) {
        // sliderElement.noUiSlider.updateOptions({
        //   range: {
        //     min: 0,
        //     max: 3,
        //   },
        //   start: 3,
        //   step: 0.1,
        // });
        image.style.filter = `blur(${sliderValue.value}px)`;
      } else if (image.classList.contains('effects__preview--heat')) {
        // sliderElement.noUiSlider.updateOptions({
        //   range: {
        //     min: 1,
        //     max: 3,
        //   },
        //   start: 3,
        //   step: 0.1,
        // });
        image.style.filter = `brightness(${sliderValue.value})`;
      } else {
        image.style.filter = 'none';
      }
    });
  });
})









// console.log(sliderValue);

