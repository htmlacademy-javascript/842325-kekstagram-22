let randomNumber = function (firstNumber, lastNumber) {
  if ((firstNumber < 0) || (lastNumber < 0) || (lastNumber <= firstNumber)) {
    return false;
  }
  return Math.floor(Math.random() * (lastNumber - firstNumber + 1)) + firstNumber;
}
randomNumber(0, 10);

// https://ru.stackoverflow.com/questions/863591/Случайное-число-от-1-до-100

let maxStringLength = function (string, maxLength) {
  string = string.toString();
  let length = string.length;
  if (length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
maxStringLength('hihi', 10);
