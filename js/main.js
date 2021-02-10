const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];
const PEOPLE = ['Николай', 'Вадим', 'Александр', 'Игорь', 'Алексей', 'Валерия'];
// people же итак во множественном числе?
const DESCRIPTIONS = ['Ночь.', 'Улица.', 'Фонарь.', 'Аптека.'];
const INITIAL_COUNT = 25;

const getRandomNumber = (firstNumber, lastNumber) => {
  if ((firstNumber < 0) || (lastNumber < 0) || (lastNumber <= firstNumber)) {
    throw 'Неверные данные';
  } else {
    return Math.floor(Math.random() * (lastNumber - firstNumber + 1)) + firstNumber;
  }
}
const generateArayWithInfo = (length, cb) => new Array(length).fill().map(cb);

const getRandomElement = (array) => array[getRandomNumber(0, array.length - 1)];

const getRandomComment = () => {
  return {
    id: getRandomId(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: generateArayWithInfo(getRandomNumber(1, 2), () => getRandomElement(COMMENTS)),
    name: getRandomElement(PEOPLE),
  };
};

const getRandomDescriptionPhoto = (k) => {
  return {
    id: generateUnicNumbers()[k],
    url: `photos/${generateUnicNumbers()[k]}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: generateArayWithInfo(getRandomNumber(1, 5), (() => getRandomComment())),
  };
};

const getRandomId = () => Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));

const generateUnicNumbers = (from = 1, to = INITIAL_COUNT, n = to) => [...Array(to - from + 1).keys()].map(i => i + from).reduce((arr, el) => (arr.splice(Math.random() * (arr.length + 1), 0, el), arr), []).slice(0, n);

const descriptionPhotoList = generateArayWithInfo(INITIAL_COUNT, (_, k) => getRandomDescriptionPhoto(k));
console.log(descriptionPhotoList);

// функция для определения попадания длины строки в заданный диапазон
// const isAllowedString = (string, maxLength) => (string.length <= maxLength) ? true : false;
// isAllowedString('hihi', 10);
