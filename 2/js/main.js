const randomNumber = (firstNumber, lastNumber) => {
  if ((firstNumber < 0) || (lastNumber < 0) || (lastNumber <= firstNumber)) {
    throw 'Неверные данные';
  } else {
    return Math.floor(Math.random() * (lastNumber - firstNumber + 1)) + firstNumber;
  }
}
randomNumber(-1, 10);

// https://ru.stackoverflow.com/questions/863591/Случайное-число-от-1-до-100

const maxStringLength = (string, maxLength) => {
  return (string.length <= maxLength) ? true : false;
}
maxStringLength('hihi', 10);
