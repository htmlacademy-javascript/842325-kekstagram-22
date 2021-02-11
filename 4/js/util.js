const getRandomNumber = (firstNumber, lastNumber) => {
  if ((firstNumber < 0) || (lastNumber < 0) || (lastNumber <= firstNumber)) {
    throw 'Неверные данные';
  } else {
    return Math.floor(Math.random() * (lastNumber - firstNumber + 1)) + firstNumber;
  }
};
export { getRandomNumber };

const isAllowedString = (string, maxLength) => (string.length <= maxLength) ? true : false;
isAllowedString('hihi', 10);
